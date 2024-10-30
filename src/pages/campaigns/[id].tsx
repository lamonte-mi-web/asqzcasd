// pages/campaign/[id].tsx

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import DonationPopup from "../../components/DonationPopup";
import DonationButton from "../../components/DonationButton"; // Import komponen DonationButton
import { getCampaigns } from "../../utils/campaign";
import { formatCurrency } from "../../utils/format";

type CampaignDetailProps = {
  campaign: {
    id: string;
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
    endDate: string;
    targetAmount: string;
  };
  totalAmount: number;
};

const CampaignDetail: React.FC<CampaignDetailProps> = ({
  campaign,
  totalAmount,
}) => {
  const router = useRouter();
  const [isDonationPopupVisible, setIsDonationPopupVisible] = useState(false);

  const calculateRemainingDays = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 ? diffDays : 0;
  };

  const remainingDays = calculateRemainingDays(campaign.endDate);
  const remainingAmount = parseInt(campaign.targetAmount) - totalAmount;

  const percentage =
    totalAmount && campaign.targetAmount
      ? (totalAmount / parseFloat(campaign.targetAmount)) * 100
      : 0;

  const isCampaignEnded = remainingDays === 0;

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={campaign.imageUrl}
            alt={campaign.title}
            className="h-64 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">{campaign.title}</h3>
            <div
              className="text-gray-600 mb-6"
              dangerouslySetInnerHTML={{ __html: campaign.description }}
            />
            <p className="text-gray-600 mb-5">
              Tenggat waktu:{" "}
              {isCampaignEnded
                ? "Kampanye telah berakhir"
                : `${remainingDays} hari`}
            </p>
            <div className="mb-5">
              <p className="text-gray-600 mb-2">
                Total terkumpul: {formatCurrency(totalAmount)}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-mahakarya h-4 rounded-full"
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                ></div>
              </div>
              <p
                className={`text-gray-600 mb-5 ${
                  remainingAmount > 0 ? "text-red-600" : "text-green-600"
                }`}
              >
                {remainingAmount > 0
                  ? `Kurang: ${formatCurrency(
                      remainingAmount
                    )} untuk mencapai target`
                  : `Total terkumpul melebihi target sebesar ${formatCurrency(
                      totalAmount - parseInt(campaign.targetAmount)
                    )}!`}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {percentage.toFixed(2)}% dari target tercapai
              </p>
            </div>
            <DonationButton
              buttonText={campaign.buttonText}
              setVisible={setIsDonationPopupVisible}
              className="bg-mahakarya"
            />
            <button
              onClick={() => router.back()}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ml-4"
            >
              Kembali ke Home
            </button>
          </div>
        </div>
      </div>
      {isDonationPopupVisible && (
        <DonationPopup
          onClose={() => setIsDonationPopupVisible(false)}
          campaignId={Number(campaign.id)}
          isVisible={isDonationPopupVisible}
        />
      )}
    </div>
  );
};

export default CampaignDetail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const campaigns = await getCampaigns();
  const campaign = campaigns.find((item) => item.id.toString() === params?.id);

  if (!campaign) {
    return {
      notFound: true,
    };
  }

  let totalAmount = 0;
  try {
    const response = await fetch(
      `https://new-backend-vercel.vercel.app/total-amount/${campaign.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
          "User-Agent": "CustomUserAgent",
        },
      }
    );
    const data = await response.json();
    totalAmount = data.totalAmount || 0;
  } catch (error) {
    console.error("Error fetching total amount:", error);
  }

  return {
    props: { campaign, totalAmount },
  };
};
