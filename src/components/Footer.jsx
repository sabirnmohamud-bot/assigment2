import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-slate-900 mt-10 py-10 text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h1 className="text-2xl font-bold">
            Som <span className="text-green-500">Shop</span>
          </h1>
          <p className="mt-3 text-gray-300">
            Best online shop <br />for quality products <br /> in Somalia.
          </p>
        </div>

        <div>
       <h2 className="text-xl font-semibold mb-3 text-green-500">Quick Links </h2>
        
          <ul className="space-y-2 text-gray-300">
            <li> <Link to="/" className="hover:text-green-400 transition">Home</Link> </li>
             <li> <Link to="/products"className="hover:text-green-400 transition">Products </Link></li>
           <li> <Link to="/blog"className="hover:text-green-400 transition">blog </Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-green-500">
            Contact
          </h2>
          <p className="text-gray-300">Email: support@somshop.com</p>
          <p className="text-gray-300">Phone: +252 61 888888</p>
          <p className="text-gray-300">Location: Mogadishu, Somalia</p>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-slate-700 pt-4 text-gray-400">
        {new Date().getFullYear()} Som Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;