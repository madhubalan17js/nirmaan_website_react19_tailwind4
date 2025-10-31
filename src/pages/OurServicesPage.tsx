import React from 'react';

import WhatWeOfferSection from '@/components/common/WhatWeOfferSection';
import CTAHeroSection from '@/components/common/CTAHeroSection';

const OurServicesPage: React.FC = () => {
  return (
    <div className="w-full"> 
      <WhatWeOfferSection/>
      <CTAHeroSection/>
    </div>
  );
};

export default OurServicesPage;