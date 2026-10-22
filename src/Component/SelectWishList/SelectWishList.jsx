import React from "react";
import { Star,X } from "lucide-react";
import { NavLink } from 'react-router';
const SelectWishList = ({ item,removeItemHandle }) => {
  const {id, name, img, price, rating, category, description } = item;

  
 const closeProducthandle = () =>{
   removeItemHandle(id)
 }


  return (
  
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <title>Lapata - Wish List</title>

  {/* Page Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
    <div>
      <p className="text-sm text-gray-500 mb-2">
        <NavLink to='/Shop'>Shop</NavLink>/ <NavLink to='/wishlist'> Wishlist</NavLink>
      </p>
      <h1 className="text-3xl font-bold text-gray-900">
        My Wish List
      </h1>
      <p className="text-gray-500 mt-2">
        Your favorite products, all in one place.
      </p>
    </div>

    <span className="text-sm font-medium bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full w-fit">
      Your Favorite Item
    </span>
  </div>

  {/* Product Card */}
  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center bg-white border border-gray-100 rounded-3xl p-5 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <span onClick={() => closeProducthandle(id)} className="absolute top-3 right-3"><X></X></span>
    {/* Product Image */}
    <div className="bg-gray-50 rounded-2xl p-6 sm:p-10 flex items-center justify-center min-h-[300px]">
      <img
        src={img}
        alt={name}
        className="w-full max-w-sm h-72 object-contain hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Product Details */}
    <div className="flex flex-col py-2">
      <p className="text-sm font-semibold uppercase tracking-widest text-yellow-700 mb-3">
        {category}
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
        {name}
      </h2>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-4">
        <div className="flex items-center gap-1 text-orange-400">
          <Star className="w-5 h-5 fill-current" />
        </div>
        <span className="text-sm font-semibold text-gray-800">
          {rating}
        </span>
        <span className="text-sm text-gray-400">
          Customer Rating
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-7 mt-5">
        {description}
      </p>

      {/* Price */}
      <div className="border-t border-gray-100 mt-6 pt-6">
        <p className="text-sm text-gray-500 mb-1">
          Price
        </p>
        <p className="text-3xl font-bold text-gray-900">
          ৳{price}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-7">
        <button
          className="flex-1 bg-gray-900 hover:bg-pink-600 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 hover:shadow-md active:scale-95"
        >
          Buy Now
        </button>

        <button
          onClick={() => window.history.back()}
          className="border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-3.5 px-6 rounded-xl transition-colors duration-300"
        >
          Continue Shopping
        </button>
      </div>

      {/* Extra Info */}
      <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-500">
        <span className="flex items-center gap-2">
          <span className="text-green-600">✓</span>
          Quality Products
        </span>
        <span className="flex items-center gap-2">
          <span className="text-green-600">✓</span>
          Easy Shopping
        </span>
      </div>
    </div>
  </div>
</div>

  );
};

export default SelectWishList;
