import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DonationPopup from "./DonationPopup";

export default function Navbar() {
  const [isDonationPopupVisible, setIsDonationPopupVisible] =
    useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleDonationPopup = () => {
    setIsDonationPopupVisible(!isDonationPopupVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="relative flex justify-between items-center px-8 pt-4 font-poppins">
          {/* Logo di Kiri */}
          <Link href="/" className="flex">
            <Image
              src="/assets/Logo Mahakarya Semesta.png"
              alt="Logo"
              width={270}
              height={75}
              layout="intrinsic"
              priority
              className="sm:w-[270px] sm:h-[75px] w-[115px] h-[32px]"
            />
          </Link>

          {/* Navigasi di Tengah untuk Desktop */}
          <ul className="hidden md:flex md:items-center justify-center flex-grow">
            <li className="mx-4">
              <Link href="/about">Tentang kami</Link>
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
              <Link href="/">Blog</Link>
            </li>
            <li className="mx-4">
              <Link href="/">Kontak</Link>
            </li>
          </ul>

          {/* Tombol Login untuk Desktop */}
          <div className="hidden md:block">
            <button className="px-6 py-3 bg-mkspurple text-white font-semibold rounded-md shadow-md hover:bg-mkspurplehover transition duration-300">
              Login →
            </button>
          </div>

          {/* Tombol Menu Burger untuk Mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden focus:outline-none"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Menu untuk Mobile */}
        {isMobileMenuOpen && (
          <ul className="absolute left-0 right-0 flex flex-col md:hidden bg-white shadow-md z-50">
            {" "}
            <li className="mx-4 my-2">
              <Link href="/">Tentang kami</Link>
            </li>
            <li className="mx-4 my-2">
              <Link href="/campaigns">Campaign</Link>
            </li>
            <li className="mx-4 my-2">
              <button onClick={handleDonationPopup} className="">
                Donation
              </button>
            </li>
            <li className="mx-4 my-2">
              <Link href="/">Blog</Link>
            </li>
            <li className="mx-4 my-2">
              <Link href="/">Kontak</Link>
            </li>
            {/* Tombol Login di Menu Mobile */}
            <li className="mx-4 my-2">
              <button className="px-6 py-3 bg-mkspurple text-white font-semibold rounded-md shadow-md hover:bg-mkspurplehover transition duration-300">
                Login →
              </button>
            </li>
          </ul>
        )}

        {/* Popup Donasi */}
        {isDonationPopupVisible && (
          <DonationPopup
            onClose={handleDonationPopup}
            isVisible={isDonationPopupVisible}
          />
        )}
      </nav>
    </>
  );
}
