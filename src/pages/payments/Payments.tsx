import { useEffect, useState } from "react";
import { getAllPayments } from "../../api/paymentApi";
import AddPaymentModal from "./AddPayment";

export default function Payments() {
  const [payments, setPayments] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const res = await getAllPayments();
      setPayments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen text-black"> {/* ✅ FORCE TEXT */}

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">

        <h1 className="text-2xl font-bold text-black">
          Payments
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 shadow"
        >
          + Add Payment
        </button>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded shadow overflow-x-auto">

        <table className="w-full text-sm text-black"> {/* ✅ FORCE TEXT */}

          <thead className="bg-gray-200 text-black">
            <tr>
              <th className="p-2 text-left">Member</th>
              <th className="p-2">Plan</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Mode</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>

          <tbody>
            {payments.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center p-4 text-gray-500">
                  No payments found
                </td>
              </tr>
            ) : (
              payments.map((p:any) => (
                <tr key={p._id} className="border-t hover:bg-gray-100">

                  <td className="p-2 text-black">
                    {p.memberId?.name}
                  </td>

                  <td className="p-2 text-black">
                    {p.membershipId?.planId?.name || "-"}
                  </td>

                  <td className="p-2 font-semibold text-green-600">
                    ₹{p.amount}
                  </td>

                  <td className="p-2 capitalize text-black">
                    {p.paymentMode}
                  </td>

                  <td className="p-2 text-black">
                    {new Date(p.createdAt).toLocaleDateString()}
                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <AddPaymentModal
          onClose={() => {
            setShowModal(false);
            fetchPayments();
          }}
        />
      )}
    </div>
  );
}