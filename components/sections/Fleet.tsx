import ScooterCard from '@/components/ui/ScooterCard';
import { FLEET_DATA } from '@/lib/data';

interface FleetProps {
  isLoading?: boolean;
}

export default function Fleet({ isLoading = false }: FleetProps) {
  const hasData = FLEET_DATA && FLEET_DATA.length > 0;

  return (
    <section id="fleet-section" className="py-10 md:py-24 bg-gray-50 scroll-mt-20 md:scroll-mt-24 w-full">
      <div className="w-full px-4 md:px-10">
        <div className="bg-white rounded-2xl p-5 md:p-10 shadow-sm min-h-[400px] flex flex-col w-full">
          {/* Title section */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">Choose Your Rental Shop</h2>
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed mt-2 max-w-2xl mx-auto">Compare trusted rental shops near your campus and book instantly.</p>
          </div>

          {/* Conditional Rendering */}
          {isLoading ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin" />
                <p className="text-gray-400 font-medium italic text-xs md:text-base">Loading premium fleet...</p>
              </div>
            </div>
          ) : !hasData ? (
            <div className="flex-1 flex items-center justify-center border-2 border-dashed border-gray-100 rounded-xl bg-gray-50/50 py-12 md:py-20">
              <div className="text-center px-4">
                <p className="text-lg md:text-xl font-bold text-gray-900">No rentals available</p>
                <p className="text-gray-500 mt-1 text-xs md:text-base">Please check back later for new arrivals.</p>
              </div>
            </div>
          ) : (
            /* Grid layout */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {FLEET_DATA.map((scooter) => (
                <ScooterCard
                  key={scooter.id}
                  name={scooter.name}
                  image={scooter.image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
