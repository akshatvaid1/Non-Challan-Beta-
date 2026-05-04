import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20 mt-20 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Company */}
          <div className="space-y-6">
            <h4 className="text-white font-black tracking-tighter text-lg">NONCHALLAN</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/fleet" className="hover:text-white transition-colors">Our Fleet</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/press" className="hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Column 2: Support */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/safety" className="hover:text-white transition-colors">Safety</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How it works</Link></li>
              <li><Link href="/cities" className="hover:text-white transition-colors">Cities</Link></li>
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Policies</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="mailto:akshatvaid5@gmail.com" className="hover:text-white transition-colors">akshatvaid5@gmail.com</a></li>
              <li><a href="tel:+919234998082" className="hover:text-white transition-colors">+91 9234998082</a></li>
              <li className="pt-2 flex gap-4">
                {/* Simple placeholder social icons */}
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all cursor-pointer">𝕏</div>
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all cursor-pointer">ig</div>
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all cursor-pointer">in</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} NONCHALLAN INC.</p>
          <div className="flex gap-8">
            <span className="text-gray-600">Designed for the future</span>
            <span className="text-gray-600">All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
