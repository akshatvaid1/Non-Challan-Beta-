const STEPS = [
  {
    id: "01",
    title: "Search Nearby Rentals",
    description: "Select your location, date, and time to view available rental shops near you.",
  },
  {
    id: "02",
    title: "Review Available Options",
    description: "View available rental shops based on your selected location and time.",
  },
  {
    id: "03",
    title: "Confirm via WhatsApp",
    description: "Complete your booking instantly through WhatsApp with pre-filled details.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            A simple and fast way to find and book rentals near your campus.
          </p>
          <p className="text-xs font-semibold text-slate-400 mt-3 uppercase tracking-widest">
            This is Version 1 (Beta). Bookings are currently confirmed via WhatsApp.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div 
              key={step.id}
              className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <span className="block text-sm font-black text-slate-200 mb-6 group-hover:text-slate-900 transition-colors">
                {step.id}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Micro Text */}
        <div className="mt-12 text-center">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
            More automation and instant booking features coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
