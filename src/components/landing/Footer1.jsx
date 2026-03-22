import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer1() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm mt-5">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Text */}
        <p className="text-center md:text-left">
          © Blink Commerce Private Limited, 2016-2026
        </p>

        {/* Download App */}
        <div className="flex items-center gap-3">
          <span className="font-medium text-gray-700">Download App</span>

          {/* App Store */}
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-10 cursor-pointer"
          />

          {/* Google Play */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-10 cursor-pointer"
          />
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <div className="bg-black text-white p-2 rounded-full cursor-pointer">
            <Facebook size={18} />
          </div>
          <div className="bg-black text-white p-2 rounded-full cursor-pointer">
            <Twitter size={18} />
          </div>
          <div className="bg-black text-white p-2 rounded-full cursor-pointer">
            <Instagram size={18} />
          </div>
          <div className="bg-black text-white p-2 rounded-full cursor-pointer">
            <Linkedin size={18} />
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div className="border-t border-gray-300 px-4 py-4 text-center text-xs text-gray-500 max-w-6xl mx-auto">
        “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related,
        linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate
        services business operated by “Redstone Consultancy Services Private Limited”.
      </div>
    </footer>
  );
}