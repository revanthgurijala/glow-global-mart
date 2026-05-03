import Image from "next/image";
import {
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
} from "lucide-react";

export default function Home() {
  return (
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

          {/* Action Buttons (Search, Cart, Login) */}
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

            <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 px-5 py-2.5 rounded-full text-sm font-medium text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - EXACT FIT */}
      <section className="relative w-full mt-[112px] min-h-[calc(100vh-112px)] overflow-hidden flex items-center group">
        {/* Background Image (High-res user selected handmade craft image) */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1766074922730-a9011b51b394?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"></div>

        {/* Gradient Overlay (Dark on the left, completely transparent on the right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-transparent w-full md:w-3/4"></div>
        {/* Fallback overlay for mobile screens */}
        <div className="absolute inset-0 bg-emerald-950/50 md:hidden"></div>

        {/* Main Content Container - Centered vertically, no extreme top padding needed now */}
        <div className="relative z-10 px-8 md:px-16 lg:px-24 w-full flex flex-col justify-center py-12">
          {/* Left Side: Text Content */}
          <div className="flex flex-col items-start text-left space-y-6 w-full lg:w-1/2">
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

          {/* Bottom Right: Action Buttons positioned side-by-side */}
          <div className="absolute bottom-10 right-8 md:bottom-12 md:right-16 flex flex-row items-center gap-4">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10 flex flex-col space-y-24">
        {/* ABOUT & INSPIRATION */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/70 backdrop-blur-xl border border-green-200/50 rounded-3xl p-8 hover:bg-white/90 hover:border-emerald-300 transition-all duration-500 group shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2 font-['var(--font-outfit)']">
              <span className="text-2xl">🌿</span> ABOUT US
            </h2>
            <p className="text-green-800 mb-6 leading-relaxed">
              Glow Global Mart is a platform built to bridge the gap between
              local creators and global consumers. We carefully identify,
              source, and curate products through the{" "}
              <strong className="text-green-950">
                One District One Product (ODOP)
              </strong>{" "}
              concept — showcasing unique regional specialties and hidden
              talents.
            </p>
            <h3 className="text-green-950 font-bold mb-4">Our Approach</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-green-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                Sourcing from verified artisans, farmers, and producers
              </li>
              <li className="flex items-start gap-3 text-green-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                Promoting sustainable and ethical practices
              </li>
              <li className="flex items-start gap-3 text-green-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                Ensuring quality through careful curation
              </li>
              <li className="flex items-start gap-3 text-green-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                Enabling market access for rural and small-scale creators
              </li>
            </ul>
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
              <p className="text-emerald-800 font-semibold">
                👉 Every purchase supports real people, real communities, and
                real impact.
              </p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-green-200/50 rounded-3xl p-8 hover:bg-white/90 hover:border-lime-300 transition-all duration-500 group shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-lime-700 mb-6 flex items-center gap-2 font-['var(--font-outfit)']">
              <span className="text-2xl">🌱</span> OUR INSPIRATION
            </h2>
            <blockquote className="text-2xl text-green-900 italic font-light leading-snug mb-6 border-l-4 border-lime-500 pl-6 py-2 bg-gradient-to-r from-lime-50/50 to-transparent">
              &quot;The soul of India lives in its villages.&quot;
              <footer className="text-base text-lime-700 font-bold mt-4">
                — Mahatma Gandhi
              </footer>
            </blockquote>
            <p className="text-green-800 text-lg leading-relaxed">
              This philosophy inspires us to bring rural innovation and
              traditional excellence to modern consumers.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        {/* SERVICES */}
        <section id="services" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-950 font-['var(--font-outfit)'] mb-4">
              🛠 SERVICES{" "}
              <span className="text-green-700 text-2xl font-medium">
                (What We Enable)
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/70 backdrop-blur-lg border border-green-200/50 rounded-2xl p-8 hover:-translate-y-2 hover:bg-white hover:shadow-xl transition-all duration-300 group shadow-sm">
              <Gift className="w-10 h-10 text-emerald-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-green-950 mb-4">
                🎁 Corporate Gifting Solutions
              </h3>
              <p className="text-green-800 mb-6">
                We design and deliver customized gifting solutions by sourcing
                unique, meaningful products that align with your brand values.
              </p>
              <p className="text-emerald-700 text-sm font-semibold">
                👉 Bulk sourcing | Custom branding | End-to-end support
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-lg border-2 border-emerald-400/30 rounded-2xl p-8 hover:-translate-y-2 hover:bg-white hover:shadow-xl transition-all duration-300 group shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <Palette className="w-10 h-10 text-emerald-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-green-950 mb-4">
                🎨 Customized Art & Product Solutions (Our USP)
              </h3>
              <p className="text-green-800 mb-6">
                Have a unique idea? We coordinate with skilled creators and
                manufacturers to bring your vision to life.
              </p>
              <p className="text-emerald-700 text-sm font-semibold">
                👉 Personalized gifts | Custom designs | Exclusive creations
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-lg border border-green-200/50 rounded-2xl p-8 hover:-translate-y-2 hover:bg-white hover:shadow-xl transition-all duration-300 group shadow-sm">
              <Search className="w-10 h-10 text-emerald-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-green-950 mb-4">
                🤝 Sourcing & Product Development Support
              </h3>
              <p className="text-green-800 mb-6">
                We help businesses and individuals find the right products from
                the right sources.
              </p>
              <p className="text-emerald-700 text-sm font-semibold">
                👉 Vendor sourcing | Product customization | Quality
                coordination
              </p>
            </div>
          </div>
        </section>

        {/* SHOP */}
        <section
          id="shop"
          className="bg-white/80 backdrop-blur-xl border border-green-200 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400"></div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-950 font-['var(--font-outfit)'] mb-4">
              🛍 SHOP{" "}
              <span className="text-green-700 text-2xl font-medium">
                (What You Can Buy)
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="col-span-1 lg:col-span-2 bg-green-50 rounded-2xl p-8 border border-green-200 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Gem className="w-8 h-8 text-amber-500" />
                <h3 className="text-2xl font-bold text-green-950">
                  💍 One Gram Jewellery
                </h3>
              </div>
              <p className="text-green-800 leading-relaxed space-y-4">
                <span className="block mb-2">
                  At Glow Global Mart, our One Gram Jewellery collection is
                  carefully curated from trusted creators, bringing you designs
                  that reflect timeless sophistication and modern refinement.
                  Each piece is selected for its craftsmanship, finish, and
                  ability to elevate your everyday style.
                </span>
                <span className="block mb-2">
                  Designed to complement every occasion, these pieces offer the
                  look of luxury with effortless grace, making fine aesthetics
                  accessible without compromise.
                </span>
                <span className="block text-emerald-700 font-bold italic">
                  Because true elegance is not just worn — it is experienced.
                </span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md hover:border-green-300 transition-all">
              <h3 className="text-lg font-bold text-green-950 mb-2 flex items-center gap-2">
                🧺 Handcrafted & ODOP Products
              </h3>
              <p className="text-green-700">
                Authentic handmade products curated from local artisans across
                different districts.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md hover:border-green-300 transition-all">
              <h3 className="text-lg font-bold text-green-950 mb-2 flex items-center gap-2">
                🎁 Corporate Gift Collections
              </h3>
              <p className="text-green-700">
                Ready-to-buy premium gifting options suitable for businesses and
                occasions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md hover:border-green-300 transition-all lg:col-span-2">
              <h3 className="text-lg font-bold text-green-950 mb-2 flex items-center gap-2">
                🎨 Customized Art Products
              </h3>
              <p className="text-green-700">
                Pre-designed and made-to-order creative pieces crafted by
                skilled artists.
              </p>
            </div>
          </div>
        </section>

        {/* SECONDLIFE */}
        {/* SECONDLIFE */}
        <section className="relative overflow-hidden rounded-3xl border border-teal-200 bg-teal-50/80 backdrop-blur-xl p-8 md:p-12 shadow-lg group hover:bg-teal-50 transition-all duration-700">
          <div className="absolute top-0 right-0 p-24 bg-teal-200/30 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 font-['var(--font-outfit)'] mb-4 flex items-center gap-3">
              <Recycle className="w-10 h-10" /> ♻️ SECONDLIFE – SUSTAINABLE
              PRODUCTS
            </h2>
            <p className="text-teal-900 text-lg mb-10 font-medium">
              Turning Waste into Value. Creating a Better Future. We collaborate
              with sustainable product creators and manufacturers who transform
              waste materials into useful, eco-friendly products.
            </p>

            <h3 className="text-xl font-bold text-teal-950 mb-6">
              🌍 What We Bring to You
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/80 p-6 rounded-2xl border border-teal-100 shadow-sm">
                <h4 className="text-teal-800 font-bold mb-3">
                  🧵 Recycled Textiles
                </h4>
                <p className="text-teal-700 text-sm">
                  Products made from recycled materials like plastic bottles and
                  fabric waste — sourced from responsible producers.
                </p>
              </div>
              <div className="bg-white/80 p-6 rounded-2xl border border-teal-100 shadow-sm">
                <h4 className="text-teal-800 font-bold mb-3">
                  📦 Eco-Friendly Packaging
                </h4>
                <p className="text-teal-700 text-sm">
                  Biodegradable and compostable packaging solutions created from
                  natural resources like agricultural waste.
                </p>
              </div>
              <div className="bg-white/80 p-6 rounded-2xl border border-teal-100 shadow-sm">
                <h4 className="text-teal-800 font-bold mb-3">
                  🌱 Green Lifestyle Products
                </h4>
                <p className="text-teal-700 text-sm">
                  Carefully selected eco-friendly products designed for
                  sustainable living.
                </p>
              </div>
            </div>
            <div className="inline-block bg-white px-6 py-3 rounded-xl border border-teal-200 shadow-sm">
              <p className="text-teal-800 font-bold">
                👉 We identify, verify, and bring these innovations to you,
                making sustainable choices easily accessible.
              </p>
            </div>
          </div>
        </section>

        {/* FARMER MARKET */}
        <section
          id="farmer-market"
          className="bg-lime-50/80 backdrop-blur-xl border border-lime-200 rounded-3xl p-8 md:p-12 hover:bg-lime-100/50 transition-all duration-500 shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lime-800 font-['var(--font-outfit)'] mb-4 flex items-center gap-3">
            <Tractor className="w-10 h-10 text-lime-600" /> 🌾 FARMER MARKET
            (DIRECT FROM SOURCE)
          </h2>
          <h3 className="text-2xl font-bold text-lime-950 mb-6">
            Transparency You Can Trust
          </h3>
          <p className="text-lime-900 text-lg mb-8">
            Fresh and natural products sourced directly from farmers with full
            transparency. We connect you directly with farmers by sourcing
            products with complete traceability:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-lime-200 text-center shadow-sm">
              <Globe2 className="w-8 h-8 text-lime-600 mb-3" />
              <span className="text-lime-900 font-semibold">
                Farm origin details
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-lime-200 text-center shadow-sm">
              <Sprout className="w-8 h-8 text-lime-600 mb-3" />
              <span className="text-lime-900 font-semibold">
                Cultivation practices
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-lime-200 text-center shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-lime-600 mb-3" />
              <span className="text-lime-900 font-semibold">
                Production insights
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-lime-200 text-center shadow-sm">
              <Search className="w-8 h-8 text-lime-600 mb-3" />
              <span className="text-lime-900 font-semibold">
                Supply transparency
              </span>
            </div>
          </div>
          <div className="p-4 bg-white border border-lime-300 rounded-xl text-center shadow-sm">
            <p className="text-lime-800 font-bold">
              👉 In selected cases, we also facilitate crop testing information
              to ensure quality and authenticity.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE US & PARTNER */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/70 backdrop-blur-xl border border-green-200/50 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-green-950 mb-6 font-['var(--font-outfit)']">
              ⭐ WHY CHOOSE GLOW GLOBAL MART
            </h2>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3 text-green-800">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />{" "}
                Carefully curated product selection
              </li>
              <li className="flex items-start gap-3 text-green-800">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />{" "}
                Direct sourcing from authentic producers
              </li>
              <li className="flex items-start gap-3 text-green-800">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />{" "}
                Support for artisans, farmers & small businesses
              </li>
              <li className="flex items-start gap-3 text-green-800">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />{" "}
                Focus on sustainability and ethical practices
              </li>
              <li className="flex items-start gap-3 text-green-800">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />{" "}
                Transparent and trustworthy platform
              </li>
            </ul>

            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-800 mb-3">
                A Platform in Progress, Built with Purpose
              </h3>
              <p className="text-emerald-900 mb-4 font-medium">
                Glow Global Mart is an evolving platform focused on:
              </p>
              <ul className="list-disc list-inside text-emerald-700 space-y-2 mb-4">
                <li>Connecting local talent to wider markets</li>
                <li>Curating meaningful and sustainable products</li>
                <li>
                  Creating transparent and responsible shopping experiences
                </li>
              </ul>
              <p className="text-emerald-800 font-bold">
                👉 We believe real impact grows with time, trust, and community.
              </p>
            </div>
          </div>

          <div
            id="contact"
            className="bg-gradient-to-br from-emerald-600 to-green-800 backdrop-blur-xl border border-green-700 rounded-3xl p-8 shadow-xl flex flex-col"
          >
            <h2 className="text-2xl font-bold text-white mb-2 font-['var(--font-outfit)']">
              🤝 Partner With Us / Join Our Platform
            </h2>
            <h3 className="text-xl text-emerald-200 font-bold mb-6">
              Have a Unique Product? Let&apos;s Grow Together.
            </h3>
            <p className="text-green-50 mb-8">
              Are you a creator, artisan, farmer, or manufacturer with a unique
              or meaningful product? We welcome individuals and businesses who
              want to reach more customers and build their brand through our
              platform.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 flex-grow">
              <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  🌟 Who Can Join
                </h4>
                <ul className="text-sm text-green-100 space-y-2 font-medium">
                  <li>• Artisans & Handicraft Creators</li>
                  <li>• Women Entrepreneurs & SHGs</li>
                  <li>• Farmers & Natural Product Growers</li>
                  <li>• Sustainable Product Innovators</li>
                  <li>• Small Mfgs with Unique Offerings</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  🚀 What We Offer You
                </h4>
                <ul className="text-sm text-green-100 space-y-2 font-medium">
                  <li>• Access to a growing customer base</li>
                  <li>• Product visibility & branding support</li>
                  <li>• Transparent and fair collaboration</li>
                  <li>• Opportunity to scale your business</li>
                </ul>
              </div>
            </div>

            <div className="bg-black/20 p-6 rounded-2xl border border-white/10 mb-8">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                📩 How to Get Started
              </h4>
              <p className="text-green-100 text-sm mb-3">
                Simply share your details with us: Product information,
                Photos/samples, Location & background, Contact details.
              </p>
              <p className="text-emerald-300 text-sm font-bold">
                👉 Our team will review and connect with you.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <p className="text-white font-bold flex items-center justify-center gap-2">
                💬 Call to Action
              </p>
              <p className="text-green-100 text-sm mb-4">
                Bring your product to the right audience. Grow with Glow Global
                Mart.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 rounded-full bg-white text-green-900 font-bold hover:bg-green-50 hover:shadow-lg transition-all">
                  🔘 Submit Your Details
                </button>
                <button className="px-6 py-3 rounded-full bg-transparent border-2 border-emerald-300 text-emerald-100 font-bold hover:bg-white/10 transition-colors">
                  🔘 Become a Partner
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* VISION, BLOG & CTA */}
        <section className="text-center space-y-12 pb-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-green-950 font-['var(--font-outfit)']">
              🌍 OUR VISION
            </h2>
            <p className="text-xl text-green-800 leading-relaxed font-medium">
              To become a globally trusted platform that connects conscious
              consumers with meaningful products, while creating sustainable
              impact and empowering communities.
            </p>
          </div>

          <div
            id="blog"
            className="max-w-2xl mx-auto bg-white backdrop-blur-md border border-green-200 p-8 rounded-3xl shadow-md"
          >
            <h2 className="text-2xl font-bold text-green-950 mb-4">
              Blog: Stories That Matter
            </h2>
            <p className="text-green-800 mb-2 font-medium">
              <span className="text-emerald-600 font-bold">👉</span> Go beyond
              products — discover the people, ideas, and inspiration behind
              every creation.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 p-[3px] rounded-3xl max-w-3xl mx-auto shadow-xl">
            <div className="bg-white rounded-[22px] p-10 backdrop-blur-xl">
              <h2 className="text-2xl md:text-3xl font-black text-green-950 mb-4">
                🚀 CALL TO ACTION
              </h2>
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 font-bold">
                Shop with Purpose. Empower Communities. Choose Glow Global Mart.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-green-200 pt-8 pb-4 text-center">
          <p className="text-green-700 text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
            &copy; {new Date().getFullYear()} Glow Global Mart. All rights
            reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
