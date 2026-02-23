import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type Props = {
  value: string;
  onChange: (e: any) => void;
  placeholder?: string;
};

const PasswordInput = ({ value, onChange, placeholder }: Props) => {

  const [show, setShow] = useState(false);

  return (
    <div className="relative w-full">

      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Enter password"}
        className="w-full border rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
      />

      {/* 👁️ EYE BUTTON */}
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
      >
        {show ? <EyeOff size={18}/> : <Eye size={18}/>}
      </button>

    </div>
  );
};

export default PasswordInput;