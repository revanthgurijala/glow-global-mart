import Image from "next/image";
import { Sparkles, Globe2, HeartHandshake } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 selection:bg-amber-500/30">
      {/* Ambient Background Glowing Effects representing a "Global Network" */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none animate-pulse duration-1000"></div>
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none animate-pulse duration-1000"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-5xl w-full relative z-10 flex flex-col items-center">
        {/* Logo Section with Dynamic Glow */}
        <div className="flex justify-center mb-10">
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 group cursor-default">
            {/* The "Glow" behind the logo when hovered */}
            <div className="absolute inset-0 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/25 group-hover:scale-110 transition-all duration-700 ease-in-out"></div>
            <Image
              src="/ggm.png"
              alt="Glow Global Mart Logo"
              fill
              sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 288px"
              className="object-contain drop-shadow-[0_0_25px_rgba(251,191,36,0.15)] transform transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Coming Soon Tag & Main Headline */}
        <div className="text-center mb-14 space-y-6 px-2">
          <div className="inline-block px-5 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-[0_0_15px_rgba(251,191,36,0.2)]">
            Platform Coming Soon
          </div>
          {/* Applied Stylish Font using the CSS variable defined in layout */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight font-['var(--font-outfit)']">
            Your Gateway to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 drop-shadow-sm">
              Global Shopping
            </span>
          </h1>
        </div>

        {/* Core Content Box (Glassmorphism UI) */}
        <div className="bg-slate-900/50 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/50 text-center sm:text-left transition-all hover:bg-slate-800/40 hover:border-slate-600/50 duration-500 w-full">
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-10 font-light text-center">
            <strong className="text-white font-semibold font-['var(--font-outfit)']">
              Glow Global Mart
            </strong>{" "}
            is a dynamic online marketplace designed to bring quality products
            from across the world to your doorstep. Built on the idea of,{" "}
            <em className="text-amber-100/90 not-italic font-medium">
              “Global Access with a local touch”. 
            </em>{" "}
            We connect customers with trusted suppliers, trending products, and
            everyday essentials—all in one seamless platform.
          </p>

          {/* Feature Highlights Grid - Improved responsiveness for tablets (sm:grid-cols-2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 border-t border-slate-800/80 pt-10">
            {/* Feature 1 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-amber-500/40 hover:bg-slate-800/60 transition-all duration-300 group flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="p-3 bg-amber-500/10 rounded-xl mb-5 group-hover:bg-amber-500/20 transition-colors">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-amber-400 font-bold text-lg sm:text-xl mb-3 group-hover:text-amber-300 transition-colors font-['var(--font-outfit)']">
                Curated Quality
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Committed to delivering reliability, affordability, and
                excellence from healthcare to lifestyle products.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-amber-500/40 hover:bg-slate-800/60 transition-all duration-300 group flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="p-3 bg-blue-500/10 rounded-xl mb-5 group-hover:bg-blue-500/20 transition-colors">
                <Globe2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-blue-400 font-bold text-lg sm:text-xl mb-3 group-hover:text-blue-300 transition-colors font-['var(--font-outfit)']">
                Global Access
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering individuals and businesses to discover, shop, and
                grow in a truly connected global marketplace.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-amber-500/40 hover:bg-slate-800/60 transition-all duration-300 group flex flex-col items-center sm:items-start text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <div className="p-3 bg-rose-500/10 rounded-xl mb-5 group-hover:bg-rose-500/20 transition-colors">
                <HeartHandshake className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="text-rose-400 font-bold text-lg sm:text-xl mb-3 group-hover:text-rose-300 transition-colors font-['var(--font-outfit)']">
                Local Touch
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Shopping should be more than a transaction. Experience value,
                convenience, and absolute confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Glow Global Mart. All rights
            reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
