"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Users,
  Leaf,
  ShieldCheck,
  MessageCircle,
  Flower2,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  {
    /* Navigation (Glassmorphism Sticky Header) */
  }
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-green-200/50 flex flex-col shadow-sm">
        {/* Topbar (Thin strip) */}
        <div className="hidden md:flex bg-emerald-900 py-2 border-b border-emerald-950 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center items-center gap-12 sm:gap-16 text-xs font-medium text-emerald-100 tracking-wide">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <Users className="w-4 h-4 text-emerald-400" /> Empowering
              communities
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <Leaf className="w-4 h-4 text-emerald-400" /> Sustainable Living
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Authentic
              Products
            </span>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between w-full">
          <div className="flex items-center gap-3 shrink-0">
            <Image
              src="/ggm.png"
              alt="Glow Global Mart Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold text-green-950 tracking-wide font-['var(--font-outfit)'] hidden sm:block">
              Glow Global Mart
            </span>
          </div>

          {/* Main Links (Center) */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-green-900">
            <a href="/#" className="relative group py-1">
              <span className="group-hover:text-emerald-600 transition-colors duration-300">
                Home
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </a>
            <a href="/#about" className="relative group py-1">
              <span className="group-hover:text-emerald-600 transition-colors duration-300">
                About
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </a>
            <a href="/#services" className="relative group py-1">
              <span className="group-hover:text-emerald-600 transition-colors duration-300">
                Services
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </a>
            <a href="/#shop" className="relative group py-1">
              <span className="group-hover:text-emerald-600 transition-colors duration-300">
                Shop
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </a>

            <a href="/#farmer-market" className="relative group py-1">
              <span className="group-hover:text-emerald-600 transition-colors duration-300">
                Farmer Market
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </a>

            <a href="/#contact" className="relative group py-1">
              <span className="group-hover:text-emerald-600 transition-colors duration-300">
                Contact
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </a>
          </div>

          {/* Action Buttons (Right Side) */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Desktop: Decorative Watermark Cluster & WhatsApp CTA */}
            <div className="hidden md:flex items-center gap-2">
              {/* Artisan Watermark Stamp Cluster */}
              <div className="pointer-events-none flex items-center justify-center pr-3">
                {/* Glow Sparkle */}
                <Sparkles className="w-4 h-4 text-emerald-600/20 fill-emerald-600/20 rotate-12 -mr-1 mt-4 drop-shadow-sm" />
                {/* Handcrafted Flower */}
                <Flower2 className="w-8 h-8 text-emerald-600/15 fill-emerald-600/15 -rotate-12 drop-shadow-sm relative z-10" />
                {/* Eco Leaf */}
                <Leaf className="w-5 h-5 text-emerald-600/20 fill-emerald-600/20 text-emerald-600/20 rotate-45 -ml-1.5 mb-3 drop-shadow-sm" />
              </div>

              {/* Primary Chat Button */}
              <a
                href="https://wa.me/919963420226?text=Hi%20Glow%20Global%20Mart,%20I%20have%20a%20question!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 rounded-full text-sm font-bold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with us</span>
              </a>
            </div>

            {/* Hamburger Button (Mobile Only) */}
            <button
              className="lg:hidden p-2 text-green-800 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-green-200 absolute top-full left-0 w-full shadow-lg flex flex-col py-4 px-6 gap-4 text-sm font-semibold text-green-900 z-50">
            <a
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-600"
            >
              Home
            </a>
            <a
              href="/#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-600"
            >
              About
            </a>
            <a
              href="/#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-600"
            >
              Services
            </a>
            <a
              href="/#shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-600"
            >
              Shop
            </a>

            <a
              href="/#farmer-market"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-600"
            >
              Farmer Market
            </a>

            <a
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-600"
            >
              Contact
            </a>
            {/* Mobile Bottom CTA */}
            <div className="mt-2 pt-4 border-t border-green-100">
              <a
                href="https://wa.me/919963420226?text=Hi%20Glow%20Global%20Mart,%20I%20have%20a%20question!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-5 py-3 rounded-full text-sm font-bold text-white transition-all w-full shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
