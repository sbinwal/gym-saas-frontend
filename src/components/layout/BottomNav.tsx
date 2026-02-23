import { Link, useLocation } from "react-router-dom";
import { Home, Users, ClipboardList, CreditCard } from "lucide-react";

const BottomNav = () => {

  const location = useLocation();

  const navItem = (to: string, icon: any, label: string) => {
    const isActive = location.pathname === to;
    const Icon = icon;

    return (
      <Link
        to={to}
        className={`flex flex-col items-center text-xs ${
          isActive ? "text-yellow-400" : "text-slate-400"
        }`}
      >
        <Icon size={22} />
        {label}
      </Link>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-slate-800 border-t border-slate-700 flex justify-around items-center md:hidden z-50">

      {navItem("/dashboard", Home, "Dashboard")}
      {navItem("/members", Users, "Members")}
      {navItem("/plans", ClipboardList, "Plans")}
      {navItem("/payments", CreditCard, "Payments")}

    </div>
  );
};

export default BottomNav;
