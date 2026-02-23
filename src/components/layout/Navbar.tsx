import { Menu, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import HeaderAuth from "./HeaderAuth";

type Props = {
  setIsOpen: (val: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (val: boolean) => void;
};

const Navbar = ({ setIsOpen, isCollapsed, setIsCollapsed }: Props) => {
const isLoggedIn = !!localStorage.getItem("token");
  return (
    <div className="h-full flex items-center justify-between px-4">

  {/* LEFT SIDE */}
  <div className="flex items-center gap-2">

    {/* MOBILE HAMBURGER */}
    <button
      className="md:hidden text-white"
      onClick={() => setIsOpen(true)}
    >
      <Menu size={24}/>
    </button>

    {/* DESKTOP COLLAPSE */}
    <button
      className="hidden md:block text-white hover:text-yellow-400"
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      {isCollapsed
        ? <PanelLeftOpen size={22}/>
        : <PanelLeftClose size={22}/>
      }
    </button>

  </div>

  {/* RIGHT SIDE AUTH */}
  <div className="ml-auto z-10">
      <HeaderAuth isLoggedIn={isLoggedIn} />
    </div>

</div>
  );
};

export default Navbar;
