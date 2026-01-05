import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion as M } from "framer-motion";
import { useCart } from "../Context/CreatContext";
import { toast, ToastContainer } from "react-toastify";
import Headers from "./Headers";

export default function Products() {
  const { addCart, cart } = useCart();
  console.log(cart);
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/Data/Products.json")
      .then((res) => {
        const products = res.data.find(
          (product) => product.id === parseInt(id)
        );
        setData(products);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="overflow-hidden">
      <Headers />
      <div className="min-h-screen w-screen bg-gray-100 p-0 overflow-hidden">
        <ToastContainer />
        <div className="h-screen flex flex-col lg:flex-row">
          <M.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 h-1/2 lg:h-full bg-white flex items-center justify-center p-8"
          >
            <img
              src={data.img}
              alt={data.Title}
              className="max-w-full max-h-full object-contain rounded-lg"
              loading="lazy"
            />
          </M.div>

          <M.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 h-1/2 lg:h-full bg-white p-8 sm:p-12 lg:p-16 overflow-y-auto"
          >
            <div className="max-w-2xl mx-auto h-full flex flex-col">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {data.Title}
              </h1>

              <div className="flex-grow">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {data.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <span className="text-4xl sm:text-5xl font-bold text-red-600">
                      ${data.price}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      addCart(data);
                      toast("Added", {
                        icon: (
                          <FontAwesomeIcon icon={faCheck} className="mr-2" />
                        ),
                      });
                    }}
                    className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg cursor-pointer flex gap-2 items-center active:scale-95"
                  >
                    Add to Cart
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="mr-2 text-xl"
                    />
                  </button>
                </div>
              </div>
            </div>
          </M.div>
        </div>
      </div>
    </div>
  );
}
