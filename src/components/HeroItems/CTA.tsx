// components/CTA.tsx
import React, { useState } from "react";
import DonationButton from "../DonationButton"; // Impor DonationButton
import DonationPopup from "../DonationPopup"; // Impor DonationPopup jika diperlukan

export default function CTA() {
  const [isDonationPopupVisible, setIsDonationPopupVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="text-center text-xl mb-6 max-w-[800px]">
        Dukung berbagai inisiatif sosial dan proyek kemanusiaan. Setiap
        kontribusi Anda membawa harapan dan dampak nyata bagi mereka yang
        membutuhkan.
      </p>

      <div className="flex space-x-4">
        <DonationButton
          buttonText="Donasi Sekarang →" // Menggunakan text untuk tombol
          setVisible={setIsDonationPopupVisible} // Mengatur visibilitas popup
          className="px-6 py-3 bg-mkspurple text-white font-semibold rounded-md shadow-md hover:bg-mkspurplehover transition duration-300"
        />

        <a
          href="#"
          className="px-6 py-3 border-2 border-gray-400 text-gray-600 font-semibold rounded-md hover:bg-gray-100 transition duration-300"
        >
          Pelajari Lebih Lanjut →
        </a>
      </div>

      {/* Menampilkan DonationPopup jika visibilitasnya true */}
      {isDonationPopupVisible && (
        <DonationPopup
          onClose={() => setIsDonationPopupVisible(false)}
          isVisible={isDonationPopupVisible}
        />
      )}
    </div>
  );
}
