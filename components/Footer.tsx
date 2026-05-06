import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  {
    /* FOOTER - Now outside main! */
  }
  return (
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
                Hyderabad, Telangana 500067, India
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
  );
}
