import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react'; // For dynamic icons
import  RotatingHighlight from './RotatingHighlight';

// ==========================================================
// 1. FeatureCard COMPONENT (Defined as an inner component)
// ==========================================================

interface FeatureCardProps {
  icon: keyof typeof LucideIcons; 
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className
}) => {
  const IconComponent = LucideIcons[icon] as React.ElementType;
  const ICON_COLOR = 'text-blackN';
  const BORDER_COLOR = 'border-destructive';

  return (
    // Card Container: White background, rounded corners, shadow, and a fixed red left border
    <div 
      className={cn(
        'relative flex flex-col p-4 text-blackN  bg-white shadow-lg overflow-hidden',
        'rounded-none border-l-4  lg:rounded-md lg:border-2 ' + BORDER_COLOR, // Red left border for the visual stripe
        className
      )}
    >
      <div className="flex items-start space-x-4">
        {/* Icon (Fixed size and color) */}
        {/* <div className="flex-shrink-0 pt-1">
          {IconComponent && (
            <IconComponent className={cn('h-6 w-6', ICON_COLOR)} aria-hidden="true" />
          )}
        </div> */}

        {/* Title and Description */}
        <div className="flex-1">
          <div className="flex-shrink-0 pb-2">
          {IconComponent && (
            <IconComponent className={cn('h-10 w-10', ICON_COLOR)} aria-hidden="true" />
          )}
          </div>
          <h3 className="text-xl font-bold  leading-snug mb-1">
            {title}
          </h3>
          <p className="text-base  leading-snug">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};


// ==========================================================
// 2. WhyChooseSection COMPONENT (Main container)
// ==========================================================

const featuresData = [
  {
    icon: 'Link', // Lucide icon for link/connection/infinity
    title: 'One Stop Solution',
    description: 'From drawing to handover, you get all services under one roof.',
  },
  {
    icon: 'Infinity', // Lucide icon for infinity/loops (Zero Delay)
    title: 'Zero Delay Delivery',
    description: 'Utilizing the latest technology for efficient outcomes.',
  },
  {
    icon: 'ChevronLeft', // Placeholder for the 'less than' icon (Zero Cost Overrun)
    title: 'Zero Cost Overrun',
    description: 'Commitment to safety in every project we undertake.',
  },
  {
    icon: 'HardHat', // Lucide icon for BOQ/Safety
    title: 'One Day BOQ',
    description: 'Commitment to safety in every project we undertake.',
  },
];

const WhyChooseSection: React.FC = () => {
  // Assuming the background color of the main section is a dark gray/black based on the desktop image
  const SECTION_BG_COLOR = '#f3f7f8';
  const TEXT_COLOR = 'text-black';
  const ACCENT_COLOR = 'text-destructive'; 

  return (
    <section className={cn('w-full py-16', SECTION_BG_COLOR)}>
      <div className="mx-auto max-w-[1280px] px-6">
        
        {/* === TOP HEADER BLOCK === */}
        <div className="mb-12 flex flex-col items-start justify-between lg:flex-row lg:items-start">
          
          {/* Headline and Description */}
          <div className="w-full lg:w-3/4">
            <p className='text-grayN text-3xl lg:text-5xl font-normal'>
              Why Choose
              <RotatingHighlight
               text={"Nirmaan?"}
              />
               {/* <span className="px-2 rounded-md font-bold text-white bg-destructive ml-2">
                Nirmaan?
              </span> */}
              
            </p>
            <p className={cn('text-blackN mt-4 text-lg max-w-2xl', TEXT_COLOR)}>
              Our proprietary planning and tracking technology, curated manpower and large supplier base ensure seamless project delivery.
            </p>
          </div>
          
          {/* Learn More Button */}
          <div className="mt-8 lg:mt-0 flex w-full lg:w-1/4 justify-start lg:justify-end">
            <Button variant="destructive" size="lg" className="px-8 py-3 text-lg font-bold">
              Learn More &gt;
            </Button>
          </div>
        </div>

        {/* === FEATURE CARDS GRID / MOBILE STACK === */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon as keyof typeof LucideIcons}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;