const ProductDesign = ({ Products }) => {
  //   console.log(Products);
  return (
    <section className="py-20 px-10 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Featured Products</h1>
        <p className="text-gray-500 mt-3">
          Explore our latest and most popular products
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-[250px] h-[350px] mx-auto"
            />

            <div className="p-5">
              <span className="text-sm text-orange-500 font-medium">
                {product.category}
              </span>

              <h2 className="text-xl font-bold mt-2">{product.name}</h2>

              <div className="flex items-center gap-2 mt-3">
                <span className="text-yellow-500">⭐</span>
                <span>{product.rating}</span>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <span className="text-2xl font-bold text-green-600">
                  ${product.price}
                </span>

                <span className="line-through text-gray-400">
                  ${product.oldPrice}
                </span>
              </div>

              <div className="flex gap-10">
                <button className="w-full mt-5 bg-black text-white py-3 rounded-lg bg-green-400 hover:bg-gray-800 transition">
                  View Product
                </button>
                <button className="w-full mt-5 bg-black text-white py-3 rounded-lg bg-green-400 hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDesign;
