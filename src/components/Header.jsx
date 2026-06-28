import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 shadow-lg px-10 py-4 flex items-center">

      <h1 className="text-3xl font-bold text-white">
               Som <span className="text-green-500">Shop</span> </h1>
    
      <ul className="flex gap-8 ml-auto mr-10 text-white font-medium">
        <Link className="hover:text-green-400 transition duration-300" to="/">Home</Link>
        <Link  className="hover:text-green-400 transition duration-300"to="/products">Products</Link>
        <Link className="hover:text-green-400 transition duration-300" to="/Blog">Blog</Link>
        
      </ul>
      <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg
       text-white font-semibold transition duration-300">
        Login
      </button>
    </header>
  );
};

export default Header;
