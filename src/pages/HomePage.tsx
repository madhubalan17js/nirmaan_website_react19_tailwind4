import React from 'react';
import HeroSection from '../components/HeroSection'; // <--- Import the new component
import WhyChooseSection from '@/components/common/WhyChooseSection';
import WhatWeOfferSection from '@/components/common/WhatWeOfferSection';
import AdvancedTechSection from '@/components/AdvancedTechSection';
import OurPresenceSection from '@/components/common/OurPersenceSection';
import TestimonialSlider from '@/components/TestimonialSlidar';

const HomePage: React.FC = () => {
  return (
    // Removed max-w-[1280px] and p-8 since HeroSection manages its own padding and max-width.
    <div className="w-full"> 
      <HeroSection />
      <WhyChooseSection/>
      <WhatWeOfferSection/>
      <AdvancedTechSection/>
      <div className="w-full h-[1px] bg-destructive my-4"></div> 
      <OurPresenceSection/>
      <TestimonialSlider/>
      
    </div>
  );
};

export default HomePage;