import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-lg flex justify-between px-10 py-4 items-center sticky top-0 z-50 bg-blue-300">
      <h1 className="text-3xl font-bold">
        Som <span className="text-green-600">Shop</span>
      </h1>
      <ul className="flex gap-10 ml-10">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/Blog">Blog</Link>
        
      </ul>
      <button className="bg-green-500 rounded-lg px-6 py-2 text-xl text-white">
        Login
      </button>
    </header>
  );
};

export default Header;
