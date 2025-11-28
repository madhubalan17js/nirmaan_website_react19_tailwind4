import React from 'react';
import AboutUsSections from '@/components/AboutUsSections';
import ExpertTeamCTA from '@/components/common/ExpertTeamCTA';
import OurPresentationSection from '@/components/common/OurPersenceSection';

const AboutUsPage: React.FC = () => {
  return (
      // Removed max-w-[1280px] and p-8 since HeroSection manages its own padding and max-width.
    <div className="w-full"> 
    <AboutUsSections />
    <ExpertTeamCTA/>
    <OurPresentationSection/>
    </div>
  );
};

export default AboutUsPage;