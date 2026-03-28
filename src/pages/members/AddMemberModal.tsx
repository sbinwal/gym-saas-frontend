import { useEffect, useState } from "react";
import { addMember, createMembership } from "../../api/memberApi";
import { getPlans } from "../../api/planAPI";

export default function AddMemberModal({ onClose, refresh }: any) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [planId, setPlanId] = useState("");
  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    const res = await getPlans();
    setPlans(res.data);
  };

  const handleSave = async () => {
    try {
      if (!name || !planId) {
        alert("Name and Plan required");
        return;
      }

      // 1️⃣ Create Member
      const memberRes = await addMember({ name, mobile });

      // 2️⃣ Create Membership
      await createMembership({
        memberId: memberRes.data._id,
        planId,
      });

      alert("Member added successfully");

      refresh();   // reload table
      onClose();   // close modal

    } catch (err) {
      console.error(err);
      alert("Error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">

      {/* MODAL BOX */}
      <div className="bg-white p-6 rounded shadow w-full max-w-md text-black">

        <h2 className="text-xl font-bold mb-4">Add Member</h2>

        <input
          placeholder="Name"
          className="border p-2 w-full mb-3 rounded text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Mobile"
          className="border p-2 w-full mb-3 rounded text-black"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <select
          className="border p-2 w-full mb-3 rounded text-black"
          value={planId}
          onChange={(e) => setPlanId(e.target.value)}
        >
          <option value="">Select Plan</option>
          {plans.map((p) => (
            <option key={p._id} value={p._id}>
              {p.name} - ₹{p.price}
            </option>
          ))}
        </select>

        {/* BUTTONS */}
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-500"
        >
          Save
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