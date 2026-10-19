import React from "react";

const Product = ({ product }) => {
  // product data destructuring
  const { id, name, category, price, img, rating } = product;
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
      {/* Image & Badge Container */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-50">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {category}
        </span>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-gray-900/80 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <span className="text-yellow-400">★</span>
          <span>{rating}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Product Name */}
        <h3 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-1 group-hover:text-pink-600 transition-colors">
          {name}
        </h3>

        {/* Price & ID Info */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-400 block uppercase tracking-wider">
              Price
            </span>
            <span className="text-pink-600 font-bold text-xl">৳{price}</span>
          </div>
          <span className="text-[11px] text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">
            #{id}
          </span>
        </div>

        {/* Action Button */}
        <button className="mt-4 w-full bg-gray-900 hover:bg-pink-600 text-white font-medium py-2.5 rounded-xl transition-colors duration-200 text-sm shadow-sm active:scale-98">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
