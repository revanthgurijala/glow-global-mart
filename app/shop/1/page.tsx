"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Gem,
  Star,
  ShieldCheck,
  Truck,
  ArrowLeft,
  ShoppingCart,
  Heart,
  Minus,
  Plus,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <main className="min-h-screen bg-[#f4f9f4] text-green-950 font-sans selection:bg-lime-300 selection:text-green-950 overflow-x-hidden pt-32 pb-20">
        {/* Background Ambient Glowing Orbs */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-400/10 blur-[120px] pointer-events-none z-0"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-400/10 blur-[120px] pointer-events-none z-0"></div>

        <Navbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb / Back Navigation */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-500 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
            Back to Shop
          </Link>

          <div className="bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-6 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column: Product Image Gallery Area */}
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-square bg-gradient-to-br from-amber-50 to-white rounded-3xl border border-amber-100 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-xs font-black px-4 py-2 rounded-full text-amber-900 uppercase tracking-wider shadow-sm border border-white/50">
                    Bestseller
                  </div>
                  <Gem className="w-48 h-48 text-amber-300/80 drop-shadow-xl group-hover:scale-105 transition-transform duration-700" />
                </div>
                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-2xl flex items-center justify-center border-2 cursor-pointer transition-all ${i === 1 ? "border-amber-400 bg-amber-50" : "border-transparent bg-green-50 hover:bg-amber-50"}`}
                    >
                      <Gem
                        className={`w-8 h-8 ${i === 1 ? "text-amber-400" : "text-green-300"}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Product Info & Actions */}
              <div className="flex flex-col justify-center">
                {/* Origin Badge */}
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-4">
                  <MapPin className="w-4 h-4" /> Sourced from Jaipur, Rajasthan
                  (ODOP)
                </div>

                <h1 className="text-4xl lg:text-5xl font-black text-green-950 font-['var(--font-outfit)'] mb-4 tracking-tight leading-tight">
                  Antique Gold-Plated Heritage Necklace
                </h1>

                {/* Ratings */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-green-100">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                  </div>
                  <span className="text-sm font-bold text-green-700">
                    4.9 (128 Reviews)
                  </span>
                </div>

                {/* Price & Description */}
                <div className="mb-8">
                  <div className="flex items-end gap-4 mb-4">
                    <span className="text-4xl font-black text-green-950 tracking-tight">
                      ₹2,499
                    </span>
                    <span className="text-lg text-green-600/60 font-medium line-through mb-1">
                      ₹3,999
                    </span>
                    <span className="text-sm font-bold text-red-500 bg-red-50 px-2 py-1 rounded mb-1.5">
                      -37%
                    </span>
                  </div>
                  <p className="text-green-800 leading-relaxed font-medium text-lg">
                    A masterpiece of traditional craftsmanship. This one-gram
                    gold-plated necklace features intricate temple design
                    motifs, perfectly blending heritage aesthetics with modern
                    lightweight comfort.
                  </p>
                </div>

                {/* Add to Cart Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  {/* Quantity */}
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-2xl px-4 py-3 sm:w-32 shrink-0">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-green-600 hover:text-green-950 transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="font-bold text-lg text-green-950">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-green-600 hover:text-green-950 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>

                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-[0_8px_30px_rgb(16,185,129,0.3)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 py-4">
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </button>

                  <button className="p-4 bg-white border border-green-200 text-green-600 hover:text-red-500 hover:border-red-200 hover:bg-red-50 rounded-2xl transition-all duration-300 shrink-0">
                    <Heart className="w-6 h-6" />
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100/50">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-950 text-sm">
                        Authenticity Guaranteed
                      </h4>
                      <p className="text-xs text-emerald-800 font-medium mt-0.5">
                        Verified local creator
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-950 text-sm">
                        Quality Checked
                      </h4>
                      <p className="text-xs text-emerald-800 font-medium mt-0.5">
                        Passed rigorous testing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:col-span-2 pt-2 border-t border-emerald-100/50 mt-2">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 shrink-0">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-950 text-sm">
                        Secure Shipping
                      </h4>
                      <p className="text-xs text-emerald-800 font-medium mt-0.5">
                        Dispatched within 48 hours in eco-friendly packaging.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
