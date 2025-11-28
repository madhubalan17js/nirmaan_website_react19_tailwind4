


// import React from 'react';
// import { cn } from '@/lib/utils';
// import ResizableImage from './ResizableImage'; // Assuming path to your ResizableImage component
// import RotatingHighlight from './common/RotatingHighlight';

// // ==========================================================
// // CONSTANTS & DATA
// // ==========================================================

// const SECTION_BG_COLOR = 'bg-gray-100'; 
// const TEXT_COLOR = 'text-gray-700';

// // Define card variants for the specific background colors/gradients
// const cardVariants = {
//   red: 'bg-red-500', 
//   purple: 'bg-purple-800',
//   cyan: 'bg-cyan-500',
//   blue: 'bg-blue-800',
// };

// // Data for the Cards
// const techData = [
//   { title: 'Optimised Supply Chain and Procurement', imageSrc: 'supply-chain.jpg', variant: 'red' },
//   { title: 'Accurate and Quick BOQ', imageSrc: 'boq-planning.jpg', variant: 'red' },
//   { title: 'Robust tracking and reporting', imageSrc: 'tracking-reporting.jpg', variant: 'purple' },
//   { title: 'Project Planning', imageSrc: 'project-planning.jpg', variant: 'cyan' },
//   { title: 'Project Safety', imageSrc: 'project-safety.jpg', variant: 'red' },
//   { title: 'Comprehensive Documentation', imageSrc: 'documentation.jpg', variant: 'blue' },
// ];


// // ==========================================================
// // 1. TechCard COMPONENT (Inner Component)
// // ==========================================================

// type TechCardVariant = 'red' | 'purple' | 'cyan' | 'blue';

// interface TechCardProps {
//   title: string;
//   imageSrc: string;
//   variant: TechCardVariant;
//   className?: string;
// }

// const TechCard: React.FC<TechCardProps> = ({
//   title,
//   imageSrc,
//   variant,
//   className
// }) => {
//   const baseBg = cardVariants[variant];

//   return (
//     <div 
//       className={cn(
//         'relative h-56 md:h-64 lg:h-80 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.03]',
//         className
//       )}
//     >
//       {/* 1. Background Color Layer (The solid card color) */}
//       <div className={cn('absolute inset-0', baseBg)} />
      
//       {/* 2. Background Image with Opacity/Overlay */}
//       <ResizableImage
//         src={imageSrc}
//         alt={title}
//         // Opacity/mix-blend-mode creates the unique color-on-image effect
//         className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
//         fit="cover"
//       />
      
//       {/* 3. Text Overlay (Foreground) */}
//       <div className="absolute inset-0 p-6 flex items-start justify-start">
//         <h3 className="text-xl md:text-2xl font-bold text-white leading-snug max-w-[80%]">
//           {title}
//         </h3>
//       </div>
//     </div>
//   );
// };


// // ==========================================================
// // 2. AdvancedTechSection COMPONENT (Main container)
// // ==========================================================

// const AdvancedTechSection: React.FC = () => {

//   return (
//     <section className={cn('w-full py-16', SECTION_BG_COLOR)}>
//       <div className="mx-auto max-w-[1280px] px-6">
        
//         {/* === HEADER BLOCK === */}
//         <div className="mb-12 max-w-4xl">
//           <p className="text-grayN text-3xl lg:text-5xl font-light leading-tight text-gray-700">
//             Empowering your <span className="font-bold text-blackN">Industry</span> with <span className="font-bold text-blackN">Innovative</span>
//               <span className="hidden lg:inline">
//                   <br />
//                 </span>
//               {" "}Advanced 
            
//               <RotatingHighlight text=" Technology"/>
//           </p>
//           <p className={cn('mt-4 text-xl', TEXT_COLOR)}>
//             Experience the future of construction with our cutting-edge technology. We prioritize efficiency and sustainability in every project.
//           </p>
//         </div>

