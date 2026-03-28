import { useEffect, useState } from "react";
import { getAllMembers } from "../../api/memberApi";
import AddMemberModal from "./AddMemberModal";


export default function Members() {
  const [members, setMembers] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    const res = await getAllMembers();
    setMembers(res.data);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen text-gray-900">

      {/* HEADER */}
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Members</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
        >
          + Add Member
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-gray-800">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2">Plan</th>
              <th className="p-2">Status</th>
              <th className="p-2">Payment</th>
              <th className="p-2">End Date</th>
            </tr>
          </thead>

          <tbody>
            {members.map((m) => (
              <tr key={m._id} className="border-t hover:bg-gray-100">
                <td className="p-2">{m.memberId?.name}</td>
                <td className="p-2">{m.planId?.name}</td>
                <td className="p-2">{m.status}</td>
                <td className="p-2">{m.paymentStatus}</td>
                <td className="p-2">
                  {new Date(m.endDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <AddMemberModal
          onClose={() => setShowModal(false)}
          refresh={fetchMembers}
        />
      )}
    </div>
  );
}