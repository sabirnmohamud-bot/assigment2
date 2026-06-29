import { useState, useEffect } from "react";
import axios from "axios";
import ProductDesign from "../components/ProductDesign";
const Products = () => {
  const [product, setProduct] = useState([]);
  const getProduct = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-gray-100 mt-18">
        {product.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-contain p-4"
              />

              <div className="p-4">
                <h1 className="font-bold text-lg line-clamp-2">{item.title}</h1>

                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-green-600">
                    ${item.price}
                  </span>

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-medium">{item.rating.rate}</span>
                  <span className="text-gray-500 text-sm">
                    ({item.rating.count} Reviews)
                  </span>
                </div>

                <div className="flex gap-10">
                  <button className="w-full bg-black text-white py-3 rounded-lg mt-4 hover:bg-gray-800 duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
