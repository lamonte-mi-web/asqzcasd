import React from "react";
import Link from "next/link";

const PaymentSuccess: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-4xl font-bold text-green-600">
        Pembayaran Berhasil!
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Terima kasih! Pembayaran Anda telah berhasil diproses.
      </p>
      <Link href="/" passHref>
        <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Kembali ke Beranda
        </button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
