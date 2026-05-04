import { Zap, MapPin, Activity, Tag, ShieldCheck, MousePointerClick } from 'lucide-react';

const FEATURES = [
  {
    title: "Instant Booking",
    description: "Book your ride in seconds without calling multiple shops.",
    icon: <Zap className="w-6 h-6 text-slate-900" />,
  },
  {
    title: "Campus-Focused Locations",
    description: "Rental options near Bidholi, Pondha, and Kandoli.",
    icon: <MapPin className="w-6 h-6 text-slate-900" />,
  },
  {
    title: "Real-Time Availability",
    description: "See available scooters instantly with no guesswork.",
    icon: <Activity className="w-6 h-6 text-slate-900" />,
  },
  {
    title: "Transparent Pricing",
    description: "Clear pricing with no hidden charges.",
    icon: <Tag className="w-6 h-6 text-slate-900" />,
  },
  {
    title: "Verified Local Vendors",
    description: "Trusted rental partners for reliable service.",
    icon: <ShieldCheck className="w-6 h-6 text-slate-900" />,
  },
  {
    title: "Quick Booking Flow",
    description: "Seamless experience from search to confirmation.",
    icon: <MousePointerClick className="w-6 h-6 text-slate-900" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Why Students Choose Us
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Fast, reliable rentals designed around your campus life.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-slate-50/50 rounded-[20px] border border-slate-100 shadow-sm hover:shadow-md hover:bg-white hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-5 p-3 w-fit bg-white rounded-xl border border-slate-100 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
