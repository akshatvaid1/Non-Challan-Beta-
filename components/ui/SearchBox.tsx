'use client';

import { useState } from 'react';
import { MapPin, Calendar, Clock, Search, ChevronDown, CheckCircle2, XCircle } from 'lucide-react';

const shops = [
  { 
    id: 1, 
    name: "Rental Roadies", 
    location: "Bidholi", 
    status: "Available",
    logo: "/Images/rental-roadies.jpg"
  },
  { 
    id: 2, 
    name: "Roamers Hub", 
    location: "Pondha", 
    status: "Not Available",
    logo: "/Images/roamers-hub.jpg"
  },
  { 
    id: 3, 
    name: "Singh Rental", 
    location: "Kandoli", 
    status: "Available",
    logo: "/Images/singh-rental.avif"
  },
  { 
    id: 4, 
    name: "Rent and Ride", 
    location: "Bidholi", 
    status: "Available",
    logo: "/Images/rent-and-ride.jpg"
  }
];

export default function SearchBox() {
  const [isLocOpen, setIsLocOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');

  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const [isPickupTimeOpen, setIsPickupTimeOpen] = useState(false);
  const [selectedPickupTime, setSelectedPickupTime] = useState('');

  const [isReturnTimeOpen, setIsReturnTimeOpen] = useState(false);
  const [selectedReturnTime, setSelectedReturnTime] = useState('');

  const [results, setResults] = useState<typeof shops>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const locations = ['Bidholi', 'Pondha', 'Kandoli'];

  const times = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
    '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
    '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'
  ];

  const handleSearch = () => {
    // Validation
    if (!selectedLocation || !pickupDate || !selectedPickupTime || !returnDate || !selectedReturnTime) {
      alert("Please fill all details");
      return;
    }

    // Message Construction
    const message = `Hi, I want to book a scooty.

Location: ${selectedLocation}
Pickup: ${pickupDate} at ${selectedPickupTime}
Return: ${returnDate} at ${selectedReturnTime}

Please confirm availability.`;

    // Encode and Redirect
    const whatsappURL = `https://wa.me/9234998082?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
  };

  const handleReturnTimeSelect = (time: string) => {
    setSelectedReturnTime(time);
    setIsReturnTimeOpen(false);
  };

  const isTimeDisabled = (time: string) => {
    if (pickupDate && returnDate && pickupDate === returnDate && selectedPickupTime) {
      const pickupIndex = times.indexOf(selectedPickupTime);
      const currentIndex = times.indexOf(time);
      return currentIndex <= pickupIndex;
    }
    return false;
  };

  return (
    <div className="relative z-10 w-full max-w-[1100px] mx-auto p-4 md:p-[24px_28px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4">
        {/* Location Dropdown */}
        <div className="relative h-14 w-full">
          <div 
            onClick={() => setIsLocOpen(!isLocOpen)}
            className="flex items-center gap-3 px-4 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200 transition-all cursor-pointer h-full"
          >
            <MapPin className="h-5 w-5 text-gray-400 shrink-0" />
            <div className="flex flex-col text-left overflow-hidden">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Location</label>
              <div className="flex justify-between items-center gap-1">
                <span className={`text-sm font-bold truncate ${selectedLocation ? 'text-gray-900' : 'text-gray-300'}`}>
                  {selectedLocation || 'Location'}
                </span>
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isLocOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </div>
          {isLocOpen && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50">
              {locations.map((loc) => (
                <div key={loc} onClick={() => { setSelectedLocation(loc); setIsLocOpen(false); }} className="px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-100 cursor-pointer">{loc}</div>
              ))}
            </div>
          )}
        </div>

        {/* Pickup Date */}
        <div className="flex items-center gap-3 px-4 bg-gray-50 rounded-xl border border-transparent focus-within:border-gray-200 transition-all h-14 w-full">
          <Calendar className="h-5 w-5 text-gray-400 shrink-0" />
          <div className="flex flex-col text-left w-full">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Pickup date</label>
            <input 
              type="date" 
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="bg-transparent text-sm font-bold text-gray-900 focus:outline-none w-full" 
            />
          </div>
        </div>

        {/* Pickup Time */}
        <div className="relative h-14 w-full">
          <div 
            onClick={() => setIsPickupTimeOpen(!isPickupTimeOpen)}
            className="flex items-center gap-3 px-4 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200 transition-all cursor-pointer h-full"
          >
            <Clock className="h-5 w-5 text-gray-400 shrink-0" />
            <div className="flex flex-col text-left overflow-hidden">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Pickup Time</label>
              <div className="flex justify-between items-center gap-1">
                <span className={`text-sm font-bold truncate ${selectedPickupTime ? 'text-gray-900' : 'text-gray-300'}`}>
                  {selectedPickupTime || 'Time'}
                </span>
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isPickupTimeOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </div>
          {isPickupTimeOpen && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-y-auto max-h-60 z-50">
              {times.map((t) => (
                <div key={t} onClick={() => { setSelectedPickupTime(t); setIsPickupTimeOpen(false); }} className="px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100 cursor-pointer">{t}</div>
              ))}
            </div>
          )}
        </div>

        {/* Return Date */}
        <div className="flex items-center gap-3 px-4 bg-gray-50 rounded-xl border border-transparent focus-within:border-gray-200 transition-all h-14 w-full">
          <Calendar className="h-5 w-5 text-gray-400 shrink-0" />
          <div className="flex flex-col text-left w-full">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Return date</label>
            <input 
              type="date" 
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="bg-transparent text-sm font-bold text-gray-900 focus:outline-none w-full" 
            />
          </div>
        </div>

        {/* Return Time */}
        <div className="relative h-14 w-full">
          <div 
            onClick={() => setIsReturnTimeOpen(!isReturnTimeOpen)}
            className="flex items-center gap-3 px-4 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200 transition-all cursor-pointer h-full"
          >
            <Clock className="h-5 w-5 text-gray-400 shrink-0" />
            <div className="flex flex-col text-left overflow-hidden">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Return Time</label>
              <div className="flex justify-between items-center gap-1">
                <span className={`text-sm font-bold truncate ${selectedReturnTime ? 'text-gray-900' : 'text-gray-300'}`}>
                  {selectedReturnTime || 'Time'}
                </span>
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isReturnTimeOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </div>
          {isReturnTimeOpen && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-y-auto max-h-60 z-50">
              {times.map((t) => {
                const disabled = isTimeDisabled(t);
                return (
                  <div
                    key={t}
                    onClick={() => !disabled && handleReturnTimeSelect(t)}
                    className={`px-4 py-2 text-sm font-bold transition-colors ${
                      disabled 
                        ? 'text-gray-300 bg-gray-50 cursor-not-allowed opacity-50' 
                        : 'text-gray-700 hover:bg-gray-100 cursor-pointer'
                    }`}
                  >
                    {t}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Search Button */}
        <button 
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 w-full px-7 bg-black text-white text-sm font-black rounded-xl transition-all duration-200 hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.97] h-14"
        >
          <Search className="h-4 w-4" />
          <span className="md:hidden lg:inline">Find Rentals</span>
          <span className="hidden md:inline lg:hidden">Find</span>
        </button>
      </div>
      
      {/* RESULTS SECTION */}
      <div id="results-section" className="w-full">
        {hasSearched && (
          <div className="mt-12 pt-10 border-t border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                {results.length > 0 ? `Showing rentals in ${selectedLocation}` : `No rentals available in this area right now`}
              </h3>
              {results.length > 0 && (
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full">
                  {results.length} shops found
                </span>
              )}
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {results.map((shop) => (
                  <div 
                    key={shop.id} 
                    className="group relative bg-white rounded-[16px] p-5 border border-gray-100 shadow-[0_12px_30_rgba(0,0,0,0.08)] hover:-translate-y-[6px] transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      {shop.status === "Available" ? (
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-wider rounded-full border border-green-100">
                          <CheckCircle2 className="h-3 w-3" />
                          Available
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 text-[10px] font-black uppercase tracking-wider rounded-full border border-red-100">
                          <XCircle className="h-3 w-3" />
                          Not Available
                        </span>
                      )}
                    </div>

                    {/* Logo & Info */}
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gray-50 p-2 border border-gray-100 mb-4 overflow-hidden flex items-center justify-center">
                        <img 
                          src={shop.logo} 
                          alt={shop.name} 
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg leading-tight mb-1">{shop.name}</h4>
                      <div className="flex items-center gap-1 text-gray-400 text-xs font-medium uppercase tracking-wider">
                        <MapPin className="h-3 w-3" />
                        {shop.location}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="mt-auto w-full bg-black text-white py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:bg-black/90 active:scale-[0.98]">
                      Rent Now
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50/50 rounded-3xl p-12 text-center border-2 border-dashed border-gray-100">
                <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 border border-gray-100">
                  <Search className="h-6 w-6 text-gray-300" />
                </div>
                <p className="text-gray-500 font-medium max-w-xs mx-auto">
                  Try checking another location nearby to find the best rental options.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <p className="mt-4 text-xs font-medium text-gray-400 text-center">Compare nearby shops and book instantly</p>
    </div>
  );
}
