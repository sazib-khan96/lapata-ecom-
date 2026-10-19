import React from "react";

const HeroSection = () => {
  return (
   <section className="relative bg-gradient-to-r from-pink-50 via-purple-50 to-pink-100 overflow-hidden py-12 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column: Text & CTA */}
                    <div className="text-center lg:text-left space-y-6">
                        {/* Offer / Tagline Badge */}
                        <div className="inline-flex items-center gap-2 bg-pink-100 border border-pink-200 text-pink-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
                            <span className="animate-pulse">✨</span> New Festive Collection 2026
                        </div>

                        {/* Main Title */}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Elegance Redefined <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                                Premium Three-Piece
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Discover exquisite designs, soft cotton fabrics, and trending organza prints tailored for your daily comfort and festive occasions.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                            <a 
                                href="#products" 
                                className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-pink-200 transition-all duration-300 hover:scale-105 text-center"
                            >
                                Shop Collection
                            </a>
                            <a 
                                href="#offers" 
                                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-medium px-8 py-3.5 rounded-xl transition-all duration-300 text-center shadow-sm"
                            >
                                View Offers
                            </a>
                        </div>

                        {/* Store Highlights / Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-pink-200/60 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">100%</h4>
                                <p className="text-xs text-gray-500">Premium Fabric</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Fast</h4>
                                <p className="text-xs text-gray-500">Home Delivery</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">4.9★</h4>
                                <p className="text-xs text-gray-500">Customer Rating</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Hero Image Banner */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Decorative Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-pink-300/40 rounded-full blur-3xl -z-10"></div>

                        {/* Main Banner Image Container */}
                        <div className="relative w-full max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img 
                                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800" 
                                alt="AroKisu Three-Piece Collection" 
                                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                            />

                            {/* Floating Discount Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3">
                                <div className="bg-pink-600 text-white font-bold p-2.5 rounded-xl text-lg">
                                    20%
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Special Discount</p>
                                    <p className="text-sm font-bold text-gray-800">On First Order</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
  );
};

export default HeroSection;
