'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-0">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-gray-900">
              NONCHALLAN
            </Link>
          </div>

          {/* Center: Desktop Links */}
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

          {/* Right: Desktop CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/signin" 
              className="hidden md:block px-4 md:px-5 py-2 text-xs md:text-sm font-bold text-white bg-black rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:bg-gray-800 hover:scale-[1.03] active:scale-[0.97]"
            >
              Sign In
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Full Screen & Solid */}
      <div className={`
        fixed inset-0 bg-white z-[9999] transition-transform duration-300 md:hidden
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full p-6">
          {/* Header with Logo and Close Button */}
          <div className="flex justify-between items-center mb-12">
            <Link href="/" onClick={toggleMenu} className="text-xl font-black tracking-tighter text-gray-900">
              NONCHALLAN
            </Link>
            <button 
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-black transition-colors"
              aria-label="Close menu"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-8">
            <Link 
              href="/#fleet-section" 
              onClick={toggleMenu}
              className="text-2xl font-bold text-gray-900 tracking-tight"
            >
              Fleet
            </Link>
            <Link 
              href="#how-it-works" 
              onClick={toggleMenu}
              className="text-2xl font-bold text-gray-900 tracking-tight"
            >
              How it works
            </Link>
            <Link 
              href="#pricing" 
              onClick={toggleMenu}
              className="text-2xl font-bold text-gray-900 tracking-tight"
            >
              Pricing
            </Link>
          </div>

          {/* Bottom CTA */}
          <div className="mt-auto pb-10">
            <Link 
              href="/signin" 
              onClick={toggleMenu}
              className="w-full block py-4 bg-black text-white text-center rounded-2xl font-bold text-lg shadow-lg active:scale-[0.98] transition-transform"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
