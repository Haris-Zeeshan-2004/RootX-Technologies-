"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-8 sm:pt-10 md:pt-12 pb-4 px-4 sm:px-6 lg:px-8">
      {/* Centered Footer Container with Rounded Corners */}
      <div className="relative max-w-6xl mx-auto bg-blue-950 rounded-3xl sm:rounded-[3rem] text-white py-8 sm:py-10 md:py-12 px-6 sm:px-8 lg:px-12 shadow-2xl">
        {/* Top Section - Logo on Left */}
        <div className="flex justify-start mb-8 sm:mb-10">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo-5.png"
              alt="RootX Technologies"
              width={200}
              height={60}
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white mb-6 sm:mb-8"></div>

        {/* Middle Section - Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8 text-left sm:text-left">
          {/* Phone */}
          <div className="flex items-center justify-start sm:justify-start gap-3 group">
            <div className="flex-shrink-0">
              <svg 
                className="w-5 h-5 text-white transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
            </div>
            <Link 
              href="tel:+923355123111" 
              className="text-sm sm:text-base font-body font-medium text-white  transition-colors duration-300"
            >
              +92-335-5123 111
            </Link>
          </div>

          {/* Address */}
          <div className="flex items-center justify-start sm:justify-center gap-2 group">
            <div className="flex-shrink-0">
              <svg 
                className="w-5 h-5 text-white transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
            </div>
            <p className="text-sm sm:text-base text-white font-body  transition-colors duration-300">
              Office M8, 1st Floor, City Star Plaza, Lahore
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center justify-start sm:justify-end gap-3 group">
            <div className="flex-shrink-0">
              <svg 
                className="w-5 h-5 text-white transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <Link 
              href="mailto:info@rootxtechnologies.com" 
              className="text-sm sm:text-base text-white transition-colors duration-300"
            >
              info@rootxtechnologies.com
            </Link>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white mb-6 sm:mb-8"></div>

        {/* Bottom Section - Copyright & Links */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm">
          {/* Copyright */}
          <p className="text-white font-medium font-body text-left sm:text-left">
            © 2026 RootX Technologies. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-6 sm:gap-8">
            <Link 
              href="/terms" 
              className="text-white font-semibold font-body hover:text-white transition-colors duration-300 hover:underline"
            >
              Terms & Condition
            </Link>
            <Link 
              href="/privacy" 
              className="text-white font-semibold font-body hover:text-white transition-colors duration-300 hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
