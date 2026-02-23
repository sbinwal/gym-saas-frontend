import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileAvatar from "./ProfileAvatar";
import { LogOut, User } from "lucide-react";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="relative">

      <div onClick={() => setOpen(!open)}>
        <ProfileAvatar name="Gym Admin" />
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-40
        bg-white shadow-lg rounded-lg overflow-hidden z-50">

          <button className="flex items-center gap-2
          px-4 py-2 w-full text-left hover:bg-slate-100">
            <User size={16}/> Profile
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2
            px-4 py-2 w-full text-left hover:bg-slate-100 text-red-500">
            <LogOut size={16}/> Logout
          </button>

        </div>
      )}

    </div>
  );
};

export default ProfileMenu;