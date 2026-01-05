import { useCart } from "../Context/CreatContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import {
  faTrashAlt,
  faShoppingCart,
  faTag,
  faShippingFast,
  faShieldAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion as M, AnimatePresence } from "framer-motion";
import Headers from "./Headers";

export default function CartPage() {
  const { cart, removeCart, positifQuntity, nigatifQuntity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
    <Headers />
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <M.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-blue-600 text-2xl"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Your Shopping Cart
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
          </div>
        </M.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center">
          <div className="lg:w-2/3">
            {cart.length === 0 ? (
              <M.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 1 }}
                className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-gray-400 text-3xl"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Your cart is empty
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Add some amazing products to your cart
                </p>
                <Link
                  to={"/"}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  Browse Products
                </Link>
              </M.div>
            ) : (
              <AnimatePresence>
                <M.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  {cart.map((data) => (
                    <div
                      key={data.id}
                      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden"
                    >
                      <div className="p-5 md:p-6">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-6">
                          <div className="md:w-1/4 flex-shrink-0">
                            <div className="relative">
                              <img
                                src={data.img}
                                alt={data.Title}
                                className="w-full h-48 md:h-40 object-cover rounded-lg"
                              />
                            </div>
                          </div>

                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-3">
                                <div>
                                  <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                                    {data.Title}
                                  </h2>
                                  <p className="text-gray-600 text-sm line-clamp-2">
                                    {data.description}
                                  </p>
                                </div>
                                <button
                                  onClick={() => removeCart(data.id)}
                                  className="ml-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                  <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    className="w-5 h-5"
                                  />
                                </button>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
                              <div className="flex items-center">
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                  <button
                                    onClick={() => nigatifQuntity(data.id)}
                                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-red-600 transition-colors"
                                  >
                                    <span className="text-xl font-bold">−</span>
                                  </button>
                                  <span className="w-12 text-center text-lg font-bold text-gray-900">
                                    {data.quantity}
                                  </span>
                                  <button
                                    onClick={() => positifQuntity(data.id)}
                                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-green-600 transition-colors"
                                  >
                                    <span className="text-xl font-bold">+</span>
                                  </button>
                                </div>
                              </div>

                              <div className="text-right">
                                <div className="text-2xl font-bold text-gray-900">
                                  ${data.price * data.quantity}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </M.div>
              </AnimatePresence>
            )}
          </div>

          {cart.length > 0 && (
            <M.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/3"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 sticky top-50">
                <h2 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                  <FontAwesomeIcon
                    icon={faTag}
                    className="text-blue-500 mr-2"
                  />
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      Subtotal ({cart.length} items)
                    </span>
                    <span className="font-semibold">${total}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600 font-semibold">
                      <FontAwesomeIcon icon={faShippingFast} className="mr-1" />
                      Free
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">
                        Total
                      </span>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          ${total}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    toast("Purchased", {
                      icon: <FontAwesomeIcon icon={faCheck} className="mr-2" />,
                    });
                    localStorage.removeItem("shopping");
                  }}
                  className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-md mb-4"
                >
                  Proceed to Checkout
                </button>

                <div className="text-center">
                  <p className="text-gray-500 text-sm">
                    <FontAwesomeIcon
                      icon={faShieldAlt}
                      className="text-green-500 mr-2"
                    />
                    Secure payment
                  </p>
                </div>
              </div>
            </M.div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
