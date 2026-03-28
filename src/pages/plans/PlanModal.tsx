import { useState } from "react";
import { createPlan } from "../../api/planAPI";

export default function PlanModal({ onClose, refresh }: any) {
  const [name, setName] = useState("");
  const [durationDays, setDurationDays] = useState("");
  const [price, setPrice] = useState("");

  const handleSave = async () => {
    try {
      if (!name || !durationDays || !price) {
        alert("All fields are required");
        return;
      }

      await createPlan({
        name,
        durationDays: Number(durationDays),
        price: Number(price),
      });

      alert("Plan created successfully");

      refresh();   // refresh list
      onClose();   // close modal

    } catch (err) {
      console.error(err);
      alert("Error creating plan");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

      <div className="bg-white p-6 rounded shadow w-full max-w-md">

        <h2 className="text-xl font-bold mb-4">Add Plan</h2>

        <input
          type="text"
          placeholder="Plan Name"
          className="border p-2 w-full mb-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Duration (days)"
          className="border p-2 w-full mb-3 rounded"
          value={durationDays}
          onChange={(e) => setDurationDays(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          className="border p-2 w-full mb-3 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

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