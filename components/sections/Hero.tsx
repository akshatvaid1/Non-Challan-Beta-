import SearchBox from '@/components/ui/SearchBox';

export default function Hero() {
  return (
    <section className="w-full pt-12 md:pt-28 pb-16 md:pb-32 flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 via-white to-teal-50 px-6 md:px-10">
      <div className="relative w-full">
        {/* Background layer for depth */}
        <div className="absolute inset-0 bg-blue-100/40 blur-3xl rounded-full opacity-40"></div>

        {/* Inner Content Container */}
        <div className="relative z-10 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900">
            Find nearby rentals, <br />
            <span className="text-gray-400">instantly.</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4 w-full">
            Connect with trusted local rental shops, check real-time availability, and book your ride in seconds. Built for students who need quick, affordable mobility.
          </p>

          {/* Search Box Component Wrapper */}
          <div className="relative z-10 mt-8 p-1.5 md:p-2 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg max-w-[1100px] mx-auto w-full">
            <SearchBox />
          </div>
        </div>
      </div>
    </section>
  );
}
