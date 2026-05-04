import Image from 'next/image';

interface ScooterCardProps {
  name: string;
  image: string;
}

export default function ScooterCard({ name, image }: ScooterCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
      {/* Image section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content section */}
      <div className="p-4 space-y-4">
        <h3 className="font-semibold text-lg text-gray-900 leading-tight">{name}</h3>
        
        <button className="w-full bg-black text-white py-2.5 rounded-lg font-bold transition-all duration-200 hover:bg-gray-800 hover:scale-[1.03] active:scale-[0.97]">
          Rent Now
        </button>
      </div>
    </div>
  );
}
