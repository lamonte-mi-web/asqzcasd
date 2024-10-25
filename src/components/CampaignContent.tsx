import React, { useEffect, useState } from "react";
import { getCampaigns } from "../utils/campaign";
import { formatCurrency } from "../utils/format";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type Campaign = {
  id: string;
  title: string;
  imageUrl: string;
  targetAmount: string;
};

interface CampaignContentProps {
  campaignId: string;
}

const CampaignContent: React.FC<CampaignContentProps> = ({ campaignId }) => {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [amount, setAmount] = useState<string>(""); // State for donation amount
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    const fetchCampaignData = async () => {
      const campaigns = await getCampaigns();
      const foundCampaign = campaigns.find(
        (item) => item.id.toString() === campaignId
      );

      if (foundCampaign) {
        setCampaign(foundCampaign);
        try {
          const response = await fetch(
            `https://vercel-backend-flax.vercel.app/total-amount/${foundCampaign.id}`
          );
          const data = await response.json();
          setTotalAmount(data.totalAmount || 0);
        } catch (error) {
          console.error("Error fetching total amount:", error);
        }
      }
    };

    fetchCampaignData();
  }, [campaignId]);

  const handleDonate = async () => {
    if (!amount) {
      setErrorMessage("Masukkan Nominal");
      return;
    }
    if (parseInt(amount) < 10000) {
      setErrorMessage("Minimal transaksi adalah Rp 10.000.");
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
            name: name || "anonim",
            email: "anonim@gmail.com",
            phone: phone || "anonim",
            campaignId: Number(campaignId) || null,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.redirect_url) {
        setTimeout(() => {
          window.open(data.redirect_url, "_blank");
        }, 1000);
      }
    } catch (error) {
      console.error("Error processing donation:", error);
    } finally {
      setIsLoading(false);
      setAmount("");
      setName("");
      setPhone("");
    }
  };

  if (!campaign) {
    return <div>Loading...</div>;
  }

  const handleQuickAmount = (value: number) => {
    setAmount(value.toString());
    setErrorMessage(null); // Clear any previous error
  };

  const remainingAmount = parseInt(campaign.targetAmount) - totalAmount;
  const percentage =
    totalAmount && campaign.targetAmount
      ? (totalAmount / parseFloat(campaign.targetAmount)) * 100
      : 0;

  return (
    <div>
      <div className="flex mt-36 py-16 justify-between items-center bg-mkspurple bg-opacity-[0.06]">
        <div className="order-2 w-[40%]">
          <div className="mb-5 pr-36">
            <img
              src={campaign.imageUrl}
              alt={campaign.title}
              className="object-cover w-full max-w-full"
            />
            <p className="text-center font-bold my-3">
              {percentage.toFixed(2)}%
            </p>
            <div className="bg-white rounded-full h-4 overflow-hidden w-full max-w-full">
              <div
                className="bg-mkspurplehover h-4 rounded-full"
                style={{ width: `${Math.min(percentage, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-8">
              <div className="flex flex-col">
                <p>Terkumpul</p>
                <p className="font-bold text-mkspurple mb-2">
                  {formatCurrency(totalAmount)}
                </p>
              </div>
              <div className="flex flex-col">
                <p>Target</p>
                <p className="text-mkspurple font-bold mb-2">
                  {formatCurrency(parseInt(campaign.targetAmount))}
                </p>
              </div>
              <div className="flex flex-col">
                <p>To Go</p>
                <p className="text-mkspurplehover mb-2 font-bold">
                  {remainingAmount < 0
                    ? "Tercapai"
                    : formatCurrency(remainingAmount)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 flex flex-col w-[40%] justify-center ml-36 space-y-6 text-left">
          <h2 className="text-5xl font-bold text-mksdarkpurple">
            Buka Jalan Masa Depan bagi Setiap Anak
          </h2>
          <p className="text-lg text-mksdarkgray">
            Kami berkomitmen untuk memastikan setiap anak mendapatkan pendidikan
            berkualitas, tanpa memandang latar belakang mereka. Mulai dari
            membangun sekolah di daerah terpencil hingga menyediakan beasiswa
            dan materi pendidikan, kami berusaha menciptakan kesempatan bagi
            semua anak.
          </p>
          <div>
            <p className="font-bold text-xl">Jumlah Donasi</p>
            <input
              type="number"
              className="border border-gray-300 rounded w-full py-2 px-3 mb-2"
              placeholder="Masukkan jumlah donasi"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            {errorMessage && (
              <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
            )}
            <div>
              <input
                type="text"
                className="border border-gray-300 rounded w-full py-2 px-3 mb-2"
                placeholder="Masukkan nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <PhoneInput
                country={"id"}
                value={phone}
                onChange={setPhone}
                placeholder="Nomor Telepon"
                inputClass="border border-gray-300 rounded w-full p-2"
                buttonClass="border border-gray-300"
              />
              {errorMessage && (
                <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
              )}

              <div className="flex gap-2 mb-4">
                {[20000, 50000, 75000, 100000, 500000].map((value) => (
                  <button
                    key={value}
                    className="bg-gray-200 py-2 px-4 rounded"
                    onClick={() => handleQuickAmount(value)}
                  >
                    {formatCurrency(value)}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={handleDonate}
              className="bg-mkspurple text-white py-2 rounded w-full mb-2"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Donasi Sekarang →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignContent;
