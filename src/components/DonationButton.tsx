// components/DonationButton.tsx

import React from "react";

type DonationButtonProps = {
  buttonText: string;
  setVisible: (visible: boolean) => void;
  className?: string;
};

const DonationButton: React.FC<DonationButtonProps> = ({
  buttonText,
  setVisible,
  className,
}) => {
  return (
    <button
      onClick={() => setVisible(true)}
      className={`text-white py-2 px-4 rounded-md transition duration-200 ease-in-out shadow-md transform ${className}`}
    >
      {buttonText}
    </button>
  );
};

export default DonationButton;
