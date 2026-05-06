import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Filter, ChevronDown, ShoppingBag, ShoppingCart, Search, Star } from "lucide-react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// 1. Connect to your Sanity Database
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false, // Set to false so it updates immediately when the client adds a product
});

// 2. Setup the tool that loads Sanity Images
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

// 3. Make the page async so it can fetch the database
export default async function Shop() {
  
  // 4. Fetch the products from Sanity!
  const products = await client.fetch(`*[_type == "product"]`);

  // 5. Change this to your actual WhatsApp Number (Include country code, no + sign)
  const myWhatsAppNumber = "918886308184"; 

  return (
    <>
      <main className="min-h-screen bg-[#f4f9f4] text-green-950 font-sans selection:bg-lime-300 selection:text-green-950 overflow-x-hidden">
        
        {/* Background Ambient Glowing Orbs */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-400/20 blur-[120px] pointer-events-none animate-pulse duration-1000 z-0"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-lime-400/20 blur-[120px] pointer-events-none animate-pulse duration-1000 z-0" style={{ animationDelay: "2s" }}></div>

        <Navbar />

        {/* PREMIUM HERO HEADER */}
        <div className="pt-32 pb-24 relative overflow-hidden bg-gradient-to-b from-emerald-950 to-emerald-900 border-b border-emerald-800/50 shadow-sm">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-black font-['var(--font-outfit)'] mb-6 text-white tracking-tight drop-shadow-xl">
              Shop Collections
            </h1>
            <p className="text-emerald-100/90 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
              Explore our carefully sourced products. Every purchase supports artisans, local creators, and sustainable practices.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-8 flex flex-col gap-16 pb-20">
          
          <div className="flex flex-col lg:flex-row gap-8 mt-4">
            {/* Sidebar / Filters */}
            <aside className="w-full lg:w-72 shrink-0">
              <div className="bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-28">
                <div className="flex items-center justify-between font-bold text-green-950 mb-6 pb-4 border-b border-green-100/50">
                  <span className="flex items-center gap-2 text-lg"><Filter className="w-5 h-5 text-emerald-600" /> Filters</span>
                </div>
                {/* Search */}
                <div className="relative mb-8">
                  <input type="text" placeholder="Search products..." className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all placeholder-emerald-700/50" />
                  <Search className="w-4 h-4 text-emerald-600 absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            </aside>

            {/* Product Grid Area */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                
                {/* 6. THIS IS WHERE WE LOOP THROUGH YOUR LIVE SANITY PRODUCTS */}
                {products.map((item: any) => (
                  <div key={item._id} className="bg-white/80 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(16,185,129,0.1)] hover:-translate-y-1.5 transition-all duration-500 group flex flex-col">
                    
                    {/* Live Image Area */}
                    <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-emerald-50 group-hover:scale-105 transition-transform duration-700">
                      
                      {/* Show the real uploaded image, or a placeholder if missing */}
                      {item.image ? (
                        <img src={urlFor(item.image).url()} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      ) : (
                        <ShoppingBag className="w-16 h-16 text-emerald-300/80" />
                      )}

                      {/* Floating Category Badge */}
                      {item.category && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-md text-[10px] font-black px-3 py-1.5 rounded-full text-green-950 uppercase tracking-wider shadow-sm border border-white/50">
                            {item.category}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="p-6 flex flex-col flex-1 bg-white relative z-10">
                      <h3 className="font-bold text-lg text-green-950 mb-1 leading-snug group-hover:text-emerald-700 transition-colors">{item.name}</h3>
                      <p className="text-sm text-green-700/80 mb-6 font-medium line-clamp-2">
                        {item.description || "Authentic product from local creator."}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-xl font-black text-green-950 tracking-tight">₹{item.price}</span>
                        
                        {/* 7. THE WHATSAPP ORDER BUTTON */}
                        <a 
                          href={`https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(`Hi Glow Global Mart, I am interested in buying: ${item.name} (₹${item.price}). Is it available?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-50 border border-emerald-100 text-emerald-700 hover:bg-emerald-600 hover:text-white p-3 rounded-2xl transition-all duration-300 shadow-sm flex items-center gap-2"
                          title="Order via WhatsApp"
                        >
                          <ShoppingCart className="w-5 h-5" /> 
                          <span className="text-sm font-bold hidden sm:block">Buy</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Fallback if no products exist yet */}
                {products.length === 0 && (
                  <div className="col-span-full py-12 text-center text-green-800 font-medium bg-white/50 rounded-2xl border border-green-100 border-dashed">
                    No products added yet. Log in to the Studio to add your first product!
                  </div>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}