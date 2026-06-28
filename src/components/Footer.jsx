const Footer = () => {
  return (
    <footer className="bg-blue-300 mt-10 py-10">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

      
        <div>
          <h1 className="text-2xl font-bold">
            Som <span className="text-green-600">Shop</span>
          </h1>
          <p className="mt-3 text-gray-700">
            Best online shop for quality products in Somalia.
          </p>
        </div>

        
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-800">
            <li className="hover:text-green-700 cursor-pointer">Home</li>
            <li className="hover:text-green-700 cursor-pointer">Products</li>
            <li className="hover:text-green-700 cursor-pointer">About Us</li>
      
          </ul>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p>Email: support@somshop.com</p>
          <p>Phone: +252 61 888888</p>
          <p>Location: Mogadishu, Somalia</p>
        </div>

      </div>

      <div className="text-center mt-8 border-t pt-4 text-gray-700">
         {new Date().getFullYear()} Som Shop. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;