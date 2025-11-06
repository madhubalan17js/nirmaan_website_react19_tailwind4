import React from 'react';
import { cn } from '@/lib/utils';
import ResizableImage from './ResizableImage'; // Assuming path to your ResizableImage component
import RotatingHighlight from './common/RotatingHighlight';

// ==========================================================
// CONSTANTS & DATA
// ==========================================================

const SECTION_BG_COLOR = 'bg-gray-100'; 
const TEXT_COLOR = 'text-gray-700';

// Define card variants for the specific background colors/gradients
const cardVariants = {
  red: 'bg-red-500', 
  purple: 'bg-purple-800',
  cyan: 'bg-cyan-500',
  blue: 'bg-blue-800',
};

// Data for the Cards
const techData = [
  { title: 'Optimised Supply Chain and Procurement', imageSrc: 'supply-chain.jpg', variant: 'red' },
  { title: 'Accurate and Quick BOQ', imageSrc: 'boq-planning.jpg', variant: 'red' },
  { title: 'Robust tracking and reporting', imageSrc: 'tracking-reporting.jpg', variant: 'purple' },
  { title: 'Project Planning', imageSrc: 'project-planning.jpg', variant: 'cyan' },
  { title: 'Project Safety', imageSrc: 'project-safety.jpg', variant: 'red' },
  { title: 'Comprehensive Documentation', imageSrc: 'documentation.jpg', variant: 'blue' },
];


// ==========================================================
// 1. TechCard COMPONENT (Inner Component)
// ==========================================================

type TechCardVariant = 'red' | 'purple' | 'cyan' | 'blue';

interface TechCardProps {
  title: string;
  imageSrc: string;
  variant: TechCardVariant;
  className?: string;
}

const TechCard: React.FC<TechCardProps> = ({
  title,
  imageSrc,
  variant,
  className
}) => {
  const baseBg = cardVariants[variant];

  return (
    <div 
      className={cn(
        'relative h-56 md:h-64 lg:h-80 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.03]',
        className
      )}
    >
      {/* 1. Background Color Layer (The solid card color) */}
      <div className={cn('absolute inset-0', baseBg)} />
      
      {/* 2. Background Image with Opacity/Overlay */}
      <ResizableImage
        src={imageSrc}
        alt={title}
        // Opacity/mix-blend-mode creates the unique color-on-image effect
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        fit="cover"
      />
      
      {/* 3. Text Overlay (Foreground) */}
      <div className="absolute inset-0 p-6 flex items-start justify-start">
        <h3 className="text-xl md:text-2xl font-bold text-white leading-snug max-w-[80%]">
          {title}
        </h3>
      </div>
    </div>
  );
};


// ==========================================================
// 2. AdvancedTechSection COMPONENT (Main container)
// ==========================================================

const AdvancedTechSection: React.FC = () => {

  return (
    <section className={cn('w-full py-16', SECTION_BG_COLOR)}>
      <div className="mx-auto max-w-[1280px] px-6">
        
        {/* === HEADER BLOCK === */}
        <div className="mb-12 max-w-4xl">
          <p className="text-grayN text-3xl lg:text-5xl font-light leading-tight text-gray-700">
            Empowering your <span className="font-bold text-blackN">Industry</span> with <span className="font-bold text-blackN">Innovative</span>
              <span className="hidden lg:inline">
                  <br />
                </span>
              {" "}Advanced 
            
              <RotatingHighlight text=" Technology"/>
          </p>
          <p className={cn('mt-4 text-xl', TEXT_COLOR)}>
            Experience the future of construction with our cutting-edge technology. We prioritize efficiency and sustainability in every project.
          </p>
        </div>

        {/* === ASYMMETRIC GRID: 3-Column Layout === */}
        {/* Base grid: 1 col mobile, 2 col tablet, 12 col desktop (for the 3-6-3 split) */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {techData.map((card, index) => {
            
            // Grid Logic (applies from LG and up):
            // Center Column (Index 1, 4) takes 6/12 columns (50%)
            // Side Columns (Index 0, 2, 3, 5) take 3/12 columns (25%)
            let colSpanClasses = '';
            
            if (index === 1 || index === 4) { // Center Column
                colSpanClasses = 'lg:col-span-6';
            } else { // Side Columns
                colSpanClasses = 'lg:col-span-3';
            }

            return (
              <TechCard
                key={index}
                title={card.title}
                imageSrc={card.imageSrc}
                variant={card.variant as TechCardVariant}
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

export default AdvancedTechSection;