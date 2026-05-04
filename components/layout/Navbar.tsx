'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="flex justify-between items-center h-16 md:h-20">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-gray-900">
            NONCHALLAN
          </Link>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          <Link 
            href="/#fleet-section" 
            className="text-sm font-semibold text-gray-600 hover:text-black hover:underline hover:underline-offset-4 transition-all duration-200"
          >
            Fleet
          </Link>
          <Link href="#how-it-works" className="text-sm font-semibold text-gray-600 hover:text-black hover:underline hover:underline-offset-4 transition-all duration-200">
            How it works
          </Link>
          <Link href="#pricing" className="text-sm font-semibold text-gray-600 hover:text-black hover:underline hover:underline-offset-4 transition-all duration-200">
            Pricing
          </Link>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center">
          <Link 
            href="/signin" 
            className="px-4 md:px-5 py-2 text-xs md:text-sm font-bold text-white bg-black rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:bg-gray-800 hover:scale-[1.03] active:scale-[0.97]"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