//         {/* === ASYMMETRIC GRID: 3-Column Layout === */}
//         {/* Base grid: 1 col mobile, 2 col tablet, 12 col desktop (for the 3-6-3 split) */}
//         <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
//           {techData.map((card, index) => {
            
//             // Grid Logic (applies from LG and up):
//             // Center Column (Index 1, 4) takes 6/12 columns (50%)
//             // Side Columns (Index 0, 2, 3, 5) take 3/12 columns (25%)
//             let colSpanClasses = '';
            
//             if (index === 1 || index === 4) { // Center Column
//                 colSpanClasses = 'lg:col-span-6';
//             } else { // Side Columns
//                 colSpanClasses = 'lg:col-span-3';
//             }

//             return (
//               <TechCard
//                 key={index}
//                 title={card.title}
//                 imageSrc={card.imageSrc}
//                 variant={card.variant as TechCardVariant}
//                 // Apply the responsive col-span classes
//                 className={colSpanClasses}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };


// export default AdvancedTechSection;

// ... (imports and data unchanged)

// ==========================================================
// 1. TechCard COMPONENT (Inner Component)
// ==========================================================

import React from 'react';
import { cn } from '@/lib/utils';
import ResizableImage from './ResizableImage'; // Assuming path to your ResizableImage component
import RotatingHighlight from './common/RotatingHighlight';
// --- CORRECTED IMAGE IMPORTS ---
import {
  Accurate_and_Quick_BOQ, Robust_Tracking_and_Reporting, Project_Planning, 
  Project_Safety, Comprehensive_Documentation, Optimised_Supply_Chain_and_Procurement,
  Accurate_and_Quick_BOQ_Mobile, Robust_Tracking_and_Reporting_Mobile, Project_Planning_Mobile, 
  Project_Safety_Mobile, Comprehensive_Documentation_Mobile, Optimised_Supply_Chain_and_Procurement_Mobile, 
} from './images'; // Assuming these imports are available in '../images'

// ==========================================================
// CONSTANTS & DATA
// ==========================================================

const SECTION_BG_COLOR = 'bg-gray-100'; 
const TEXT_COLOR = 'text-gray-700';

// Data for the Cards - ADDING DESCRIPTIONS
const techData = [
  { 
    title: 'Optimised Supply Chain and Procurement', 
    description: '',
    imageSrc: Optimised_Supply_Chain_and_Procurement, 
    mobileImageSrc: Optimised_Supply_Chain_and_Procurement_Mobile,
  },
  { 
    title: 'Accurate and Quick BOQ', 
    description: 'We deliver precise and timely BOQs, helping clients estimate costs accurately and make informed project decisions faster.',
    imageSrc: Accurate_and_Quick_BOQ, 
    mobileImageSrc: Accurate_and_Quick_BOQ_Mobile,
  },
  { 
    title: 'Robust tracking and reporting', 
    description: 'We offer real-time project tracking and detailed reports, ensuring complete transparency and control throughout every phase.',
    imageSrc: Robust_Tracking_and_Reporting, 
    mobileImageSrc: Robust_Tracking_and_Reporting_Mobile,
  },
  { 
    title: 'Project Planning', 
    description: 'We create structured, efficient project plans that align timelines, resources, and budgets for seamless execution and delivery.',
    imageSrc: Project_Planning, 
    mobileImageSrc: Project_Planning_Mobile,
  },
  { 
    title: 'Project Safety', 
    description: 'We implement rigorous safety protocols and regular audits to ensure secure, compliant, and risk-free project environments.',
    imageSrc: Project_Safety, 
    mobileImageSrc: Project_Safety_Mobile,
  },
  { 
    title: 'Comprehensive Documentation', 
    description: 'From approvals to handovers, we ensure compliance, clarity, and easy access for clients.',
    imageSrc: Comprehensive_Documentation, 
    mobileImageSrc: Comprehensive_Documentation_Mobile,
  },
];

