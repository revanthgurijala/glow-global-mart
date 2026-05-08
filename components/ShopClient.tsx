"use client";

import { useState } from "react";
import {
  Search,
  ShoppingCart,
  ShoppingBag,
  Filter,
  ArrowUpDown,
  ChevronDown,
} from "lucide-react";
import { createImageUrlBuilder } from "@sanity/image-url";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = createImageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function ShopClient({ products }: { products: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // NEW: Memory state for the mobile dropdown
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const myWhatsAppNumber = "919963420226";

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
  ];

  let displayProducts = [...products];

  if (searchQuery) {
    displayProducts = displayProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.description &&
          p.description.toLowerCase().includes(searchQuery.toLowerCase())),
    );
  }

  if (selectedCategory !== "All") {
    displayProducts = displayProducts.filter(
      (p) => p.category === selectedCategory,
    );
  }

  if (sortOrder === "price-low") {
    displayProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "price-high") {
    displayProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-4">
      {/* NEW: Mobile Filter Toggle Button (Hidden on Desktop) */}
      <div className="lg:hidden w-full">
        <button
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          className="w-full flex items-center justify-between bg-white/80 backdrop-blur-xl border border-emerald-100 rounded-2xl p-4 text-green-950 font-bold shadow-sm active:scale-[0.98] transition-transform"
        >
          <span className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-emerald-600" />
            Search & Filters
          </span>
          <ChevronDown
            className={`w-5 h-5 text-emerald-600 transition-transform duration-300 ${isMobileFiltersOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* SIDEBAR: Search & Filters (Hidden on mobile unless toggled open) */}
      <aside
        className={`w-full lg:w-72 shrink-0 ${isMobileFiltersOpen ? "block" : "hidden"} lg:block`}
      >
        <div className="bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-6 sm:p-8 shadow-sm lg:sticky lg:top-28 flex flex-col gap-8">
          {/* Search Bar */}
          <div>
            <div className="flex items-center gap-2 font-bold text-green-950 mb-4 text-lg">
              <Search className="w-5 h-5 text-emerald-600" /> Search
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Find a product..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl py-3 pl-4 pr-10 text-sm focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all text-green-950"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600 font-bold text-xs hover:text-emerald-800"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>

          {/* Categories */}
          <div>
            <div className="flex items-center gap-2 font-bold text-green-950 mb-4 text-lg">
              <Filter className="w-5 h-5 text-emerald-600" /> Categories
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setIsMobileFiltersOpen(false); // Auto-close on mobile after picking!
              }}
              className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl py-3 px-4 text-sm font-semibold text-green-900 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 cursor-pointer appearance-none"
            >
              {categories.map((cat: any) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By Price */}
          <div>
            <div className="flex items-center gap-2 font-bold text-green-950 mb-4 text-lg">
              <ArrowUpDown className="w-5 h-5 text-emerald-600" /> Sort By
            </div>
            <select
              value={sortOrder}
              onChange={(e) => {
                setSortOrder(e.target.value);
                setIsMobileFiltersOpen(false); // Auto-close on mobile after sorting!
              }}
              className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl py-3 px-4 text-sm font-semibold text-green-900 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 cursor-pointer appearance-none"
            >
              <option value="default">Latest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </aside>

      {/* MAIN GRID: Products */}
      <div className="flex-1">
        {displayProducts.length === 0 ? (
          <div className="w-full bg-white/50 border border-emerald-100 rounded-[2rem] p-12 text-center flex flex-col items-center justify-center gap-4">
            <ShoppingBag className="w-12 h-12 text-emerald-300" />
            <h3 className="text-xl font-bold text-green-950">
              No products found
            </h3>
            <p className="text-green-700">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSortOrder("default");
              }}
              className="mt-4 text-emerald-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {displayProducts.map((item: any) => (
              <div
                key={item._id}
                className="bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <a
                  href={`/shop/${item._id}`}
                  className="block flex-1 cursor-pointer"
                >
                  <div className="aspect-[4/5] relative overflow-hidden bg-emerald-50/30 border-b border-emerald-50 flex items-center justify-center">
                    {item.images && item.images.length > 0 ? (
                      <>
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700 overflow-hidden">
                          <img
                            src={urlFor(item.images[0])
                              .width(400)
                              .blur(50)
                              .url()}
                            alt=""
                            className="w-full h-full object-cover blur-2xl scale-125 saturate-150"
                          />
                        </div>
                        <div className="relative z-10 w-full h-full p-5 flex items-center justify-center">
                          <img
                            src={urlFor(item.images[0]).url()}
                            alt={item.name}
                            className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                        </div>
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-emerald-50 rounded-xl relative z-10">
                        <ShoppingBag className="w-10 h-10 text-emerald-300/80" />
                      </div>
                    )}

                    {item.video && (
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm z-20">
                        ▶ Video
                      </div>
                    )}
                  </div>

                  <div className="p-3 sm:p-4 flex flex-col">
                    <h3 className="font-bold text-sm sm:text-base text-green-950 mb-1 line-clamp-1 group-hover:text-emerald-700 transition-colors">
                      {item.name}
                    </h3>

                    <span className="text-base sm:text-lg font-black text-green-950 tracking-tight mt-1">
                      ₹{item.price}
                    </span>
                  </div>
                </a>

                <div className="px-3 pb-3 sm:px-4 sm:pb-4 pt-0">
                  <a
                    href={`https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(`Hi Glow Global Mart, I am interested in buying: ${item.name} (₹${item.price}). Is it available?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-50 border border-emerald-100 text-emerald-700 hover:bg-emerald-600 hover:text-white py-2 sm:py-2.5 rounded-xl transition-all duration-300 shadow-sm flex items-center justify-center gap-2 text-xs sm:text-sm font-bold"
                  >
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" /> Buy
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
