import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import Headers from "../../Components/Headers";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Go = useNavigate()

  const { user } = useAuth();
  console.log(user);

  function handlSubmit(e) {
    e.preventDefault();

    // Validate input fields first
    if (email === "" || password === "") {
      return;
    }

    // Check if user array exists and has registered users
    if (!user || !Array.isArray(user) || user.length === 0) {
      toast("No registered users found. Please create an account first.");
      return;
    }

    // Find a user with matching email and password
    const matchedUser = user.find(
      (u) => u.email === email && u.password === password
    );

    if (matchedUser) {
      Go("/");
      window.localStorage.setItem("email", email)
    } else {
      toast("Invalid email or password. Please try again.");
    }
  }
  return (
    <div>
      <Headers />
      <ToastContainer />
      <form
        onSubmit={handlSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200 mt-10"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Log in
        </h2>

        <div className="space-y-6">

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
              !email ||
              !password ||
              password.length < 6 ||
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            }
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:shadow-md active:scale-[0.98]"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
