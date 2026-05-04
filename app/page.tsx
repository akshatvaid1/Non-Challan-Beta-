import Hero from '@/components/sections/Hero';
import Fleet from '@/components/sections/Fleet';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import HowItWorks from '@/components/sections/HowItWorks';

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Fleet />
    </div>
  );
}
