"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Filter,
  ChevronDown,
  ShoppingBag,
  ShoppingCart,
  Gem,
  Wand2,
  Briefcase,
  Brush,
  Star,
  Sparkles,
  Search,
  ArrowRight,
} from "lucide-react";

export default function Shop() {
  // Mock data to show a beautiful variety of products in the new layout
  const products = [
    {
      id: 1,
      name: "Antique Gold-Plated Necklace",
      category: "One Gram Jewellery",
      price: "₹2,499",
      icon: Gem,
      bgClass: "from-amber-50 to-white",
      iconClass: "text-amber-300/80",
    },
    {
      id: 2,
      name: "Handwoven Bamboo Basket",
      category: "Handcrafted & ODOP",
      price: "₹899",
      icon: Wand2,
      bgClass: "from-emerald-50 to-white",
      iconClass: "text-emerald-300/80",
    },
    {
      id: 3,
      name: "Premium Executive Gift Set",
      category: "Corporate Gifts",
      price: "₹3,200",
      icon: Briefcase,
      bgClass: "from-blue-50 to-white",
      iconClass: "text-blue-300/80",
    },
    {
      id: 4,
      name: "Custom Canvas Portrait",
      category: "Customized Art",
      price: "₹4,500",
      icon: Brush,
      bgClass: "from-purple-50 to-white",
      iconClass: "text-purple-300/80",
    },
    {
      id: 5,
      name: "Temple Design Earrings",
      category: "One Gram Jewellery",
      price: "₹1,299",
      icon: Gem,
      bgClass: "from-amber-50 to-white",
      iconClass: "text-amber-300/80",
    },
    {
      id: 6,
      name: "Terracotta Home Decor",
      category: "Handcrafted & ODOP",
      price: "₹650",
      icon: Wand2,
      bgClass: "from-emerald-50 to-white",
      iconClass: "text-emerald-300/80",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-[#f4f9f4] text-green-950 font-sans selection:bg-lime-300 selection:text-green-950 overflow-x-hidden">
        {/* Background Ambient Glowing Orbs */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-400/20 blur-[120px] pointer-events-none animate-pulse duration-1000 z-0"></div>
        <div
          className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-lime-400/20 blur-[120px] pointer-events-none animate-pulse duration-1000 z-0"
          style={{ animationDelay: "2s" }}
        ></div>

        <Navbar />

        {/* PREMIUM HERO HEADER */}
        <div className="pt-32 pb-24 relative overflow-hidden bg-gradient-to-b from-emerald-950 to-emerald-900 border-b border-emerald-800/50 shadow-sm">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-lime-300 text-sm font-bold tracking-widest uppercase shadow-lg mb-6">
              <Sparkles className="w-4 h-4" />
              Authentic & Curated
            </div>
            <h1 className="text-5xl md:text-6xl font-black font-['var(--font-outfit)'] mb-6 text-white tracking-tight drop-shadow-xl">
              Shop Collections
            </h1>
            <p className="text-emerald-100/90 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
              Explore our carefully sourced products. Every purchase supports
              artisans, local creators, and sustainable practices.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-8 flex flex-col gap-16 pb-20">
          {/* MAIN E-COMMERCE LAYOUT (Sidebar + Grid) */}
          <div className="flex flex-col lg:flex-row gap-8 mt-4">
            {/* Sidebar / Filters (Glassmorphic Upgrade) */}
            <aside className="w-full lg:w-72 shrink-0">
              <div className="bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-28">
                <div className="flex items-center justify-between font-bold text-green-950 mb-6 pb-4 border-b border-green-100/50">
                  <span className="flex items-center gap-2 text-lg">
                    <Filter className="w-5 h-5 text-emerald-600" /> Filters
                  </span>
                  <span className="text-xs text-emerald-600 cursor-pointer hover:underline">
                    Clear All
                  </span>
                </div>

                {/* Search inside filter */}
                <div className="relative mb-8">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all placeholder-emerald-700/50"
                  />
                  <Search className="w-4 h-4 text-emerald-600 absolute right-4 top-1/2 -translate-y-1/2" />
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-bold text-green-950 mb-4 tracking-wide uppercase text-sm">
                      Categories
                    </h3>
                    <div className="space-y-3 text-sm font-medium text-green-800">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                        />{" "}
                        <span className="group-hover:text-emerald-600 transition-colors">
                          One Gram Jewellery
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                        />{" "}
                        <span className="group-hover:text-emerald-600 transition-colors">
                          Handcrafted & ODOP
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                        />{" "}
                        <span className="group-hover:text-emerald-600 transition-colors">
                          Corporate Gifts
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                        />{" "}
                        <span className="group-hover:text-emerald-600 transition-colors">
                          Customized Art
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
                        />{" "}
                        <span className="group-hover:text-emerald-600 transition-colors">
                          Eco-Friendly (Second Life)
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-green-950 mb-4 tracking-wide uppercase text-sm">
                      Price Range
                    </h3>
                    <input type="range" className="w-full accent-emerald-600" />
                    <div className="flex justify-between text-xs font-medium text-green-700 mt-2">
                      <span>₹0</span>
                      <span>₹10,000+</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid Area */}
            <div className="flex-1">
              {/* Top Control Bar */}
              <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 shadow-sm">
                <span className="text-green-800 font-medium text-sm">
                  Showing <strong className="text-green-950">1-6</strong> of 36
                  products
                </span>
                <button className="flex items-center gap-2 text-sm font-semibold bg-white border border-green-200 px-4 py-2 rounded-xl shadow-sm hover:border-emerald-400 hover:text-emerald-700 transition-colors">
                  Sort by: Featured <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Elevated Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white/80 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(16,185,129,0.1)] hover:-translate-y-1.5 transition-all duration-500 group flex flex-col cursor-pointer"
                  >
                    {/* Image Area with category-specific gradients */}
                    <div
                      className={`aspect-square relative overflow-hidden flex items-center justify-center bg-gradient-to-br ${item.bgClass} group-hover:scale-105 transition-transform duration-700`}
                    >
                      <item.icon
                        className={`w-16 h-16 ${item.iconClass} drop-shadow-sm group-hover:scale-110 transition-transform duration-500`}
                      />

                      {/* Floating Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <span className="bg-white/90 backdrop-blur-md text-[10px] font-black px-3 py-1.5 rounded-full text-green-950 uppercase tracking-wider shadow-sm border border-white/50">
                          {item.category}
                        </span>
                      </div>

                      {/* Quick Add Overlay */}
                      <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="bg-white text-green-950 font-bold px-6 py-2.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-lime-300">
                          Quick View
                        </button>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-6 flex flex-col flex-1 bg-white relative z-10">
                      <div className="flex items-center gap-1 mb-2 text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span className="text-xs text-green-600/60 font-medium ml-1">
                          (12)
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-green-950 mb-1 leading-snug group-hover:text-emerald-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-green-700/80 mb-6 font-medium line-clamp-1">
                        Authentic product from local creator.
                      </p>

                      <div className="mt-auto flex items-end justify-between">
                        <span className="text-xl font-black text-green-950 tracking-tight">
                          {item.price}
                        </span>
                        <button className="bg-emerald-50 border border-emerald-100 text-emerald-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 p-3 rounded-2xl transition-all duration-300 shadow-sm">
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="mt-12 flex justify-center">
                <button className="px-8 py-3.5 rounded-full bg-white/80 backdrop-blur-md border border-emerald-200 text-emerald-800 font-bold hover:bg-emerald-50 transition-colors shadow-sm text-sm">
                  Load More Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
