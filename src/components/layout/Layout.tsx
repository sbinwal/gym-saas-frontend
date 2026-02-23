import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./SIdebar";
import logo from "../../assets/logo.png";
import BottomNav from "./BottomNav";


const Layout = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="h-screen flex flex-col">

      {/* 🔥 HEADER */}
      <div className="flex h-16 bg-slate-800 shadow-md">

        {/* LOGO SECTION */}
        <div className={`hidden md:flex items-center px-4 border-r border-slate-700
  ${isCollapsed ? "w-20 justify-center" : "w-64 gap-2"}
`}>

          <img src={logo} className="w-8 h-8" />
          {!isCollapsed && (
            <h1 className="text-yellow-400 font-bold text-lg">
              Gym SaaS
            </h1>
          )}
        </div>

        {/* NAVBAR */}
        <div className="flex-1">
          <Navbar
            setIsOpen={setIsOpen}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>

      </div>

      {/* 🔥 BODY */}
      <div className="flex flex-1 overflow-hidden">

        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isCollapsed={isCollapsed}
        />

        <main className="flex-1 p-4 overflow-y-auto bg-slate-100">
          <Outlet />
        </main>
        <BottomNav />

      </div>

    </div>
  );
};

export default Layout;
