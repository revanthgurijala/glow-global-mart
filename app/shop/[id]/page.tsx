import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Truck, ArrowLeft, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { createClient } from "next-sanity";

// Import our new Interactive Gallery Component!
import ProductGallery from "@/components/ProductGallery";

export const dynamic = "force-dynamic";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
});

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const productId = resolvedParams.id;

  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0]{
    ...,
    "videoAsset": video.asset->url
  }`,
    { id: productId },
  );

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f9f4]">
        <h2 className="text-3xl font-black text-green-950 mb-4">
          Product not found
        </h2>
        <Link
          href="/shop"
          className="text-emerald-600 font-bold hover:underline"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const myWhatsAppNumber = "919963420226";

  return (
    <>
      <main className="min-h-screen bg-[#f4f9f4] text-green-950 font-sans pt-32 pb-20">
        <Navbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-500 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
            Back to Shop
          </Link>

          <div className="bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-6 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* LEFT COLUMN: The new Interactive Gallery Component */}
              <ProductGallery
                images={product.images || []}
                video={product.videoAsset || null}
              />

              {/* RIGHT COLUMN: Product Details */}
              <div className="flex flex-col justify-center">
                {product.category && (
                  <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-4 w-max uppercase tracking-wider">
                    {product.category}
                  </div>
                )}

                <h1 className="text-3xl lg:text-5xl font-black text-green-950 mb-6 pb-6 border-b border-green-100 leading-tight">
                  {product.name}
                </h1>

                <div className="mb-8">
                  <span className="text-4xl font-black text-green-950 tracking-tight">
                    ₹{product.price}
                  </span>
                  <p className="mt-6 text-green-800 leading-relaxed font-medium text-lg whitespace-pre-line">
                    {product.description}
                  </p>
                </div>

                <a
                  href={`https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(`Hi Glow Global Mart, I want to order: ${product.name} (₹${product.price}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 py-4 px-8 mb-10"
                >
                  <ShoppingCart className="w-5 h-5" /> Buy on WhatsApp
                </a>

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
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 shrink-0">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-950 text-sm">
                        Secure Shipping
                      </h4>
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
