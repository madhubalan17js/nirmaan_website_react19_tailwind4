import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import ResizableImage from '../ResizableImage';
import RotatingHighlight from './RotatingHighlight';

// ==========================================================
// CONSTANTS (Data Definitions)
// ==========================================================

  const SECTION_BG_COLOR = '#f3f7f8';
const HEADER_TEXT_COLOR = 'text-black';
const ACCENT_COLOR = 'text-destructive'; 

// Data for the Service Cards
const offerData = [
  {
    title: 'Electrical Work',
    description: 'Complete electrical setup and maintenance for safe, efficient power.',
    imageSrc: 'electrical-work.jpg', // Replace with actual import
  },
  {
    title: 'HVAC System',
    description: 'Reliable heating, cooling, and ventilation for year-round comfort.',
    imageSrc: 'hvac-system.jpg', // Replace with actual import
  },
  {
    title: 'FA & PA System',
    description: 'Fire alarm and telecom setups for safety and communication.',
    imageSrc: 'fa-pa-system.jpg', // Replace with actual import
  },
  {
    title: 'Security System',
    description: 'Advanced surveillance and alarm systems to protect your space.',
    imageSrc: 'security-system.jpg', // Replace with actual import
  },
  {
    title: 'Data & Networking',
    description: 'High-speed networking and structured cabling for seamless connectivity.',
    imageSrc: 'data-networking.jpg', // Replace with actual import
  },
  {
    title: 'Fire Fighting',
    description: 'Smart firefighting solutions ensuring quick, reliable emergency response.',
    imageSrc: 'fire-fighting.jpg', // Replace with actual import
  },
];


// ==========================================================
// 1. OfferCard COMPONENT (Inner Component)
// ==========================================================


interface MobileOfferCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const MobileOfferCard: React.FC<MobileOfferCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    // Card Container: Hide on LG, Show on all others (mobile first)
    <div 
      className="relative h-52 rounded-xl overflow-hidden shadow-2xl lg:hidden"
       style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)'
        }}
    >
      {/* 1. Background Image */}
      <ResizableImage
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        fit="cover"
        lazyLoad={true}
      />
      
      {/* 2. Text Overlay and Gradient Mask (The key to the mobile look) */}
      <div 
        className="absolute inset-0 w-50 p-6 flex flex-col  justify-start"
        // Use a dark, high-contrast gradient on the left for text readability
       
      >
        
        <div className="text-white">
          {/* Title: Dominant size for mobile */}
          <h3 className="text-lg font-bold leading-tight mb-2">
            {title}
          </h3>
        </div>
        
        {/* Description: Sits immediately below the title */}
        <div className="text-white">
          <p className="text-sm font-medium">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
};


interface OfferCardProps {
  imageSrc: string;
  title: string;
  description: string;
  className?: string;
}


const OfferCard: React.FC<OfferCardProps> = ({
  imageSrc,
  title,
  description,
  className
}) => {
  return (
    // Card Container: Relative to hold absolute image/overlay
    <div 
      className={cn(
        'relative h-42 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.01]',
        className
      )}
    >
      {/* 1. Background Image */}
      <ResizableImage
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        fit="cover"
        lazyLoad={true}
      />
      
      {/* 2. Text Overlay and Gradient Mask */}
      {/* FIX: Use flex-col and justify-between on the overlay to split content to top/bottom */}
      <div 
        className="absolute inset-0 p-6 flex flex-col justify-start lg:justify-between" // <-- FIX: justify-between
        style={{
          // Use a full-area gradient to ensure contrast for both top and bottom text
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)'
        }}
      >
        
        {/* TOP: Title Block (Pushed to the start/top) */}
        <div className="text-white">
          <h3 className="text-xl lg:text-2xl font-bold leading-tight">
            {title}
          </h3>
        </div>
        
        {/* BOTTOM: Description Block (Pushed to the end/bottom) */}
        <div className="text-white">
          <p className="text-sm lg:text-base font-medium">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
};

// ==========================================================
// 2. WhatWeOfferSection COMPONENT (Main container)
// ==========================================================

const WhatWeOfferSection: React.FC = () => {

  return (
    <section className={cn('w-full py-16', SECTION_BG_COLOR)}>
      <div className="mx-auto max-w-[1280px] px-6">
        
        {/* === TOP HEADER BLOCK === */}
        <div className="mb-12 flex flex-col items-start justify-between lg:flex-row lg:items-center">
          
          {/* Headline and Description */}
          <div className="w-full lg:w-3/4">
            <p className='text-grayN text-3xl lg:text-5xl font-normal'>
              What We
             
              <RotatingHighlight text="Offer ?"/>
              
            </p>
            <p className={cn('text-blackN mt-4 text-lg max-w-2xl', HEADER_TEXT_COLOR)}>
              We provide a comprehensive range of services for all your MEP needs.
            </p>
          </div>
          
          {/* Learn More Button */}
          <div className="mt-8 lg:mt-0 flex w-full lg:w-1/4 justify-start lg:justify-end">
            <Button variant="destructive" size="lg" className="px-8 py-3 text-lg font-bold">
              Learn More
            </Button>
          </div>
        </div>

         {/* ======================================================= */}
        {/* FIX: MOBILE STACK (Show on < LG, Stack Vertically)    */}
        {/* ======================================================= */}
        <div className="grid grid-cols-1 gap-6 mb-12 lg:hidden">
          {offerData.map((offer, index) => (
            <MobileOfferCard
              key={index}
              imageSrc={offer.imageSrc}
              title={offer.title}
              description={offer.description}
            />
          ))}
        </div>



        {/* === OFFER CARDS GRID / MOBILE STACK (70/30 Split) === */}
        {/* FIX: Set a 10-column base grid for the 70/30 split on LG and up */}
        <div className="hidden lg:grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-10 lg:gap-8">
          {offerData.map((offer, index) => {
            
            // Logic for 70% (index 0, 2, 4...) and 30% (index 1, 3, 5...) split on large screens
         

            const colSpanClasses = cn(
                // Mobile/Tablet: Still span full width (col-span-2 on md)
                'md:col-span-2', 

                // Desktop (LG and up) Split:
                index===0 || index===3 || index===4 ? 'lg:col-span-6' : 'lg:col-span-4'
            );

            return (
              <OfferCard
                key={index}
                imageSrc={offer.imageSrc}
                title={offer.title}
                description={offer.description}
                // Apply the responsive col-span classes
                className={colSpanClasses}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;