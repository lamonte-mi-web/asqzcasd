import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getTransactionByOrderId } from "../utils/transactions"; // Pastikan impor ini sudah benar

// Tipe untuk status transaksi
interface TransactionStatus {
  name: string; // Tambahkan properti name
}

const ThankYouPage: React.FC = () => {
  const router = useRouter();
  const [transactionStatus, setTransactionStatus] =
    useState<TransactionStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      const { order_id } = router.query;
      if (order_id) {
        console.log(order_id);
        // Lakukan fetch data transaksi dari Firebase berdasarkan order_id
        fetchTransactionData(order_id as string);
      } else {
        setError(
          "Gagal mengambil informasi transaksi. Order ID tidak ditemukan."
        );
      }
    }
  }, [router.isReady, router.query]);

  const fetchTransactionData = async (orderId: string) => {
    try {
      const transaction = await getTransactionByOrderId(orderId); // Ambil data transaksi dari Firebase
      if (transaction) {
        setTransactionStatus(transaction);
      } else {
        setError("Transaksi tidak ditemukan.");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat mengambil data transaksi.");
      console.error(err); // Log error untuk debugging
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!transactionStatus) {
    return <div>Memuat...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Terima Kasih, {transactionStatus.name} atas dukungan Anda!
      </h1>
      <p className="mt-4">
        Kami menghargai dukungan Anda dan akan menggunakan donasi ini untuk
        tujuan yang baik.
      </p>
    </div>
  );
};

export default ThankYouPage;
