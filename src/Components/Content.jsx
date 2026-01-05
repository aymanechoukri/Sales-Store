import {
  faShoppingCart,
  faTruck,
  faHeadset,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Content() {
  return (
    <div className="w-full max-w-7xl mx-auto ">
      <div className="relative  overflow-hidden mb-12 shadow-xl">
        <div
          className="relative bg-cover bg-center min-h-[400px] md:min-h-[500px]"
          style={{ backgroundImage: "url('/image/header.png')" }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"></div>

          <div className="relative container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white py-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Discover Amazing
                <br />
                <span className="text-blue-300">Products & Deals</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Shop from thousands of products with fast delivery. Your
                satisfaction is our priority.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#shop">
                <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 shadow-lg cursor-pointer">
                  <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                  <span>Shop Now</span>
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-blue-600 text-2xl"
              />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600 font-medium">Products</div>
          </div>

          <div className="text-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <FontAwesomeIcon
                icon={faHeadset}
                className="text-green-600 text-2xl"
              />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support</div>
          </div>

          <div className="text-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-purple-600 text-2xl"
              />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Secure</div>
          </div>

          <div className="text-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <FontAwesomeIcon
                icon={faTruck}
                className="text-orange-600 text-2xl"
              />
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">Fast</div>
            <div className="text-gray-600 font-medium">Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
}
