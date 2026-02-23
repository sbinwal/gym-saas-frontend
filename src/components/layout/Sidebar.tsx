import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";



type Props = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  isCollapsed: boolean;
};


const Sidebar = ({
  isOpen,
  setIsOpen,
  isCollapsed,
}: Props) => {

  return (
    <>
      {/* Overlay Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
  className={`
    fixed md:relative z-50 top-0 md:top-auto left-0
    h-full md:h-auto
    ${isCollapsed ? "w-20" : "w-64"}
    bg-slate-800 p-4
    transform transition-all duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
  `}
>


        {/* Collapse Button */}
        {/* <div className="flex justify-end mb-2 hidden md:flex">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white text-xl"
          >
            ☰
          </button>
        </div> */}

        {/* LOGO */}
        {/* <div className="flex items-center gap-3 px-2 py-4 border-b border-slate-700">

          <img src={logo} alt="Gym Logo" className="w-8 h-8" />

          {!isCollapsed && (
            <h1 className="text-lg font-bold text-yellow-400">
              Gym SaaS
            </h1>
          )}

        </div> */}

        {/* MENU */}

        {/* 📱 MOBILE LOGO ON SIDEBAR TOP */}
<div className="md:hidden flex items-center gap-3 px-2 py-4 border-b border-slate-700">
  <img src={logo} alt="Gym Logo" className="w-8 h-8" />
  <h1 className="text-lg font-bold text-yellow-400">
    Gym SaaS
  </h1>
</div>

        <nav className="flex flex-col mt-4 gap-2 text-slate-200">

          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 py-2 px-3 hover:bg-slate-700 rounded"
          >
            📊 {!isCollapsed && "Dashboard"}
          </Link>

          <Link
            to="/members"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 py-2 px-3 hover:bg-slate-700 rounded"
          >
            👥 {!isCollapsed && "Members"}
          </Link>

          <Link
            to="/plans"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 py-2 px-3 hover:bg-slate-700 rounded"
          >
            📋 {!isCollapsed && "Plans"}
          </Link>

          <Link
            to="/payments"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 py-2 px-3 hover:bg-slate-700 rounded"
          >
            💳 {!isCollapsed && "Payments"}
          </Link>

        </nav>

      </div>
    </>
  );
};

export default Sidebar;
