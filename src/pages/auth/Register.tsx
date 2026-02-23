import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/ui/PasswordInput";
import { registerUser } from "../../api/authApi";
import PhoneInputField from "../../components/ui/PhoneInputField";

export const SignupPage = () => {

    const navigate = useNavigate();

    const [gymName, setGymName] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            name: gymName,
            ownerName: ownerName,
            email: email,
            password: password,
            mobile: phone,
        };

        try {
            const response = await registerUser(payload);

            alert("Signup Successful ✅");
            navigate("/login");

        } catch (error: any) {
            alert(error.response?.data?.message || "Signup Failed ❌");
        }
    };

    return (
        <>
     

            {/* BODY */}
            <div className="min-h-[80vh] flex items-center justify-center ">
            
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-2xl shadow-md w-96 space-y-4"
                >
                    <h2 className="text-2xl font-bold text-center text-black">
                        Sign Up
                    </h2>

                    {/* Gym Name */}
                    <input
                        type="text"
                        placeholder="Gym Name"
                        value={gymName}
                        onChange={(e) => setGymName(e.target.value)}
                        className="w-full border p-2 rounded-lg text-black"
                        required
                    />

                    {/* Owner Name */}
                    <input
                        type="text"
                        placeholder="Owner Name"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        className="w-full border p-2 rounded-lg text-black"
                        required
                    />

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border p-2 rounded-lg text-black"
                        required
                    />

                    {/* Mobile */}
                    <PhoneInputField
              value={phone}
              onChange={(phone: string) => setPhone(phone)}
            />

                    {/* Password Eye Input */}
                    <PasswordInput
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />

                    <button
                        type="submit"
                        className="w-full bg-yellow-400 py-2 rounded-lg font-semibold hover:bg-yellow-300"
                    >
                        Signup
                    </button>

                    <p className="text-sm text-center">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-500 underline">
                            Login
                        </Link>
                    </p>

                </form>

            </div>

        </>
    );
};