// ==========================================================
// 1A. MobileTechCard COMPONENT (< LG)
// ==========================================================

interface MobileTechCardProps {
  title: string;
  imageSrc: string; // Should be the mobile image
}

const MobileTechCard: React.FC<MobileTechCardProps> = ({
  title,
  imageSrc,
}) => {

  // Mobile Text Color Logic: Black for 'Project Planning', White for all others
  const isProjectPlanning = title === 'Project Planning';
  const textColorClass = isProjectPlanning ? 'text-blackN' : 'text-white';

  return (
    <div 
      className="relative h-[140px] w-auto rounded-xl overflow-hidden md:hidden"
      
    >
      {/* Background Image (Mobile) */}
      <ResizableImage
        src={imageSrc}
        alt={`${title} (Mobile)`}
        className="absolute inset-0 w-auto h-full object-cover"
        fit="cover"
      />
      
      {/* Text Overlay (Foreground) */}
      <div 
        className={cn(
          "absolute inset-0 p-2 flex items-start justify-start",
          textColorClass // Apply mobile color
        )}
      >
        <p className="text-xs font-semibold leading-snug max-w-[90%]">
          {title}
        </p>
      </div>
    </div>
  );
};


// ==========================================================
// 1B. DesktopTechCard COMPONENT (>= LG)
// ==========================================================

interface DesktopTechCardProps {
  title: string;
  description: string;
  imageSrc: string; // Should be the desktop image
  className?: string; // For the col-span logic
}

const DesktopTechCard: React.FC<DesktopTechCardProps> = ({
  title,
  description,
  imageSrc,
  className
}) => {

  // Desktop Text Color Logic: White for 'Robust...' and 'Comprehensive...', Black for all others
  const isWhiteText = title === 'Robust tracking and reporting' || title === 'Comprehensive Documentation';
  const textColorClass = isWhiteText ? 'text-white' : 'text-blackN';

  return (
    <div 
      className={cn(
        // Desktop dimensions and styling
        'relative h-68 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.03]',
        className
      )}
    >
      {/* Background Image (Desktop) */}
      <ResizableImage
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-fill"
      />
      
      {/* Text Overlay (Foreground) */}
      <div 
        className={cn(
          "absolute inset-0 p-4 flex flex-col justify-between",
          textColorClass // Apply desktop color
        )}
      >
        
        {/* TOP: Title Block */}
        <div className="flex-grow-0">
          <h3 className="text-xl font-bold leading-snug max-w-[80%]">
            {title}
          </h3>
        </div>
        
        {/* BOTTOM: Description Block */}
        {description && (
          <div className="flex-shrink-0 mt-4 max-w-[60%]">
            <p className="text-sm font-medium leading-snug">
              {description}
            </p>
          </div>
        )}
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

        {/* ======================================================= */}
        {/* MOBILE GRID: grid-cols-2 (Show below LG) */}
        {/* ======================================================= */}
        <div className="grid grid-cols-2 gap-6 lg:hidden">
          {techData.map((card, index) => (
            <MobileTechCard
              key={index}
              title={card.title}
              imageSrc={card.mobileImageSrc}
            />
          ))}
        </div>

        {/* ======================================================= */}
        {/* DESKTOP GRID: Asymmetric 3-6-3 Split (Show at LG and up) */}
        {/* ======================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-8">
          {techData.map((card, index) => {
            
            // Grid Logic (applies from LG and up):
            // Center Column (Index 1, 4) takes 6/12 columns (50%)
            // Side Columns (Index 0, 2, 3, 5) take 3/12 columns (25%)
            let colSpanClasses = '';
            
            if (index === 1 || index === 4) { // Center Column
                colSpanClasses = 'col-span-6';
            } else { // Side Columns
                colSpanClasses = 'col-span-3';
            }

            return (
              <DesktopTechCard
                key={index}
                title={card.title}
                description={card.description} 
                imageSrc={card.imageSrc}
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