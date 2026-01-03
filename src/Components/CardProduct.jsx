import axios from "axios";
import { motion as M } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CardProduct() {
  const [datas, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/Data/Products.json")
      .then((res) => setData(res.data))
      .catch((errer) => console.error(errer));

  }, []);
  return (
    <div className="w-full flex items-center justify-center flex-col flex-wrap gap-5 md:flex-row">
      {datas.map((data, index) => (
        <M.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="w-full md:w-[26%] shadow-lg rounded-lg p-4 flex flex-col items-center hover:scale-105 transition duration-200 cursor-pointer"
        >
          <Link to={`/product/${data.id}`}>
            <img src={data.img} alt={data.Title} className="w-[70%] m-auto" loading="lazy" />
            <div className="p-2 flex flex-col items-center justify-center">
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{data.Title}</h3>
                  <span className="text-sm text-red-600">${data.price}</span>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{data.description}</p>
                </div>
              </div>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer active:scale-95">
                View Details
              </button>
            </div>
          </Link>
        </M.div>
      ))}
    </div>
  );
}
