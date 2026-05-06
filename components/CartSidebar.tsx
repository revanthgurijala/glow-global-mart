"use client";

import { X, ShoppingBag, Plus, Minus, ArrowRight, Trash2 } from "lucide-react";
import Image from "next/image";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  // Mock Cart Data
  const cartItems = [
    { id: 1, name: "Antique Gold-Plated Necklace", price: "₹2,499", qty: 1, color: "amber" },
    { id: 2, name: "Handwoven Bamboo Basket", price: "₹899", qty: 2, color: "emerald" },
  ];

  return (
    <>
      {/* Background Overlay */}
      <div 
        className={`fixed inset-0 bg-emerald-950/40 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      ></div>

      {/* Sidebar Panel */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white/90 backdrop-blur-2xl shadow-2xl border-l border-white/60 z-[70] transform transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-green-100/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-100/50 rounded-xl text-emerald-600">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-black text-green-950 font-['var(--font-outfit)'] tracking-tight">Your Cart</h2>
          </div>
          <button onClick={onClose} className="p-2 text-green-600 hover:bg-green-100 hover:text-green-900 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 bg-white rounded-2xl border border-green-100 shadow-sm group hover:border-emerald-200 transition-colors">
              {/* Mock Image Placeholder */}
              <div className={`w-20 h-20 rounded-xl bg-${item.color}-50 flex items-center justify-center shrink-0`}>
                <ShoppingBag className={`w-8 h-8 text-${item.color}-300`} />
              </div>
              
              <div className="flex flex-col flex-1 justify-between">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-bold text-green-950 text-sm leading-snug">{item.name}</h3>
                  <button className="text-green-400 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <span className="font-black text-green-950">{item.price}</span>
                  
                  {/* Qty Selector */}
                  <div className="flex items-center gap-3 bg-green-50 px-2 py-1 rounded-lg border border-green-100">
                    <button className="text-green-600 hover:text-green-950"><Minus className="w-3 h-3" /></button>
                    <span className="text-sm font-bold text-green-950 w-4 text-center">{item.qty}</span>
                    <button className="text-green-600 hover:text-green-950"><Plus className="w-3 h-3" /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Checkout */}
        <div className="p-6 bg-white/80 border-t border-green-100/50 backdrop-blur-md">
          <div className="flex justify-between items-center mb-4">
            <span className="text-green-800 font-medium">Subtotal</span>
            <span className="text-2xl font-black text-green-950 tracking-tight">₹4,297</span>
          </div>
          <p className="text-xs text-green-600 mb-6 font-medium">Shipping and taxes calculated at checkout.</p>
          <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
            Proceed to Checkout <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </>
  );
}