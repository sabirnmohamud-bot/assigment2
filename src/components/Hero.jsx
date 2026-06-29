import { useState, useEffect } from "react";
import axios from "axios";


const Hero = () => {

    const [product, setProduct] = useState([]);
      const getProduct = () => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
          setProduct(res.data[2]);
        });
      };
    
      useEffect(() => {
        getProduct();
      }, []);

  return (
    <section className="min-h-screen flex items-center justify-between px-10 md:px-20 bg-gradient-to-r from-gray-100 to-gray-200">
      
      {/* left side */}
      <div className="w-full md:w-1/2">
        
        <h4 className="inline-block text-white px-5 py-2 font-semibold mb-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-md">
          New Collection 2026
        </h4>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Discover{" "}
          <span className="text-green-600">
            The Best <br />
            Fashion
          </span>{" "}
          Products
        </h1>

        <p className="text-gray-600 text-base md:text-lg mb-8 w-full md:w-[420px] leading-relaxed">
          Shop the latest trends with premium quality products at affordable
          prices. Enjoy fast delivery and secure payments worldwide.
        </p>

        <div className="flex gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl shadow-lg transition">
            Shop Now
          </button>

          <button className="border border-gray-400 hover:border-black px-8 py-3 rounded-xl transition">
            Explore
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="hidden md:flex w-1/2 justify-center">
        <div className="relative">
          
          {
            product && (
              <img
            src={product.image}
            alt="hero product"
            className="w-[350px] md:w-[420px] h-[420px] object-cover rounded-3xl shadow-2xl hover:scale-105 transition duration-300"
          />
            )
          }

          {/* badge */}
          <div className="absolute -bottom-5 -left-5 bg-white px-4 py-2 rounded-xl shadow-md text-green-600 font-bold">
            Hot Deal 🔥
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;