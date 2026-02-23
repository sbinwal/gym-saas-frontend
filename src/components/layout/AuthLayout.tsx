
import { Outlet } from "react-router-dom";
import HeaderAuth from "./HeaderAuth";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <header className="bg-[#1f2a44] px-6 py-3 flex justify-between items-center">

        <h1 className="text-yellow-400 text-xl font-bold">
          Gym SaaS
        </h1>

        {/* Login/Signup buttons when not logged in */}
        <HeaderAuth isLoggedIn={false} />

      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1 flex items-center justify-center px-4">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-[#1f2a44] text-center text-white text-sm py-3">
        © {new Date().getFullYear()} Gym SaaS. All Rights Reserved.
      </footer>

    </div>
  );
};

export default AuthLayout;