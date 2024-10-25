// components/DonationButton.tsx

import React from "react";

type DonationButtonProps = {
  buttonText: string;
  setVisible: (visible: boolean) => void; // Props untuk mengatur visibilitas
  className?: string; // Tambahkan props className opsional
};

const DonationButton: React.FC<DonationButtonProps> = ({
  buttonText,
  setVisible,
  className,
}) => {
  return (
    <button
      onClick={() => setVisible(true)} 
      className={`bg-mahakarya text-white py-2 px-4 rounded-md hover:bg-mahakarya-dark transition duration-200 ease-in-out shadow-md transform hover:scale-105 ${className}`} // Menggabungkan className yang diberikan
    >
      {buttonText}
    </button>
  );
};

export default DonationButton;
