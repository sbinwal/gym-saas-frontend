import { PlusCircle, CreditCard, RefreshCw } from "lucide-react";

const DesktopActions = () => {
  return (
    <div className="hidden md:flex gap-3">

      <button className="flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded">
        <PlusCircle size={18}/>
        Add Member
      </button>

      <button className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded">
        <CreditCard size={18}/>
        Payment
      </button>

      <button className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded">
        <RefreshCw size={18}/>
        Renew
      </button>

    </div>
  );
};

export default DesktopActions;
