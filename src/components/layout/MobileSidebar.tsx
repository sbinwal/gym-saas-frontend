import { X } from "lucide-react";

export default function MobileSidebar({ open, setOpen }: any) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition ${
        open ? "block" : "hidden"
      } md:hidden`}
    >
      <div className="w-64 bg-white h-full p-4 shadow-lg">
        <button onClick={() => setOpen(false)}>
          <X />
        </button>

        <ul className="mt-6 space-y-4">
          <li>Dashboard</li>
          <li>Members</li>
          <li>Plans</li>
          <li>Payments</li>
        </ul>
      </div>
    </div>
  );
}
