"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Store,
  Lightbulb,
  BadgeCheck,
  Heart,
  Quote,
  ShoppingBag,
  Compass,
  Sparkles,
  Globe2,
  HeartHandshake,
  Gift,
  Palette,
  Search,
  Gem,
  Recycle,
  Sprout,
  Tractor,
  CheckCircle2,
  Users,
  ArrowRight,
  ShoppingCart,
  User,
  Leaf,
  ShieldCheck,
  Truck,
  BarChart2,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Globe,
  Star,
  UserCheck,
  UserPlus,
  UserX,
  Calendar,
  Clock,
  CreditCard,
  Tag,
  Percent,
  Box,
  Package2,
  MapPinOff,
  MapPinPlus,
  MapPinMinus,
  Menu,
  X,
  Layers,
  Handshake,
  Wand2,
  Briefcase,
  Brush,
  Shirt,
  TreePine,
  PackageCheck,
  HeartPulse,
  PackageSearch,
  LineChart,
  SearchCheck,
  Target,
  TrendingUp,
  Rocket,
  HandHeart,
  Telescope,
} from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      {" "}
      {/* <--- ADD THIS EXACTLY HERE */}
      <main className="min-h-screen bg-[#f4f9f4] text-green-950 font-sans selection:bg-green-200 overflow-x-hidden">
        {/* Background Ambient Glowing Orbs */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-400/20 blur-[120px] pointer-events-none animate-pulse duration-1000 z-0"></div>
        <div
          className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-lime-400/20 blur-[120px] pointer-events-none animate-pulse duration-1000 z-0"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Navigation (Glassmorphism Sticky Header) */}
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
              <a href="#" className="relative group py-1">
                <span className="group-hover:text-emerald-600 transition-colors duration-300">
                  Home
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </a>
              <a href="#shop" className="relative group py-1">
                <span className="group-hover:text-emerald-600 transition-colors duration-300">
                  Shop
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </a>
              <a href="#services" className="relative group py-1">
                <span className="group-hover:text-emerald-600 transition-colors duration-300">
                  Services
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </a>
              <a href="#farmer-market" className="relative group py-1">
                <span className="group-hover:text-emerald-600 transition-colors duration-300">
                  Farmer Market
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </a>
              <a href="#about" className="relative group py-1">
                <span className="group-hover:text-emerald-600 transition-colors duration-300">
                  About
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </a>
              <a href="#contact" className="relative group py-1">
                <span className="group-hover:text-emerald-600 transition-colors duration-300">
                  Contact
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </a>
            </div>

            {/* Action Buttons (Search, Cart, Login, Hamburger) */}
            <div className="flex items-center gap-3 sm:gap-5">
              <div className="relative group hidden md:block">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-white/80 border border-green-200 rounded-full py-2 pl-4 pr-10 text-sm text-green-950 placeholder-green-600 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all w-48 xl:w-64"
                />
                <Search className="w-4 h-4 text-green-600 absolute right-4 top-1/2 -translate-y-1/2 group-hover:text-emerald-600 transition-colors" />
              </div>

              <button className="relative p-2 text-green-800 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all duration-300 hover:scale-110 active:scale-95">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm border border-white">
                  0
                </span>
              </button>

              <button className="hidden sm:flex items-center gap-2 bg-green-700 hover:bg-green-800 px-5 py-2.5 rounded-full text-sm font-medium text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0">
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>

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
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-emerald-600"
              >
                Home
              </a>
              <a
                href="#shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-emerald-600"
              >
                Shop
              </a>
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-emerald-600"
              >
                Services
              </a>
              <a
                href="#farmer-market"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-emerald-600"
              >
                Farmer Market
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-emerald-600"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-emerald-600"
              >
                Contact
              </a>
              {/* Mobile Search & Login */}
              <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-green-100">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full bg-white border border-green-200 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-emerald-500"
                  />
                  <Search className="w-4 h-4 text-green-600 absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
                <button className="flex justify-center items-center gap-2 bg-green-700 hover:bg-green-800 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all w-full">
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* HERO SECTION - NO CLIPPING */}
        <section className="relative w-full mt-20 md:mt-[112px] min-h-[650px] md:min-h-[700px] lg:min-h-[calc(100vh-112px)] py-16 lg:pt-24 lg:pb-36 overflow-hidden flex items-center group">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1766074922730-a9011b51b394?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/95 to-transparent w-full lg:w-4/5"></div>
          {/* Fallback overlay for smaller screens */}
          <div className="absolute inset-0 bg-emerald-950/60 lg:hidden"></div>

          {/* Main Content Container */}
          <div className="relative z-10 px-8 md:px-12 lg:px-24 w-full flex flex-col justify-center h-full">
            {/* Left Side: Text Content */}
            <div className="flex flex-col items-start text-left space-y-6 w-full lg:w-3/5">
              {/* Glassmorphic Welcome Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-100 text-sm font-bold tracking-widest uppercase shadow-lg">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Welcome to Glow Global Mart
              </div>

              {/* Typography Hierarchy */}
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-white tracking-tight leading-[1.15] font-['var(--font-outfit)'] drop-shadow-xl">
                Your Gateway to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-emerald-300 to-teal-300">
                  Meaningful & <br className="hidden md:block" /> Responsible
                </span>{" "}
                <br />
                Shopping
              </h1>

              <p className="text-base md:text-lg text-emerald-50 max-w-xl leading-relaxed drop-shadow-md font-medium">
                We connect conscious customers with authentic, high-quality
                products sourced from artisans, farmers, and trusted
                manufacturers. Bring stories, craftsmanship, and sustainability
                into your everyday life.
              </p>

              {/* Styled Quote Box */}
              <div className="p-5 bg-emerald-900/40 backdrop-blur-md border-l-4 border-lime-400 rounded-r-xl max-w-lg shadow-lg hidden sm:block">
                <p className="text-lime-100 italic font-semibold text-base md:text-lg">
                  &quot;When you support small, you empower dreams&quot;
                </p>
              </div>
            </div>

            {/* Action Buttons: Standard flow on mobile/tablet, absolute on large desktop */}
            <div className="relative mt-10 lg:mt-0 lg:absolute lg:bottom-16 lg:right-24 flex flex-row items-center gap-4 w-full lg:w-auto z-20">
              <button className="group flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full bg-lime-400 text-emerald-950 font-bold hover:bg-lime-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] hover:-translate-y-1 transition-all duration-300 text-sm md:text-lg shadow-xl">
                <ShoppingBag className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                Shop Now
              </button>
              <button className="group flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-400/30 text-white font-bold hover:bg-emerald-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-sm md:text-lg shadow-xl">
                <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                Explore
              </button>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 relative z-10 flex flex-col gap-8 md:gap-12">
          {/* ABOUT & INSPIRATION */}
          <section
            id="about"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10"
          >
            {/* About Us Card */}
            <div className="relative bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(16,185,129,0.1)] hover:-translate-y-1 transition-all duration-500 group overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl group-hover:bg-emerald-400/20 transition-colors duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-emerald-100/50 rounded-2xl text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                    <Store className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl font-black text-green-950 font-['var(--font-outfit)'] tracking-tight">
                    ABOUT US
                  </h2>
                </div>

                <p className="text-green-800 mb-8 leading-relaxed text-lg">
                  Glow Global Mart is a platform built to bridge the gap between
                  local creators and global consumers. We carefully identify,
                  source, and curate products through the{" "}
                  <strong className="text-emerald-700 font-bold">
                    One District One Product (ODOP)
                  </strong>{" "}
                  concept — showcasing unique regional specialties and hidden
                  talents.
                </p>

                <h3 className="text-green-950 font-bold mb-5 text-xl">
                  Our Approach
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-green-800 font-medium">
                    <BadgeCheck className="w-6 h-6 text-emerald-500 shrink-0" />{" "}
                    Sourcing from verified artisans, farmers, and producers
                  </li>
                  <li className="flex items-start gap-3 text-green-800 font-medium">
                    <BadgeCheck className="w-6 h-6 text-emerald-500 shrink-0" />{" "}
                    Promoting sustainable and ethical practices
                  </li>
                  <li className="flex items-start gap-3 text-green-800 font-medium">
                    <BadgeCheck className="w-6 h-6 text-emerald-500 shrink-0" />{" "}
                    Ensuring quality through careful curation
                  </li>
                  <li className="flex items-start gap-3 text-green-800 font-medium">
                    <BadgeCheck className="w-6 h-6 text-emerald-500 shrink-0" />{" "}
                    Enabling market access for rural and small-scale creators
                  </li>
                </ul>

                <div className="flex items-start gap-3 p-5 bg-gradient-to-r from-emerald-50 to-teal-50/50 border border-emerald-100/80 rounded-2xl group-hover:border-emerald-200 transition-colors">
                  <Heart className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5 fill-emerald-500/20" />
                  <p className="text-emerald-900 font-semibold leading-snug">
                    Every purchase supports real people, real communities, and
                    real impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Inspiration Card */}
            <div className="relative bg-gradient-to-br from-lime-50/80 to-emerald-50/50 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(132,204,22,0.15)] hover:-translate-y-1 transition-all duration-500 group flex flex-col justify-center overflow-hidden">
              {/* Large Decorative Quote Icon in Background */}
              <Quote className="absolute -top-6 -right-6 w-48 h-48 text-lime-500/5 -rotate-12 group-hover:scale-110 group-hover:text-lime-500/10 transition-all duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-lime-200/50 rounded-2xl text-lime-700 group-hover:scale-110 group-hover:bg-lime-200 transition-all duration-300">
                    <Lightbulb className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl font-black text-green-950 font-['var(--font-outfit)'] tracking-tight">
                    OUR INSPIRATION
                  </h2>
                </div>

                <div className="relative mb-10">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-lime-400 to-emerald-500 rounded-full"></div>
                  <blockquote className="pl-8 py-2">
                    <p className="text-3xl md:text-4xl text-green-900 italic font-light leading-snug mb-6 font-['var(--font-outfit)'] tracking-tight">
                      "The soul of India lives in its villages."
                    </p>
                    <footer className="text-lg text-emerald-700 font-bold uppercase tracking-widest flex items-center gap-2">
                      <div className="w-8 h-px bg-emerald-700"></div>
                      Mahatma Gandhi
                    </footer>
                  </blockquote>
                </div>

                <p className="text-green-800 text-xl leading-relaxed font-medium">
                  This philosophy inspires us to bring rural innovation and
                  traditional excellence to modern consumers. We believe in
                  preserving heritage while embracing the future.
                </p>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section
            id="services"
            className="space-y-12 relative z-10 pt-4 scroll-mt-24"
          >
            {/* Section Header */}
            <div className="text-center flex flex-col items-center">
              <div className="p-3 bg-emerald-100/50 rounded-2xl text-emerald-600 mb-4 shadow-sm">
                <Layers className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-green-950 font-['var(--font-outfit)'] tracking-tight mb-4">
                SERVICES
              </h2>
              <p className="text-emerald-700 text-lg font-bold tracking-widest uppercase">
                What We Enable
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Corporate Gifting */}
              <div className="relative bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(16,185,129,0.1)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl group-hover:bg-emerald-400/20 transition-colors duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-emerald-100/60 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300 mb-6">
                    <Gift className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-950 mb-4 font-['var(--font-outfit)']">
                    Corporate Gifting Solutions
                  </h3>
                  <p className="text-green-800 mb-8 leading-relaxed flex-grow">
                    We design and deliver customized gifting solutions by
                    sourcing unique, meaningful products that align with your
                    brand values.
                  </p>
                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-white border border-emerald-100/80 rounded-xl group-hover:border-emerald-200 transition-colors">
                    <p className="text-emerald-900 text-sm font-semibold flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      Bulk sourcing | Custom branding | End-to-end support
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Customized Art (USP) - Highlighted Card */}
              <div className="relative bg-gradient-to-b from-white/90 to-lime-50/50 backdrop-blur-2xl border-2 border-lime-200/60 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(132,204,22,0.15)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/15 rounded-full blur-2xl group-hover:bg-lime-400/25 transition-colors duration-500"></div>
                <div className="absolute top-6 right-6 bg-lime-200/80 text-lime-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  Our USP
                </div>

                <div className="relative z-10 mt-2 flex flex-col h-full">
                  <div className="w-14 h-14 bg-lime-200/60 rounded-2xl flex items-center justify-center text-lime-700 group-hover:scale-110 group-hover:bg-lime-200 transition-all duration-300 mb-6">
                    <Palette className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-950 mb-4 font-['var(--font-outfit)'] pr-16">
                    Customized Art & Products
                  </h3>
                  <p className="text-green-800 mb-8 leading-relaxed flex-grow">
                    Have a unique idea? We coordinate with skilled creators and
                    manufacturers to bring your vision to life.
                  </p>
                  <div className="p-4 bg-gradient-to-r from-lime-100/50 to-white border border-lime-200/80 rounded-xl group-hover:border-lime-300 transition-colors">
                    <p className="text-lime-900 text-sm font-semibold flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                      Personalized gifts | Custom designs | Exclusive creations
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Sourcing */}
              <div className="relative bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(16,185,129,0.1)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl group-hover:bg-teal-400/20 transition-colors duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-teal-100/60 rounded-2xl flex items-center justify-center text-teal-600 group-hover:scale-110 group-hover:bg-teal-100 transition-all duration-300 mb-6">
                    <Handshake className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-950 mb-4 font-['var(--font-outfit)']">
                    Sourcing & Development
                  </h3>
                  <p className="text-green-800 mb-8 leading-relaxed flex-grow">
                    We help businesses and individuals find the right products
                    from the right sources with complete coordination.
                  </p>
                  <div className="p-4 bg-gradient-to-r from-teal-50 to-white border border-teal-100/80 rounded-xl group-hover:border-teal-200 transition-colors">
                    <p className="text-teal-900 text-sm font-semibold flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      Vendor sourcing | Product customization | Quality
                      coordination
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SHOP */}
          <section
            id="shop"
            className="space-y-12 relative z-10 pt-4 scroll-mt-24"
          >
            {/* Section Header */}
            <div className="text-center flex flex-col items-center">
              <div className="p-3 bg-amber-100/50 rounded-2xl text-amber-600 mb-4 shadow-sm">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-green-950 font-['var(--font-outfit)'] tracking-tight mb-4">
                SHOP
              </h2>
              <p className="text-amber-600 text-lg font-bold tracking-widest uppercase">
                What You Can Buy
              </p>
            </div>

            {/* Advanced Bento Box Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Featured Large Card: Jewellery */}
              <div className="lg:col-span-7 relative bg-gradient-to-br from-amber-50/90 to-orange-50/40 backdrop-blur-2xl border border-amber-200/60 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(245,158,11,0.15)] hover:-translate-y-1 transition-all duration-500 group overflow-hidden flex flex-col justify-center">
                {/* Subtle glowing orb */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-300/15 rounded-full blur-3xl group-hover:bg-amber-300/25 transition-colors duration-700"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-amber-200/50 rounded-2xl flex items-center justify-center text-amber-700 group-hover:scale-110 group-hover:bg-amber-200 transition-all duration-300 mb-8 shadow-sm">
                    <Gem className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-green-950 mb-6 font-['var(--font-outfit)']">
                    One Gram Jewellery
                  </h3>
                  <p className="text-green-900 leading-relaxed space-y-5 text-lg font-medium">
                    <span className="block">
                      At Glow Global Mart, our One Gram Jewellery collection is
                      carefully curated from trusted creators, bringing you
                      designs that reflect timeless sophistication and modern
                      refinement. Each piece is selected for its craftsmanship,
                      finish, and ability to elevate your everyday style.
                    </span>
                    <span className="block">
                      Designed to complement every occasion, these pieces offer
                      the look of luxury with effortless grace, making fine
                      aesthetics accessible without compromise.
                    </span>
                  </p>
                  <div className="mt-8 inline-block p-6 bg-white/70 backdrop-blur-md border border-amber-200/60 rounded-2xl shadow-sm">
                    <p className="text-amber-800 font-bold italic text-lg tracking-wide">
                      &quot;Because true elegance is not just worn — it is
                      experienced.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Stacked sleek cards */}
              <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
                {/* Handcrafted Card */}
                <div className="relative bg-white/80 backdrop-blur-xl border border-green-200/60 rounded-[2rem] p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] hover:-translate-y-1 transition-all duration-500 group overflow-hidden flex-1 flex flex-col justify-center">
                  {/* Large Background Watermark Icon */}
                  <div className="absolute -right-6 -bottom-6 text-emerald-50 group-hover:text-emerald-100 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700">
                    <Wand2 className="w-40 h-40" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-emerald-100/50 rounded-xl text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                        <Wand2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-green-950 font-['var(--font-outfit)']">
                        Handcrafted & ODOP
                      </h3>
                    </div>
                    <p className="text-green-800 font-medium text-lg leading-relaxed">
                      Authentic handmade products curated from local artisans
                      across different districts.
                    </p>
                  </div>
                </div>

                {/* Corporate Card */}
                <div className="relative bg-white/80 backdrop-blur-xl border border-green-200/60 rounded-[2rem] p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] hover:-translate-y-1 transition-all duration-500 group overflow-hidden flex-1 flex flex-col justify-center">
                  <div className="absolute -right-6 -bottom-6 text-emerald-50 group-hover:text-blue-50/80 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700">
                    <Briefcase className="w-40 h-40" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-100/50 rounded-xl text-blue-600 group-hover:bg-blue-100 transition-colors">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-green-950 font-['var(--font-outfit)']">
                        Corporate Gifts
                      </h3>
                    </div>
                    <p className="text-green-800 font-medium text-lg leading-relaxed">
                      Ready-to-buy premium gifting options suitable for
                      businesses and occasions.
                    </p>
                  </div>
                </div>

                {/* Custom Art Card */}
                <div className="relative bg-white/80 backdrop-blur-xl border border-green-200/60 rounded-[2rem] p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] hover:-translate-y-1 transition-all duration-500 group overflow-hidden flex-1 flex flex-col justify-center">
                  <div className="absolute -right-6 -bottom-6 text-emerald-50 group-hover:text-purple-50/80 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700">
                    <Brush className="w-40 h-40" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-purple-100/50 rounded-xl text-purple-600 group-hover:bg-purple-100 transition-colors">
                        <Brush className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-green-950 font-['var(--font-outfit)']">
                        Customized Art
                      </h3>
                    </div>
                    <p className="text-green-800 font-medium text-lg leading-relaxed">
                      Pre-designed and made-to-order creative pieces crafted by
                      skilled artists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECONDLIFE */}
          <section className="space-y-12 relative z-10 pt-4 scroll-mt-24">
            {/* Section Header */}
            <div className="text-center flex flex-col items-center">
              <div className="p-3 bg-emerald-100/50 rounded-2xl text-emerald-600 mb-4 shadow-sm">
                <HeartPulse className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-green-950 font-['var(--font-outfit)'] tracking-tight mb-4 uppercase">
                SECONDLIFE
              </h2>
              <p className="text-emerald-700 text-lg font-bold tracking-widest uppercase">
                Sustainable Products
              </p>
            </div>

            {/* New Advanced Bento Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative z-10">
              {/* Card 1: Main Editorial with Infographic */}
              <div className="lg:col-span-7 relative bg-gradient-to-br from-white/90 to-emerald-50/50 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(16,185,129,0.1)] hover:-translate-y-1 transition-all duration-500 group overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/15 rounded-full blur-3xl group-hover:bg-emerald-400/25 transition-colors duration-700"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-emerald-100/50 rounded-2xl text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                      <Recycle className="w-7 h-7" />
                    </div>
                    <h3 className="text-3xl font-black text-green-950 mb-2 font-['var(--font-outfit)']">
                      SECOND LIFE
                    </h3>
                  </div>

                  <h3 className="text-3xl font-black text-green-950 mb-6 font-['var(--font-outfit)'] tracking-tight leading-snug">
                    Transforming Waste into Value. Creating a Better Future.
                  </h3>

                  <p className="text-green-800 leading-relaxed text-lg font-medium mb-10">
                    We collaborate with sustainable product creators and
                    manufacturers who transform waste materials into useful,
                    eco-friendly products.
                  </p>

                  {/* Large informational Infographic with Premium Ambient Backdrop */}
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-emerald-200/50 group-hover:border-emerald-300 transition-colors bg-emerald-50/50">
                    {/* Layer 1: Premium blurred background to fill empty spaces seamlessly */}
                    <Image
                      src="/Second-Life.png"
                      alt="Background ambient blur"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover opacity-60 blur-2xl scale-110 saturate-150"
                    />

                    {/* Layer 2: Actual crisp infographic on top */}
                    <Image
                      src="/Second-Life.png"
                      alt="Second Life sustainable products informational infographic"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain z-10 drop-shadow-2xl scale-95 transition-transform duration-700 group-hover:scale-100"
                    />
                  </div>
                </div>
              </div>

              {/* Card 2: Features Bento with New Icons */}
              <div className="lg:col-span-5 relative bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(16,185,129,0.1)] hover:-translate-y-1 transition-all duration-500 group overflow-hidden">
                <div className="relative z-10 flex flex-col gap-6 lg:gap-8 h-full">
                  {/* Subsection Header within Card */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-emerald-100/50 rounded-xl text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                      <Globe2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-green-950 font-['var(--font-outfit)'] uppercase tracking-wide">
                      What We Bring to You
                    </h3>
                  </div>

                  {/* Smaller inner bento boxes */}
                  <div className="flex-grow flex flex-col gap-6 lg:gap-8">
                    {/* Recycled Textiles */}
                    <div className="relative bg-emerald-50 rounded-2xl p-6 border border-emerald-100/80 group-hover:border-emerald-200 transition-colors flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                          <Shirt className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-emerald-950 font-['var(--font-outfit)']">
                          Recycled Textiles
                        </h4>
                      </div>
                      <p className="text-emerald-900 font-medium text-sm leading-relaxed">
                        Products made from recycled materials like plastic
                        bottles and fabric waste — sourced from responsible
                        producers.
                      </p>
                    </div>

                    {/* Eco-Friendly Packaging */}
                    <div className="relative bg-emerald-50 rounded-2xl p-6 border border-emerald-100/80 group-hover:border-emerald-200 transition-colors flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                          <PackageCheck className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-emerald-950 font-['var(--font-outfit)']">
                          Eco-Friendly Packaging
                        </h4>
                      </div>
                      <p className="text-emerald-900 font-medium text-sm leading-relaxed">
                        Biodegradable and compostable packaging solutions
                        created from natural resources like agricultural waste.
                      </p>
                    </div>

                    {/* Green Lifestyle Products */}
                    <div className="relative bg-emerald-50 rounded-2xl p-6 border border-emerald-100/80 group-hover:border-emerald-200 transition-colors flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                          <Sprout className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-emerald-950 font-['var(--font-outfit)']">
                          Green Lifestyle Products
                        </h4>
                      </div>
                      <p className="text-emerald-900 font-medium text-sm leading-relaxed">
                        Carefully selected eco-friendly products designed for
                        sustainable living.
                      </p>
                    </div>
                  </div>

                  {/* Final Callout at the bottom */}
                  <div className="flex items-start gap-3 p-5 bg-gradient-to-r from-emerald-50 to-white border border-emerald-100/80 rounded-2xl group-hover:border-emerald-200 transition-colors mt-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5 fill-emerald-500/10" />
                    <p className="text-emerald-900 font-semibold leading-snug">
                      We identify, verify, and bring these innovations to you,
                      making sustainable choices easily accessible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FARMER MARKET */}
          <section
            id="farmer-market"
            className="space-y-12 relative z-10 pt-4 scroll-mt-24"
          >
            {/* Section Header */}
            <div className="text-center flex flex-col items-center">
              <div className="p-3 bg-lime-100/50 rounded-2xl text-lime-700 mb-4 shadow-sm">
                <Tractor className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-green-950 font-['var(--font-outfit)'] tracking-tight mb-4 uppercase">
                FARMER MARKET
              </h2>
              <p className="text-lime-700 text-lg font-bold tracking-widest uppercase">
                Direct From Source
              </p>
            </div>

            {/* Flipped Bento Layout (Features on Left, Image on Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative z-10">
              {/* Left Column: Traceability Features */}
              <div className="lg:col-span-5 relative bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(132,204,22,0.15)] hover:-translate-y-1 transition-all duration-500 group overflow-hidden order-2 lg:order-1">
                <div className="relative z-10 flex flex-col gap-6 lg:gap-8 h-full">
                  {/* Subsection Header */}
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 bg-lime-100/50 rounded-xl text-lime-700 group-hover:bg-lime-200 transition-colors">
                      <SearchCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-green-950 font-['var(--font-outfit)'] uppercase tracking-wide">
                      Transparency You Can Trust
                    </h3>
                  </div>

                  <p className="text-green-800 font-medium leading-relaxed">
                    We connect you directly with farmers by sourcing products
                    with complete traceability:
                  </p>

                  {/* Stacked Traceability Cards */}
                  <div className="flex-grow flex flex-col gap-4">
                    <div className="flex items-center gap-4 bg-lime-50/80 rounded-2xl p-4 border border-lime-100/80 group-hover:border-lime-200 transition-colors">
                      <div className="p-2 bg-white rounded-lg text-lime-600 shadow-sm">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-green-950">
                        Farm origin details
                      </span>
                    </div>
                    <div className="flex items-center gap-4 bg-lime-50/80 rounded-2xl p-4 border border-lime-100/80 group-hover:border-lime-200 transition-colors">
                      <div className="p-2 bg-white rounded-lg text-lime-600 shadow-sm">
                        <Sprout className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-green-950">
                        Cultivation practices
                      </span>
                    </div>
                    <div className="flex items-center gap-4 bg-lime-50/80 rounded-2xl p-4 border border-lime-100/80 group-hover:border-lime-200 transition-colors">
                      <div className="p-2 bg-white rounded-lg text-lime-600 shadow-sm">
                        <LineChart className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-green-950">
                        Production insights
                      </span>
                    </div>
                    <div className="flex items-center gap-4 bg-lime-50/80 rounded-2xl p-4 border border-lime-100/80 group-hover:border-lime-200 transition-colors">
                      <div className="p-2 bg-white rounded-lg text-lime-600 shadow-sm">
                        <SearchCheck className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-green-950">
                        Supply transparency
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Main Editorial & Image */}
              <div className="lg:col-span-7 relative bg-gradient-to-br from-lime-50/80 to-amber-50/40 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(245,158,11,0.1)] hover:-translate-y-1 transition-all duration-500 group overflow-hidden order-1 lg:order-2 flex flex-col">
                {/* Subtle background glow */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-colors duration-700"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-3xl font-black text-green-950 mb-6 font-['var(--font-outfit)'] tracking-tight leading-snug">
                    Fresh and natural products sourced directly from farmers.
                  </h3>

                  {/* Premium Ambient Backdrop Image Container */}
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-lime-200/50 group-hover:border-lime-300 transition-colors bg-lime-50/50 mb-8 mt-auto">
                    {/* Layer 1: Premium blurred background */}
                    <Image
                      src="/Farmer-Market.png"
                      alt="Background ambient blur"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover opacity-60 blur-2xl scale-110 saturate-150"
                    />

                    {/* Layer 2: Crisp main image */}
                    <Image
                      src="/Farmer-Market.png"
                      alt="Farmer Market transparent sourcing"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain z-10 drop-shadow-2xl scale-95 transition-transform duration-700 group-hover:scale-100"
                    />
                  </div>

                  {/* Final Callout at the bottom */}
                  <div className="flex items-start gap-3 p-5 bg-white/60 backdrop-blur-md border border-lime-200/80 rounded-2xl group-hover:border-lime-300 transition-colors shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-lime-600 shrink-0 mt-0.5 fill-lime-600/10" />
                    <p className="text-lime-950 font-semibold leading-snug">
                      In selected cases, we also facilitate crop testing
                      information to ensure absolute quality and authenticity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US & PARTNER */}
          <section className="space-y-12 relative z-10 pt-4 scroll-mt-24">
            {/* Section Header */}
            <div className="text-center flex flex-col items-center">
              <div className="p-3 bg-teal-100/50 rounded-2xl text-teal-600 mb-4 shadow-sm">
                <Star className="w-8 h-8 fill-teal-600/20" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-green-950 font-['var(--font-outfit)'] tracking-tight mb-4 uppercase">
                The Glow Global Ecosystem
              </h2>
              <p className="text-teal-700 text-lg font-bold tracking-widest uppercase">
                Why Choose Us & Grow With Us
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative z-10">
              {/* Left Column: Why Choose Us (Light Glassmorphism) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(20,184,166,0.1)] transition-all duration-500 flex-grow">
                  <h3 className="text-2xl font-bold text-green-950 mb-8 font-['var(--font-outfit)'] flex items-center gap-3">
                    <ShieldCheck className="w-7 h-7 text-teal-500" />
                    Why Choose Us
                  </h3>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-teal-50/50 border border-teal-100/50 hover:bg-teal-50 hover:border-teal-200 transition-colors group">
                      <div className="p-2 bg-white rounded-xl shadow-sm text-teal-600 group-hover:scale-110 transition-transform">
                        <Target className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-green-900">
                        Carefully curated product selection
                      </span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-teal-50/50 border border-teal-100/50 hover:bg-teal-50 hover:border-teal-200 transition-colors group">
                      <div className="p-2 bg-white rounded-xl shadow-sm text-teal-600 group-hover:scale-110 transition-transform">
                        <Globe2 className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-green-900">
                        Direct sourcing from authentic producers
                      </span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-teal-50/50 border border-teal-100/50 hover:bg-teal-50 hover:border-teal-200 transition-colors group">
                      <div className="p-2 bg-white rounded-xl shadow-sm text-teal-600 group-hover:scale-110 transition-transform">
                        <HandHeart className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-green-900">
                        Support for artisans & small businesses
                      </span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-teal-50/50 border border-teal-100/50 hover:bg-teal-50 hover:border-teal-200 transition-colors group">
                      <div className="p-2 bg-white rounded-xl shadow-sm text-teal-600 group-hover:scale-110 transition-transform">
                        <Sprout className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-green-900">
                        Focus on sustainability & ethics
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 rounded-2xl">
                    <h4 className="text-lg font-bold text-teal-900 mb-2">
                      A Platform in Progress
                    </h4>
                    <p className="text-teal-800 text-sm font-medium leading-relaxed mb-3">
                      We are dedicated to connecting local talent to wider
                      markets, curating meaningful products, and creating
                      transparent shopping experiences.
                    </p>
                    <p className="text-teal-700 font-bold text-sm">
                      👉 Real impact grows with time, trust, and community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Partner With Us (High Contrast Dark Glassmorphism) */}
              <div
                id="contact"
                className="lg:col-span-7 relative bg-gradient-to-br from-emerald-900 via-green-950 to-emerald-950 backdrop-blur-2xl border border-emerald-700/50 rounded-[2.5rem] p-8 md:p-10 shadow-2xl hover:shadow-[0_20px_50px_rgb(16,185,129,0.2)] hover:-translate-y-1 transition-all duration-500 overflow-hidden group flex flex-col"
              >
                {/* Ambient Dark Glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-lime-500/10 rounded-full blur-[80px] group-hover:bg-lime-500/20 transition-colors duration-700 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                      <h2 className="text-3xl font-black text-white mb-2 font-['var(--font-outfit)'] tracking-tight">
                        Partner With Us
                      </h2>
                      <h3 className="text-lg text-lime-300 font-bold">
                        Have a Unique Product? Let&apos;s Grow Together.
                      </h3>
                    </div>
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-lime-400 border border-white/10 shrink-0">
                      <Rocket className="w-7 h-7" />
                    </div>
                  </div>

                  <p className="text-emerald-50/80 mb-10 text-lg leading-relaxed font-medium">
                    Are you a creator, artisan, farmer, or manufacturer with a
                    unique or meaningful product? We welcome individuals and
                    businesses who want to reach more customers and build their
                    brand through our platform.
                  </p>

                  {/* Inner Grid for Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-lime-400" /> Who Can Join
                      </h4>
                      <ul className="text-sm text-emerald-100/80 space-y-3 font-medium">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-1.5 shrink-0"></div>{" "}
                          Artisans & Handicraft Creators
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-1.5 shrink-0"></div>{" "}
                          Women Entrepreneurs & SHGs
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-1.5 shrink-0"></div>{" "}
                          Farmers & Natural Product Growers
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-1.5 shrink-0"></div>{" "}
                          Sustainable Product Innovators
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-1.5 shrink-0"></div>{" "}
                          Small Mfgs with Unique Offerings
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors flex flex-col justify-between">
                      <div>
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-lime-400" /> What
                          We Offer
                        </h4>
                        <ul className="text-sm text-emerald-100/80 space-y-3 font-medium mb-6">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-1.5 shrink-0"></div>{" "}
                            Access to a growing customer base
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-1.5 shrink-0"></div>{" "}
                            Product visibility & branding support
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-1.5 shrink-0"></div>{" "}
                            Transparent & fair collaboration
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-1.5 shrink-0"></div>{" "}
                            Opportunity to scale your business
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bottom CTA Area */}
                  <div className="mt-auto flex flex-col lg:flex-row items-center justify-between gap-6 p-6 bg-black/20 rounded-2xl border border-white/5">
                    <div className="flex-1">
                      <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-lime-400" /> How to Get
                        Started
                      </h4>
                      <p className="text-emerald-100/70 text-sm font-medium">
                        Share your product information, photos/samples,
                        location, and contact details.{" "}
                        <strong className="text-lime-300">
                          Our team will review and connect.
                        </strong>
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                      <button className="px-6 py-3.5 rounded-full bg-lime-400 text-emerald-950 font-bold hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.3)] transition-all duration-300 text-sm w-full sm:w-auto">
                        Submit Details
                      </button>
                      <button className="px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-colors text-sm w-full sm:w-auto">
                        Become a Partner
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* OUR VISION */}
          <section className="relative z-10 pt-4 pb-8 scroll-mt-24">
            <div className="relative bg-gradient-to-br from-emerald-900 to-green-950 backdrop-blur-2xl border border-emerald-700/50 rounded-[2.5rem] p-10 md:p-16 shadow-2xl overflow-hidden group text-center flex flex-col items-center">
              {/* Ambient center glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-500/15 rounded-full blur-[100px] pointer-events-none transition-all duration-700 group-hover:bg-lime-500/25"></div>

              <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-full text-lime-400 mb-6 border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Telescope className="w-10 h-10" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white font-['var(--font-outfit)'] tracking-tight mb-8">
                  OUR VISION
                </h2>
                <p className="text-xl md:text-3xl text-emerald-50/90 leading-relaxed font-light font-['var(--font-outfit)'] tracking-wide">
                  "To be the most trusted and impactful platform that connects
                  local creators with global consumers, building a sustainable
                  ecosystem where every purchase empowers a community."
                </p>
                <div className="mt-10 w-24 h-1.5 bg-gradient-to-r from-transparent via-lime-500 to-transparent rounded-full opacity-70"></div>
              </div>
            </div>
          </section>
        </div>
      </main>{" "}
      {/* <-- MAIN CLOSES HERE. SEO PERFECT. */}
      {/* FOOTER - Now outside main! */}
      <footer className="relative z-10 bg-emerald-950 text-emerald-100/70 pt-20 pb-8 border-t-4 border-lime-500 mt-12 w-full">
        {/* Upgraded Asymmetric 12-Column Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Column 1: Brand (Takes up 4/12 spaces on desktop) */}
          <div className="flex flex-col gap-6 md:col-span-12 lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg border border-white/20">
                G
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-['var(--font-outfit)']">
                Glow Global Mart
              </span>
            </div>
            <p className="text-sm font-medium leading-relaxed pr-4">
              Empowering communities through meaningful, responsible, and
              sustainable shopping. Connecting artisans, farmers, and innovators
              to the world.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                className="p-2.5 bg-white/5 rounded-full hover:bg-lime-500 hover:text-emerald-950 transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="p-2.5 bg-white/5 rounded-full hover:bg-lime-500 hover:text-emerald-950 transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="p-2.5 bg-white/5 rounded-full hover:bg-lime-500 hover:text-emerald-950 transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="p-2.5 bg-white/5 rounded-full hover:bg-lime-500 hover:text-emerald-950 transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Takes up 2/12 spaces) */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a
                  href="#about"
                  className="hover:text-lime-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-500 group-hover:text-lime-400 transition-colors group-hover:translate-x-1" />{" "}
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  className="hover:text-lime-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-500 group-hover:text-lime-400 transition-colors group-hover:translate-x-1" />{" "}
                  Shop Collections
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-lime-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-500 group-hover:text-lime-400 transition-colors group-hover:translate-x-1" />{" "}
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#farmer-market"
                  className="hover:text-lime-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-500 group-hover:text-lime-400 transition-colors group-hover:translate-x-1" />{" "}
                  Farmer Market
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Initiatives (Takes up 2/12 spaces) */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">
              Initiatives
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-500 group-hover:text-lime-400 transition-colors group-hover:translate-x-1" />{" "}
                  Second Life (Eco)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-500 group-hover:text-lime-400 transition-colors group-hover:translate-x-1" />{" "}
                  ODOP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-500 group-hover:text-lime-400 transition-colors group-hover:translate-x-1" />{" "}
                  Corporate Gifting
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-lime-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-500 group-hover:text-lime-400 transition-colors group-hover:translate-x-1" />{" "}
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact (Takes up 4/12 spaces on desktop to fit the address beautifully) */}
          <div className="md:col-span-12 lg:col-span-4 lg:pl-4">
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <MapPin className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[13px] text-emerald-100/90">
                  A-39/1st floor, Hal Raghavendra colony, opposite SBI lane near
                  vishal mega mart, Suchitra, Raghavendra Colony, Quthbullapur,
                  Hyderabad, Telangana 500067
                  <br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3 hover:text-lime-400 transition-colors cursor-pointer pt-2">
                <Mail className="w-4 h-4 text-lime-400 shrink-0" />
                <span>gowthami@glowglobalmart.com</span>
              </li>
              <li className="flex items-center gap-3 hover:text-lime-400 transition-colors cursor-pointer">
                <Phone className="w-4 h-4 text-lime-400 shrink-0" />
                <span>+91 - 99634 20226 | +91 - 88863 08184</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-emerald-800/50 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-emerald-400/60">
          <p>© 2026 Glow Global Mart. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-lime-400 transition-colors">
              Privacy Policy
            </a>
            <div className="w-1 h-1 bg-emerald-800 rounded-full"></div>
            <a href="#" className="hover:text-lime-400 transition-colors">
              Terms of Service
            </a>
            <div className="w-1 h-1 bg-emerald-800 rounded-full"></div>
            <a href="#" className="hover:text-lime-400 transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </footer>
    </> /* <-- INVISIBLE FRAGMENT CLOSES HERE */
  );
}
