import Link from "next/link";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type DonationPopupProps = {
  onClose: () => void;
  campaignId?: number;
  isVisible: boolean;
};

const DonationPopup: React.FC<DonationPopupProps> = ({
  onClose,
  campaignId,
}) => {
  const [amount, setAmount] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [redirectUrl, setRedirectUrl] = useState<string>("");
  const [paymentStatus, setPaymentStatus] = useState<string>("");
  const [showStatusPopup, setShowStatusPopup] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isDonation, setIsDonation] = useState<boolean>(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    setErrorMessage("");
  };

  // Validasi email
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validasi nomor telepon
  const isValidPhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10,14}$/; // Sesuaikan dengan format yang diinginkan
    return phoneRegex.test(phone);
  };

  const handleDonate = async () => {
    if (!amount) {
      setErrorMessage("Masukkan Nominal");
      return;
    }
    if (parseInt(amount) < 10000) {
      setErrorMessage("Minimal transaksi adalah Rp 10.000.");
      return;
    }
    if (!name && !isAnonymous) {
      setErrorMessage("Nama harus diisi atau pilih opsi anonim.");
      return;
    }
    if (!isValidEmail(email) && !isAnonymous) {
      setErrorMessage("Email tidak valid.");
      return;
    }
    if (!isValidPhone(phone) && !isAnonymous) {
      setErrorMessage("Nomor telepon tidak valid.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://vercel-backend-flax.vercel.app/donate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
            "User-Agent": "CustomUserAgent",
          },
          body: JSON.stringify({
            amount,
            name: isAnonymous ? "Anonim" : name || "Anonim",
            email: isAnonymous
              ? "anonim@gmail.com"
              : email || "anonim@gmail.com",
            phone: isAnonymous ? "1234567891011" : phone || "1234567891011",
            campaignId: campaignId || null,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.redirect_url) {
        setRedirectUrl(data.redirect_url);
        setOrderId(data.order_id);
        setTimeout(() => {
          window.open(data.redirect_url, "_blank");
          setIsDonation(true);
        }, 1000);
      }
    } catch (error) {
      console.error("Error processing donation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const checkPaymentStatus = async (orderId: string) => {
    try {
      const response = await fetch(
        `https://vercel-backend-flax.vercel.app/status/${orderId}`,
        {
          method: "GET",
          headers: {
            "ngrok-skip-browser-warning": "true",
            "User-Agent": "CustomUserAgent",
          },
        }
      );
      const data = await response.json();
      setPaymentStatus(data.transaction_status || "unknown");
      setShowStatusPopup(true);
    } catch (error) {
      console.error("Error checking payment status:", error);
    }
  };

  const handleCloseStatusPopup = () => {
    setShowStatusPopup(false);
    setAmount("");
    setName("");
    setEmail("");
    setPhone("");
    setIsAnonymous(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center animate-fade-in z-[999]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {!isDonation ? (
          <>
            <h2 className="text-xl font-semibold mb-4">Donasi</h2>
            <div className="flex space-x-2 mb-4">
              <button
                className="bg-gray-200 py-2 px-4 rounded"
                onClick={() => setAmount("100000")}
              >
                Rp 100.000
              </button>
              <button
                className="bg-gray-200 py-2 px-4 rounded"
                onClick={() => setAmount("200000")}
              >
                Rp 200.000
              </button>
              <button
                className="bg-gray-200 py-2 px-4 rounded"
                onClick={() => setAmount("500000")}
              >
                Rp 500.000
              </button>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Masukkan nominal"
              className="border border-gray-300 rounded w-full p-2 mb-4"
            />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama"
              className="border border-gray-300 rounded w-full p-2 mb-4"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border border-gray-300 rounded w-full p-2 mb-4"
              required
            />
            <PhoneInput
              country={"id"}
              value={phone}
              onChange={setPhone}
              placeholder="Nomor Telepon"
              inputClass="border border-gray-300 rounded w-full"
              buttonClass="border border-gray-300"
            />
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={() => setIsAnonymous(!isAnonymous)}
                  className="mr-2"
                />
                Anonim
              </label>
            </div>
            <div className="mb-4">
              <input type="checkbox" required className="mr-2" />
              <label>
                Saya setuju dengan{" "}
                <a href="#" className="text-blue-600">
                  syarat dan ketentuan
                </a>{" "}
                dan{" "}
                <a href="#" className="text-blue-600">
                  kebijakan privasi
                </a>
              </label>
            </div>
            <button
              onClick={handleDonate}
              className="bg-blue-600 text-white py-2 rounded w-full mb-2"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Donasi sekarang"}
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 text-gray-700 py-2 rounded w-full"
            >
              Tutup
            </button>
          </>
        ) : (
          <>
            {redirectUrl && (
              <p>
                You will be redirected to:{" "}
                <Link
                  href={redirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Halaman Pembayaran
                </Link>
              </p>
            )}
            <button
              onClick={() => checkPaymentStatus(orderId)}
              className="bg-blue-500 text-white py-2 rounded w-full mt-4"
            >
              Cek Status Pembayaran
            </button>
            <button
              onClick={() => {
                onClose();
                window.location.reload();
              }}
              className="bg-gray-300 text-gray-700 py-2 rounded w-full mt-2"
            >
              Tutup
            </button>
          </>
        )}

        {/* Popup status pembayaran */}
        {showStatusPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-semibold mb-4">Status Pembayaran</h2>
              <p>
                {paymentStatus === "settlement" || paymentStatus === "capture"
                  ? "Pembayaran Berhasil!"
                  : paymentStatus === "pending"
                  ? "Pembayaran Anda Masih Pending."
                  : "Pembayaran Gagal."}
              </p>
              <button
                onClick={handleCloseStatusPopup}
                className="bg-gray-300 text-gray-700 py-2 rounded w-full mt-4"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationPopup;
