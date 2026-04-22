import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 selection:bg-amber-500/30">
      {/* Ambient Background Glowing Effects representing a "Global Network" */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none animate-pulse duration-1000"></div>
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none animate-pulse duration-1000"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-4xl w-full relative z-10 flex flex-col items-center">
        {/* Logo Section with Dynamic Glow */}
        <div className="flex justify-center mb-10">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 group cursor-default">
            {/* The "Glow" behind the logo when hovered */}
            <div className="absolute inset-0 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/25 group-hover:scale-110 transition-all duration-700 ease-in-out"></div>
            <Image
              src="/ggm.png"
              alt="Glow Global Mart Logo"
              fill
              sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
              className="object-contain drop-shadow-[0_0_25px_rgba(251,191,36,0.15)] transform transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Coming Soon Tag & Main Headline */}
        <div className="text-center mb-12 space-y-6">
          <div className="inline-block px-5 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-[0_0_15px_rgba(251,191,36,0.2)]">
            Platform Coming Soon
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
            Your Gateway to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 drop-shadow-sm">
              Global Shopping
            </span>
          </h1>
        </div>

        {/* Core Content Box (Glassmorphism UI) */}
        <div className="bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl shadow-black/50 text-center md:text-left transition-all hover:bg-slate-800/40 hover:border-slate-600/50 duration-500">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 font-light">
            <strong className="text-white font-semibold">
              Glow Global Mart
            </strong>{" "}
            is a dynamic online marketplace designed to bring quality products
            from across the world to your doorstep. Built on the idea of{" "}
            <em className="text-amber-100/90 not-italic font-medium">
              “global access with a local touch,”
            </em>{" "}
            we connect customers with trusted suppliers, trending products, and
            everyday essentials—all in one seamless platform.
          </p>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 border-t border-slate-800/80 pt-8">
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-amber-500/40 hover:bg-slate-800/60 transition-all duration-300 group">
              <h3 className="text-amber-400 font-bold text-lg mb-2 group-hover:text-amber-300 transition-colors">
                Curated Quality
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Committed to delivering reliability, affordability, and
                excellence from healthcare to lifestyle products.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-amber-500/40 hover:bg-slate-800/60 transition-all duration-300 group">
              <h3 className="text-amber-400 font-bold text-lg mb-2 group-hover:text-amber-300 transition-colors">
                Global Access
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering individuals and businesses to discover, shop, and
                grow in a truly connected global marketplace.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-amber-500/40 hover:bg-slate-800/60 transition-all duration-300 group">
              <h3 className="text-amber-400 font-bold text-lg mb-2 group-hover:text-amber-300 transition-colors">
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
          <p className="text-slate-600 text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Glow Global Mart. All rights
            reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
