import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

// Inter for readable body text
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Outfit for stylish headings
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Glow Global Mart | Your Gateway to Global Shopping",
  description:
    "A dynamic online marketplace designed to bring quality products from across the world to your doorstep. Discover trusted suppliers, trending products, and everyday essentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
