import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faCreditCard,
  faTruck,
  faShieldAlt,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">S</span>
              </div>
              <span className="text-2xl font-bold">ShopEasy</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your one-stop destination for all shopping needs. Quality products, 
              best prices, and excellent customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <a href="#shop" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Products</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Categories</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Deals & Offers</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-400">123 Street, City, Country</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">support@shopeasy.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Our Features</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faShieldAlt} className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">Secure Payment</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faTruck} className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">Free Shipping</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faCreditCard} className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">Easy Returns</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faHeadset} className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">24/7 Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 ShopEasy. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies Policy
              </a>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-8 bg-gray-800 rounded-md"></div>
              <div className="w-12 h-8 bg-gray-800 rounded-md"></div>
              <div className="w-12 h-8 bg-gray-800 rounded-md"></div>
              <div className="w-12 h-8 bg-gray-800 rounded-md"></div>
              <div className="w-12 h-8 bg-gray-800 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}