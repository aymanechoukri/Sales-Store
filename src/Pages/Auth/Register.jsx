import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import Headers from "../../Components/Headers";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const navigate = useNavigate();

  const { setUser, user } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      return;
    }

    const currentUsers = user || [];
    
    const validEmail = currentUsers.find(u => u.email === email);

    if (validEmail) {
      toast.error("This account already exists");
      return;
    }

    const newUser = { name, email, password };
    const updatedUsers = [...currentUsers, newUser];
setUser(updatedUsers);

    navigate("/");
    window.localStorage.setItem("email", email)
  }
  return (
    <div>
      <ToastContainer />
      <Headers />
<form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200 mt-10"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Create Account
        </h2>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:shadow-outline transition-all duration-200"
              placeholder="John Doe"
              required
            />
            {!name && (
              <p className="mt-1 text-sm text-red-600">Name is required</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 ${
                email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
              placeholder="john@example.com"
              required
            />
            {email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
              <p className="mt-1 text-sm text-red-600">
                Please enter a valid email address
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 ${
                password && password.length < 6
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
              placeholder="••••••••"
              required
              minLength={6}
            />
            {password && password.length < 6 && (
              <p className="mt-1 text-sm text-red-600">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={
              !name ||
              !email ||
              !password ||
              password.length < 6 ||
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            }
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:shadow-md active:scale-[0.98]"
          >
            Create Account
          </button>
        </div>

        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}
