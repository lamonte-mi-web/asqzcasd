import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DonationPopup from "./DonationPopup";

export default function Navbar() {
  const [isDonationPopupVisible, setIsDonationPopupVisible] =
    useState<boolean>(false);

  const handleDonationPopup = () => {
    setIsDonationPopupVisible(!isDonationPopupVisible);
  };

  return (
    <>
      <nav>
        <div className="flex justify-between px-8 pt-4 font-poppins">
          <Link href="/" className="flex">
            <Image
              src="/assets/Logo Mahakarya Semesta.png"
              alt="Logo"
              width={270}
              height={75}
              layout="intrinsic"
              priority
              className=""
            />
          </Link>

          <ul className="hidden text-base md:flex md:items-center justify-center">
            <li className="mx-4">
              <Link href="/About">Tentang kami</Link>
            </li>
            <li className="mx-4">
              <Link href="/campaigns">Campaign</Link>
            </li>
            <li className="mx-4">
              <button onClick={handleDonationPopup} className="">
                Donation
              </button>
            </li>
            <li className="mx-4">
              <Link href="/articles">Blog</Link>
            </li>
            <li className="mx-4">
              <Link href="/contact">Kontak</Link>
            </li>
          </ul>
          <div className="">
            <button className="px-6 py-3 bg-mkspurple text-white font-semibold rounded-md shadow-md hover:bg-mkspurplehover transition duration-300">
              Login →
            </button>
          </div>
        </div>
        {isDonationPopupVisible && (
          <DonationPopup
            onClose={handleDonationPopup}
            isVisible={isDonationPopupVisible} // Pass isVisible prop
          />
        )}
      </nav>
    </>
  );
}
