import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faStore,
  faBox,
  faUserPlus,
  faSignInAlt,
  faBars,
  faTimes,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Headers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

function deleteUser() {
    window.localStorage.removeItem("email");
  }

  return (
    <header className="sticky top-0 z-50 shadow-lg bg-white border-b border-gray-200">
      <nav className="flex justify-between items-center w-full px-4 md:px-6 py-4">
        <div className="flex items-center space-x-6 md:space-x-10">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-6 h-6" />
          </button>

          <img src="/svg/logo.png" alt="Logo" className="h-8 md:h-12" />
          
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <a
                href="#shop"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faStore} className="w-5 h-5" />
                <span>Market</span>
              </a>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faBox} className="w-5 h-5" />
                <span>Order</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-3 md:space-x-4">
          <Link
            to="/cart"
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6" />
          </Link>
         {!window.localStorage.getItem("email") ? 
          <>
            <Link to={"/register"} className="hidden md:inline-flex items-center space-x-2 px-4 md:px-5 py-2 text-blue-600 font-semibold border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              <FontAwesomeIcon icon={faUserPlus} className="w-4 h-4" />
              <span>Register</span>
            </Link>
            <Link to={"/login"} className="inline-flex items-center space-x-2 px-4 md:px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              <FontAwesomeIcon icon={faSignInAlt} className="w-4 h-4" />
              <span className="hidden sm:inline">Log in</span>
            </Link>
          </> : 
<>
            <Link
              className="inline-flex items-center space-x-2 px-4 md:px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              to={"/register"}
              onClick={deleteUser}
            >
              Log out
            </Link>
            <Link
              to={"/dashboard"}
              className="hidden md:inline-flex items-center space-x-2 px-4 md:px-5 py-2 text-blue-600 font-semibold border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Dashboard
            </Link>
          </>
          }
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
                  <span className="font-medium">Home</span>
                </Link>
              </li>
              <li>
                <a
                  href="#shop"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <FontAwesomeIcon icon={faStore} className="w-5 h-5" />
                  <span className="font-medium">Market</span>
                </a>
              </li>
              <li>
                <Link
                  to="/cart"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <FontAwesomeIcon icon={faBox} className="w-5 h-5" />
                  <span className="font-medium">Order</span>
                </Link>
              </li>
              <Link to="/register" className="pt-4 border-t border-gray-200">
                {!window.localStorage.getItem("email") && <button className="w-full flex items-center space-x-3 p-3 text-blue-600 font-semibold border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  <FontAwesomeIcon icon={faUserPlus} className="w-5 h-5" />
                  <span>Register</span>
                </button>}
              </Link>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}