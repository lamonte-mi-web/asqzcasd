// lib/transactions.ts
import { database } from "./firebase"; // Pastikan kamu sudah mengimpor konfigurasi Firebase di sini
import { ref, get, child } from "firebase/database";

// Tipe data untuk transaksi
interface TransactionStatus {
  name: string;
}

// Fungsi untuk mengambil data transaksi berdasarkan order_id dari tabel new-transactions
export const getTransactionByOrderId = async (
  orderId: string
): Promise<TransactionStatus | null> => {
  const dbRef = ref(database, "new-transactions"); // Path ke tabel new-transactions di Firebase
  const snapshot = await get(child(dbRef, orderId)); // Ambil data transaksi berdasarkan order_id

  if (snapshot.exists()) {
    return snapshot.val() as TransactionStatus; // Return data transaksi jika ditemukan
  } else {
    return null; // Jika transaksi tidak ditemukan
  }
};
