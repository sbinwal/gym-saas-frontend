import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/ui/PasswordInput";
import { loginUser } from "../../api/authApi";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      const payload = {
        email: email,
        password: password
      }

      const data = await loginUser(payload);

      // 🔐 assuming backend sends token like {token:"abc"}
      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-black">Login</h2>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded-lg text-black"
          required
        />

        <PasswordInput
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 py-2 rounded-lg font-semibold hover:bg-yellow-300"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};