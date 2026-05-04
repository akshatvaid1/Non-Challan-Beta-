import SearchBox from '@/components/ui/SearchBox';

export default function Hero() {
  return (
    <section className="w-full pt-8 md:pt-28 pb-12 md:pb-32 flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 via-white to-teal-50 px-4 md:px-10">
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Background layer for depth */}
        <div className="absolute inset-0 bg-blue-100/40 blur-3xl rounded-full opacity-40"></div>

        {/* Inner Content Container */}
        <div className="relative z-10 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900">
            Find nearby rentals, <br className="hidden sm:block" />
            <span className="text-gray-400">instantly.</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
            Connect with trusted local rental shops, check real-time availability, and book your ride in seconds. Built for students who need quick, affordable mobility.
          </p>

          {/* Search Box Component Wrapper */}
          <div className="relative z-10 mt-8 p-1 md:p-2 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg max-w-[1100px] mx-auto w-full">
            <SearchBox />
          </div>
        </div>
      </div>
    </section>
  );
}
