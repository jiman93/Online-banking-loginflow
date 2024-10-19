"use client";

import { useEffect, useState } from "react";

export type TransactionHistory = {
  date: string; // e.g., '24 Aug 2023'
  referenceID: string; // e.g., '#834343434342'
  to: string; // e.g., 'Bloom Enterprise Sdn Bhd'
  transactionType: string; // e.g., 'DuitNow payment'
  amount: string; // e.g., 'RM 1,200.00'
};
const Transactions = () => {
  const [data, setData] = useState<TransactionHistory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch transaction data from the API
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/transactionHistory");
        const result = await response.json();
        setData(result); // Store the fetched data
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchTransactions();
  }, []); // Empty dependency array means this runs once when the component mounts

  // Show loading spinner or message until data is loaded
  if (loading) {
    return <p>Loading transactions...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transaction History</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-600  shadow-md rounded-lg">
          <thead className="border-b bg-gray-900">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Date</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Reference ID</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">To</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Transaction Type
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((transaction, index) => (
              <tr key={index} className="border-b">
                <td className="text-left py-3 px-4">{transaction.date}</td>
                <td className="text-left py-3 px-4">{transaction.referenceID}</td>
                <td className="text-left py-3 px-4">{transaction.to}</td>
                <td className="text-left py-3 px-4">{transaction.transactionType}</td>
                <td className="text-left py-3 px-4">{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
