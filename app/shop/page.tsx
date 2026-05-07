import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "next-sanity";
import ShopClient from "@/components/ShopClient"; // Import our new interactive component!

export const dynamic = "force-dynamic";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
});

export default async function Shop() {
  // Fetch ALL products from Sanity on the server
  const products = await client.fetch(`*[_type == "product"]`);

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
            <h1 className="text-5xl md:text-6xl font-black font-['var(--font-outfit)'] mb-6 text-white tracking-tight drop-shadow-xl">
              Shop Collections
            </h1>
            <p className="text-emerald-100/90 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
              Explore our carefully sourced products. Every purchase supports
              artisans, local creators, and sustainable practices.
            </p>
          </div>
        </div>

        {/* The Interactive Shop Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-8 pb-20">
          {/* We pass the fetched products directly into our Client Component */}
          <ShopClient products={products} />
        </div>
      </main>
      <Footer />
    </>
  );
}
