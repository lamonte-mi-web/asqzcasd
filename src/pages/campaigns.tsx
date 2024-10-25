// pages/index.tsx
import { useEffect, useState } from "react";
import CardCampaign from "../components/CardCampaign";
import { getCampaigns } from "../utils/campaign"; // Mengimpor fungsi untuk mengambil data dari Firebase

// Mendefinisikan tipe Campaign
interface Campaign {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  endDate: string;
  targetAmount: string;
}

const Home = () => {
  const [campaignData, setCampaignData] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Menambahkan state untuk menangani error

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const campaigns = await getCampaigns();
        setCampaignData(campaigns);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        setError("Failed to fetch campaigns."); // Menyimpan pesan error
      } finally {
        setLoading(false); // Mengubah status loading
      }
    };

    fetchCampaigns(); // Memanggil fungsi fetchCampaigns
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>; // Tampilkan loader jika masih loading
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>; // Tampilkan pesan error
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaignData.map((campaign) => (
            <CardCampaign
              key={campaign.id}
              id={campaign.id}
              title={campaign.title}
              description={campaign.description}
              buttonText={campaign.buttonText}
              imageUrl={campaign.imageUrl}
              endDate={campaign.endDate}
              targetAmount={campaign.targetAmount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
