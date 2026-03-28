import { useEffect, useState } from "react";
import { addPayment } from "../../api/paymentApi";
import { getAllMembers } from "../../api/memberApi";

export default function AddPaymentModal({ onClose, refresh }: any) {
  const [memberships, setMemberships] = useState<any[]>([]);
  const [membershipId, setMembershipId] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMode, setPaymentMode] = useState("cash");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMemberships();
  }, []);

  const fetchMemberships = async () => {
    try {
      const res = await getAllMembers();
      setMemberships(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const selected = memberships.find(
    (m) => m._id === membershipId
  );

  const remaining = selected
    ? selected.totalFee - selected.totalPaid
    : 0;

  const handleSubmit = async () => {
    try {
      const amt = Number(amount);

      if (!membershipId) {
        alert("Please select member");
        return;
      }

      if (!amt || amt <= 0) {
        alert("Enter valid amount");
        return;
      }

      if (amt > remaining) {
        alert(`Only ₹${remaining} pending`);
        return;
      }

      setLoading(true);

      await addPayment({
        membershipId,
        amount: amt,
        paymentMode,
      });

      alert("Payment recorded successfully");

      onClose();

    } catch (err) {
      console.error(err);
      alert("Error recording payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">

      <div className="bg-white p-6 rounded shadow w-full max-w-md text-black">

        <h2 className="text-xl font-bold mb-4">
          Add Payment
        </h2>

        {/* MEMBER DROPDOWN */}
        <select
          className="border p-2 w-full mb-3 rounded text-black bg-white"
          value={membershipId}
          onChange={(e) => setMembershipId(e.target.value)}
        >
          <option value="">Select Member</option>

          {memberships.map((m) => (
            <option key={m._id} value={m._id}>
              {m.memberId?.name} - {m.planId?.name}
            </option>
          ))}
        </select>

        {/* DETAILS */}
        {selected && (
          <div className="mb-3 text-sm">
            <p>Total Fee: ₹{selected.totalFee}</p>
            <p>Paid: ₹{selected.totalPaid}</p>
            <p className="text-red-600 font-semibold">
              Remaining: ₹{remaining}
            </p>
          </div>
        )}

        {/* QUICK BUTTON */}
        {selected && (
          <button
            onClick={() => setAmount(String(remaining))}
            className="mb-3 bg-gray-200 px-3 py-1 rounded"
          >
            Full ₹{remaining}
          </button>
        )}

        {/* AMOUNT */}
        <input
          type="number"
          placeholder="Enter amount"
          className="border p-2 w-full mb-3 rounded text-black bg-white"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* MODE */}
        <select
          className="border p-2 w-full mb-3 rounded text-black bg-white"
          value={paymentMode}
          onChange={(e) => setPaymentMode(e.target.value)}
        >
          <option value="cash">Cash</option>
          <option value="upi">UPI</option>
          <option value="card">Card</option>
        </select>

        {/* ACTIONS */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-500 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save"}
        </button>

        <button
          onClick={onClose}
          className="mt-2 w-full border py-2 rounded"
        >
          Cancel
        </button>

      </div>
    </div>
  );
}