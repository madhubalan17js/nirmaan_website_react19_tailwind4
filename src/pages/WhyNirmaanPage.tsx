import CTAHeroSection from '@/components/common/CTAHeroSection';
import WhyChooseSection from '@/components/common/WhyChooseSection';
import NirmaanAdvantageSection from '@/components/NirmaanAdvantageSection';
import React from 'react';

const WhyNirmaanPage: React.FC = () => {
  return (
     <div className="w-full"> 
     <WhyChooseSection/>
     <NirmaanAdvantageSection/>
     <CTAHeroSection/>

     
    </div>
  );
};

export default WhyNirmaanPage;