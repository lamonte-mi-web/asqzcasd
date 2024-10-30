// pages/index.tsx
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getCampaigns } from "../utils/campaign";
import Link from "next/link";

// Mendefinisikan interface untuk data kampanye
interface Campaign {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  endDate: string;
  targetAmount: string;
}

// Mendefinisikan interface untuk card
interface CardData {
  imageSrc: string;
  title: string;
  description: string;
  ctaText: string;
}

const Campaigns: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Menambahkan state untuk menangani error

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const campaigns: Campaign[] = await getCampaigns();

        const filteredCards = campaigns.map(
          ({ imageUrl, title, description, buttonText }) => ({
            imageSrc: imageUrl,
            title,
            description,
            ctaText: buttonText,
          })
        );

        setCards(filteredCards); // Set data yang difilter
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        setError("Failed to fetch campaigns."); // Menyimpan pesan error
      } finally {
        setLoading(false); // Mengubah status loading
      }
    };

    fetchCampaigns(); // Memanggil fungsi fetchCampaigns
  }, []);

  // Render loading, error, atau campaignData
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Tampilkan error jika ada
  }

  return (
    <div className="font-poppins px-8 mt-24">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-justify md:text-center">
        <p>Mengubah Hidup,</p>
        <p>Membentuk Masa Depan</p>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 justify-items-center">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            ctaText={card.ctaText}
          />
        ))}
      </div>
      <div className="my-12 text-center">
        <Link
          href="/campaigns"
          className="px-6 py-3 bg-mkspurple text-white font-semibold rounded-md shadow-md hover:bg-mkspurplehover transition duration-300"
        >
          Program lainnya
        </Link>
      </div>
    </div>
  );
};

export default Campaigns;
