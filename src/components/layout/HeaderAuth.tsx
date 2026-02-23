import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";
import ProfileAvatar from "./ProfileAvatar";

type Props = {
  isLoggedIn: boolean;
};

const HeaderAuth = ({ isLoggedIn }: Props) => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center gap-3">

        <Link
          to="/login"
          className="text-sm text-white hover:text-yellow-400"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="bg-yellow-400 text-black px-4 py-2 rounded-full
          text-sm font-semibold hover:bg-yellow-300"
        >
          Signup
        </Link>

      </div>
    );
  }

  return (
    <DropdownMenu.Root>

      {/* AVATAR */}
      <DropdownMenu.Trigger asChild>
        <button className="outline-none">
          <ProfileAvatar name="Gym Admin"/>
        </button>
      </DropdownMenu.Trigger>

      {/* 🔥 THIS FIXES MOBILE + GREY BOX ISSUE */}
      <DropdownMenu.Portal>

        <DropdownMenu.Content
          align="end"
          sideOffset={10}
          className="
          min-w-[180px]
          bg-white
          rounded-xl
          shadow-xl
          py-2
          z-[9999]
          border
          animate-in
          fade-in
          zoom-in-95
          "
        >

          {/* PROFILE */}
          <DropdownMenu.Item asChild>
            <Link
              to="/profile"
              className="
              flex items-center gap-2
              px-4 py-2
              text-sm
              text-gray-700
              hover:bg-gray-100
              cursor-pointer
              outline-none
              "
            >
              <User size={16}/>
              Profile
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-px bg-gray-200 my-1"/>

          {/* LOGOUT */}
          <DropdownMenu.Item
            onClick={handleLogout}
            className="
            flex items-center gap-2
            px-4 py-2
            text-sm
            text-red-500
            hover:bg-red-50
            cursor-pointer
            outline-none
            "
          >
            <LogOut size={16}/>
            Logout
          </DropdownMenu.Item>

        </DropdownMenu.Content>

      </DropdownMenu.Portal>

    </DropdownMenu.Root>
  );
};

export default HeaderAuth;