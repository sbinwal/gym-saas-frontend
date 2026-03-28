import { useEffect, useState } from "react";
import { getPlans } from "../../api/planAPI";
import PlanModal from "./PlanModal";


export default function Plans() {
  const [plans, setPlans] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const res = await getPlans();
      setPlans(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen text-gray-900">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Plans</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
        >
          + Add Plan
        </button>
      </div>

      {/* PLANS GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="bg-white p-4 rounded shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-bold">{plan.name}</h2>

            <p className="text-gray-600">
              Duration: {plan.durationDays} days
            </p>

            <p className="text-xl font-semibold mt-2">
              ₹{plan.price}
            </p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <PlanModal
          onClose={() => setShowModal(false)}
          refresh={fetchPlans}
        />
      )}
    </div>
  );
}