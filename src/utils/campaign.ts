interface Campaign {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  endDate: string;
  targetAmount: string;
}
// lib/campaigns.ts
import { database } from "./firebase"; // Pastikan mengimpor konfigurasi Firebase
import { ref, get } from "firebase/database";

export const getCampaigns = async (): Promise<Campaign[]> => {
  const dbRef = ref(database, "campaigns");
  const snapshot = await get(dbRef);
  const data = snapshot.val() || {};

  return Object.keys(data).map((key) => ({
    id: key,
    ...data[key],
  })) as Campaign[];
};
