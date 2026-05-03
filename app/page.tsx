import Image from "next/image";
import {
  ShoppingBag,
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
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30 overflow-x-hidden">
      {/* Background Ambient Glowing Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none animate-pulse duration-1000 z-0"></div>
      <div
        className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/10 blur-[120px] pointer-events-none animate-pulse duration-1000 z-0"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Navigation (Glassmorphism Sticky Header) */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/10 flex flex-col">
        {/* Topbar (Thin strip) */}
        <div className="hidden md:flex bg-amber-500/10 border-b border-white/5 py-1.5 px-4 justify-center items-center gap-8 text-xs font-medium text-amber-200">
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" /> Empowering communities
          </span>
          <span className="flex items-center gap-1.5">
            <Leaf className="w-3.5 h-3.5" /> Sustainable Living
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> Authentic Products
          </span>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between w-full">
          {/* Logo Section */}
          <div className="flex items-center gap-3 shrink-0">
            <Image
              src="/ggm.png"
              alt="Glow Global Mart Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold text-white tracking-wide font-['var(--font-outfit)'] hidden sm:block">
              Glow Global Mart
            </span>
          </div>

          {/* Main Links (Center) */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Home
            </a>
            <a href="#shop" className="hover:text-amber-400 transition-colors">
              Shop
            </a>
            <a
              href="#services"
              className="hover:text-amber-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#farmer-market"
              className="hover:text-amber-400 transition-colors"
            >
              Farmer Market
            </a>
            <a href="#about" className="hover:text-amber-400 transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="hover:text-amber-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Action Buttons (Search, Cart, Login) */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Search Bar */}
            <div className="relative group hidden md:block">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-4 pr-10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all w-48 xl:w-64"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
            </div>

            {/* Cart Icon */}
            <button className="relative p-2 text-slate-300 hover:text-amber-400 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-amber-500 text-slate-900 text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Login Button */}
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-white transition-all">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative z-10 flex flex-col space-y-24">
        {/* HERO SECTION */}
        <section className="text-center space-y-8 py-10">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight font-['var(--font-outfit)']">
            Your Gateway to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 drop-shadow-sm">
              Meaningful & Responsible Shopping
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            At Glow Global Mart, we are a curated marketplace that connects
            conscious customers with authentic, high-quality products sourced
            from artisans, farmers, and trusted manufacturers.{" "}
            <br className="hidden md:block mt-2" />
            We don&apos;t just sell products — we bring stories, craftsmanship,
            and sustainability together in one place.
          </p>
          <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl max-w-xl mx-auto shadow-lg">
            <p className="text-amber-200 italic font-medium text-lg">
              &quot;When you support small, you empower dreams&quot;
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all duration-300 w-full sm:w-auto">
              🔘 Shop Now
            </button>
            <button className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              🔘 Explore Services
            </button>
          </div>
        </section>

        {/* ABOUT & INSPIRATION */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/60 hover:border-amber-500/30 transition-all duration-500 group shadow-xl">
            <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-2 font-['var(--font-outfit)']">
              <span className="text-2xl">🌿</span> ABOUT US
            </h2>
            <p className="text-slate-300 mb-6">
              Glow Global Mart is a platform built to bridge the gap between
              local creators and global consumers. We carefully identify,
              source, and curate products through the{" "}
              <strong className="text-white">
                One District One Product (ODOP)
              </strong>{" "}
              concept — showcasing unique regional specialties and hidden
              talents.
            </p>
            <h3 className="text-white font-semibold mb-4">Our Approach</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />{" "}
                Sourcing from verified artisans, farmers, and producers
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />{" "}
                Promoting sustainable and ethical practices
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />{" "}
                Ensuring quality through careful curation
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />{" "}
                Enabling market access for rural and small-scale creators
              </li>
            </ul>
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <p className="text-amber-300 font-medium">
                👉 Every purchase supports real people, real communities, and
                real impact.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/60 hover:border-emerald-500/30 transition-all duration-500 group shadow-xl flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2 font-['var(--font-outfit)']">
              <span className="text-2xl">🌱</span> OUR INSPIRATION
            </h2>
            <blockquote className="text-2xl text-slate-200 italic font-light leading-snug mb-6 border-l-4 border-emerald-500 pl-6 py-2">
              &quot;The soul of India lives in its villages.&quot;
              <footer className="text-base text-emerald-400 font-medium mt-4">
                — Mahatma Gandhi
              </footer>
            </blockquote>
            <p className="text-slate-300 text-lg">
              This philosophy inspires us to bring rural innovation and
              traditional excellence to modern consumers.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['var(--font-outfit)'] mb-4">
              🛠 SERVICES{" "}
              <span className="text-slate-400 text-2xl font-medium">
                (What We Enable)
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 group">
              <Gift className="w-10 h-10 text-rose-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">
                🎁 Corporate Gifting Solutions
              </h3>
              <p className="text-slate-400 mb-6">
                We design and deliver customized gifting solutions by sourcing
                unique, meaningful products that align with your brand values.
              </p>
              <p className="text-rose-300 text-sm font-medium">
                👉 Bulk sourcing | Custom branding | End-to-end support
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 group shadow-[0_0_30px_rgba(251,191,36,0.1)] border-amber-500/20">
              <Palette className="w-10 h-10 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">
                🎨 Customized Art & Product Solutions (Our USP)
              </h3>
              <p className="text-slate-400 mb-6">
                Have a unique idea? We coordinate with skilled creators and
                manufacturers to bring your vision to life.
              </p>
              <p className="text-amber-300 text-sm font-medium">
                👉 Personalized gifts | Custom designs | Exclusive creations
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 group">
              <Search className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">
                🤝 Sourcing & Product Development Support
              </h3>
              <p className="text-slate-400 mb-6">
                We help businesses and individuals find the right products from
                the right sources.
              </p>
              <p className="text-blue-300 text-sm font-medium">
                👉 Vendor sourcing | Product customization | Quality
                coordination
              </p>
            </div>
          </div>
        </section>

        {/* SHOP */}
        <section
          id="shop"
          className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['var(--font-outfit)'] mb-4">
              🛍 SHOP{" "}
              <span className="text-slate-400 text-2xl font-medium">
                (What You Can Buy)
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="col-span-1 lg:col-span-2 bg-black/20 rounded-2xl p-8 border border-white/5">
              <div className="flex items-center gap-4 mb-4">
                <Gem className="w-8 h-8 text-amber-400" />
                <h3 className="text-2xl font-bold text-white">
                  💍 One Gram Jewellery
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed space-y-4">
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
                <span className="block text-amber-200 font-medium italic">
                  Because true elegance is not just worn — it is experienced.
                </span>
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                🧺 Handcrafted & ODOP Products
              </h3>
              <p className="text-slate-400">
                Authentic handmade products curated from local artisans across
                different districts.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                🎁 Corporate Gift Collections
              </h3>
              <p className="text-slate-400">
                Ready-to-buy premium gifting options suitable for businesses and
                occasions.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all lg:col-span-2">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                🎨 Customized Art Products
              </h3>
              <p className="text-slate-400">
                Pre-designed and made-to-order creative pieces crafted by
                skilled artists.
              </p>
            </div>
          </div>
        </section>

        {/* SECONDLIFE */}
        <section className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-xl p-8 md:p-12 shadow-[0_0_50px_rgba(16,185,129,0.1)] group hover:bg-emerald-950/60 transition-all duration-700">
          <div className="absolute top-0 right-0 p-24 bg-emerald-500/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 font-['var(--font-outfit)'] mb-4 flex items-center gap-3">
              <Recycle className="w-10 h-10" /> ♻️ SECONDLIFE – SUSTAINABLE
              PRODUCTS
            </h2>
            <p className="text-emerald-100 text-lg mb-10 font-medium">
              Turning Waste into Value. Creating a Better Future. We collaborate
              with sustainable product creators and manufacturers who transform
              waste materials into useful, eco-friendly products.
            </p>

            <h3 className="text-xl font-bold text-white mb-6">
              🌍 What We Bring to You
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-emerald-900/40 p-6 rounded-2xl border border-emerald-500/20">
                <h4 className="text-emerald-300 font-bold mb-3">
                  🧵 Recycled Textiles
                </h4>
                <p className="text-slate-300 text-sm">
                  Products made from recycled materials like plastic bottles and
                  fabric waste — sourced from responsible producers.
                </p>
              </div>
              <div className="bg-emerald-900/40 p-6 rounded-2xl border border-emerald-500/20">
                <h4 className="text-emerald-300 font-bold mb-3">
                  📦 Eco-Friendly Packaging
                </h4>
                <p className="text-slate-300 text-sm">
                  Biodegradable and compostable packaging solutions created from
                  natural resources like agricultural waste.
                </p>
              </div>
              <div className="bg-emerald-900/40 p-6 rounded-2xl border border-emerald-500/20">
                <h4 className="text-emerald-300 font-bold mb-3">
                  🌱 Green Lifestyle Products
                </h4>
                <p className="text-slate-300 text-sm">
                  Carefully selected eco-friendly products designed for
                  sustainable living.
                </p>
              </div>
            </div>
            <div className="inline-block bg-emerald-500/20 px-6 py-3 rounded-xl border border-emerald-500/30">
              <p className="text-emerald-200 font-medium">
                👉 We identify, verify, and bring these innovations to you,
                making sustainable choices easily accessible.
              </p>
            </div>
          </div>
        </section>

        {/* FARMER MARKET */}
        <section
          id="farmer-market"
          className="bg-amber-950/40 backdrop-blur-xl border border-amber-700/30 rounded-3xl p-8 md:p-12 hover:bg-amber-950/60 transition-all duration-500 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500 font-['var(--font-outfit)'] mb-4 flex items-center gap-3">
            <Tractor className="w-10 h-10" /> 🌾 FARMER MARKET (DIRECT FROM
            SOURCE)
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-6">
            Transparency You Can Trust
          </h3>
          <p className="text-slate-300 text-lg mb-8">
            Fresh and natural products sourced directly from farmers with full
            transparency. We connect you directly with farmers by sourcing
            products with complete traceability:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col items-center justify-center p-6 bg-black/20 rounded-2xl border border-amber-500/10 text-center">
              <Globe2 className="w-8 h-8 text-amber-400 mb-3" />
              <span className="text-slate-200 font-medium">
                Farm origin details
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-black/20 rounded-2xl border border-amber-500/10 text-center">
              <Sprout className="w-8 h-8 text-amber-400 mb-3" />
              <span className="text-slate-200 font-medium">
                Cultivation practices
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-black/20 rounded-2xl border border-amber-500/10 text-center">
              <CheckCircle2 className="w-8 h-8 text-amber-400 mb-3" />
              <span className="text-slate-200 font-medium">
                Production insights
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-black/20 rounded-2xl border border-amber-500/10 text-center">
              <Search className="w-8 h-8 text-amber-400 mb-3" />
              <span className="text-slate-200 font-medium">
                Supply transparency
              </span>
            </div>
          </div>
          <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-center">
            <p className="text-amber-300 font-medium">
              👉 In selected cases, we also facilitate crop testing information
              to ensure quality and authenticity.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE US & PARTNER */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6 font-['var(--font-outfit)']">
              ⭐ WHY CHOOSE GLOW GLOBAL MART
            </h2>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />{" "}
                Carefully curated product selection
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />{" "}
                Direct sourcing from authentic producers
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />{" "}
                Support for artisans, farmers & small businesses
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />{" "}
                Focus on sustainability and ethical practices
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />{" "}
                Transparent and trustworthy platform
              </li>
            </ul>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-amber-400 mb-3">
                A Platform in Progress, Built with Purpose
              </h3>
              <p className="text-slate-300 mb-4">
                Glow Global Mart is an evolving platform focused on:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 mb-4">
                <li>Connecting local talent to wider markets</li>
                <li>Curating meaningful and sustainable products</li>
                <li>
                  Creating transparent and responsible shopping experiences
                </li>
              </ul>
              <p className="text-amber-200 font-medium">
                👉 We believe real impact grows with time, trust, and community.
              </p>
            </div>
          </div>

          <div
            id="contact"
            className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-8 shadow-xl flex flex-col"
          >
            <h2 className="text-2xl font-bold text-white mb-2 font-['var(--font-outfit)']">
              🤝 Partner With Us / Join Our Platform
            </h2>
            <h3 className="text-xl text-amber-300 font-medium mb-6">
              Have a Unique Product? Let&apos;s Grow Together.
            </h3>
            <p className="text-slate-200 mb-8">
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
                <ul className="text-sm text-slate-300 space-y-2">
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
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• Access to a growing customer base</li>
                  <li>• Product visibility & branding support</li>
                  <li>• Transparent and fair collaboration</li>
                  <li>• Opportunity to scale your business</li>
                </ul>
              </div>
            </div>

            <div className="bg-black/30 p-6 rounded-2xl border border-amber-500/20 mb-8">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                📩 How to Get Started
              </h4>
              <p className="text-slate-300 text-sm mb-3">
                Simply share your details with us: Product information,
                Photos/samples, Location & background, Contact details.
              </p>
              <p className="text-amber-400 text-sm font-medium">
                👉 Our team will review and connect with you.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <p className="text-white font-bold flex items-center justify-center gap-2">
                💬 Call to Action
              </p>
              <p className="text-amber-200 text-sm mb-4">
                Bring your product to the right audience. Grow with Glow Global
                Mart.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 rounded-full bg-amber-500 text-slate-900 font-bold hover:bg-amber-400 transition-colors">
                  🔘 Submit Your Details
                </button>
                <button className="px-6 py-3 rounded-full bg-transparent border border-amber-500 text-amber-500 font-bold hover:bg-amber-500/10 transition-colors">
                  🔘 Become a Partner
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* VISION, BLOG & CTA */}
        <section className="text-center space-y-12 pb-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white font-['var(--font-outfit)']">
              🌍 OUR VISION
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              To become a globally trusted platform that connects conscious
              consumers with meaningful products, while creating sustainable
              impact and empowering communities.
            </p>
          </div>

          <div
            id="blog"
            className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Blog: Stories That Matter
            </h2>
            <p className="text-slate-300 mb-2">
              <span className="text-amber-400 font-bold">👉</span> Go beyond
              products — discover the people, ideas, and inspiration behind
              every creation.
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 p-[2px] rounded-3xl max-w-3xl mx-auto">
            <div className="bg-slate-950 rounded-3xl p-10 backdrop-blur-xl">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                🚀 CALL TO ACTION
              </h2>
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 font-bold">
                Shop with Purpose. Empower Communities. Choose Glow Global Mart.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 pb-4 text-center">
          <p className="text-slate-500 text-sm font-medium tracking-wide flex items-center justify-center gap-2">
            &copy; {new Date().getFullYear()} Glow Global Mart. All rights
            reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
