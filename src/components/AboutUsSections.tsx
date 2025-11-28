


// import React from 'react';
// import { cn } from '@/lib/utils';
// import ResizableImage from './ResizableImage';
// import { Link } from 'react-router-dom';
// import { Button } from './ui/button';
// import OurTeam from "../assets/group-positive-young-people-posing-together 1.png";
// import founder1 from "../assets/Generated Image October 09, 2025 - 7_02PM 1.png"
// import RotatingHighlight from './common/RotatingHighlight';
// import { Surveillance_Sysytem_Mobile ,Black_Image} from './images';

// // ==========================================================
// // CONSTANTS & DATA (Keeping everything else the same for context)
// // ==========================================================
// // Define the base color and highlight color for clarity
// const BASE_BG_COLOR = '#f8f8f8'; // Light gray base
// const SOFT_PINK_TINT = 'rgba(249, 237, 238, 1)';
// const SECTION_BG_STYLE = {
//   // Fallback if gradient fails
//   backgroundColor: BASE_BG_COLOR, 
  
//   // Radial gradient focused at the top (0% vertical position)
//   background: `radial-gradient(
//     ellipse at 50% 0%,             /* Positioned at the top center */
//     rgba(255, 255, 255, 1) 0%,     /* Pure white start */
//     rgba(255, 255, 255, 0.8) 15%,  /* Fading white halo */
//     ${SOFT_PINK_TINT} 40%,         /* Strong pink area */
//     ${BASE_BG_COLOR} 80%           /* Transitioning back to the base color */
//   )`,
//   // Crucial: Set background size to ensure the gradient doesn't repeat horizontally/vertically
//   backgroundSize: '100% 100%', 
//   backgroundRepeat: 'no-repeat',
// };
// const TEXT_COLOR = 'text-gray-700';

// // --- LEADERSHIP DATA ---
// const leadershipData = [
//   { name: 'Nitesh Kumar', experience: '15+ years of Industry Expertise', role1: 'B.TECH - IIT Kharagpur', role2: 'MBA - IIM Ahmedabad', image: '/avatars/nitesh.jpg' },
//   { name: 'Divyansh Gupta', experience: '10+ years of Industry Expertise', role1: 'IIT Guwahati', role2: 'B.TECH Machinecal Engineering', image: '/avatars/divyansh.jpg' },
//   { name: 'Kumar Shanu', experience: '10+ years of Industry Expertise', role1: 'IIT Dhanbad', role2: 'M.TECH Electrical Engineering', image: '/avatars/shanu.jpg' },
// ];

// // --- INDUSTRIES DATA (Simplified for layout logic) ---
// const industriesData = [
//   { label: 'Hospitality', image: 'industry-hospitality.jpg' },
//   { label: 'Data Centers', image: 'industry-datacenter.jpg' },
//   { label: 'Pharma Labs', image: 'industry-pharma.jpg' },
//   { label: 'Office Space', image: 'industry-office.jpg' },
//   { label: 'Hospitals', image: 'industry-hospital.jpg' },
//   { label: 'Industries', image: 'industry-factory.jpg' },
// ];


// // ==========================================================
// // 1. LEADERSHIP CARD COMPONENT (Kept as is, assuming it was fixed elsewhere)
// // ==========================================================

// const LeadershipCard: React.FC<typeof leadershipData[0]> = ({ name, experience, role1, role2, image }) => (
//   // Outer Container: Flex column on mobile, no grid structure here
//   <div className="w-full mt-8">
//     <div className="flex-grow relative flex items-center bg-gradient-to-r from-red-50 to-red-100">
//       {/* LEFT: Image Block (Fixed Width) */}
//       <div className="h-60  md:h-60 relative">
//         <ResizableImage src={founder1} alt={name} className="w-full h-full object-cover" fit="fill" lazyLoad={true} />
//       </div>

//       {/* RIGHT: Text/Details Block (Expanded Width with Background) */}
//       <div
//         className="flex-grow p-3 relative flex items-center"
//       >
//         <div className="flex flex-col">
//           <div className='mb-1'>
//             <p className="text-sm md:text-base font-bold text-gray-800 font-bold">{name}</p>
//             <p className="text-[11px]  font-semibold">{experience}</p>
//           </div>

//           <div className='h-1 border-b-2 border-red-500 mt-5'></div>

//           <div className='mt-5'>
//             <p className="text-[11px]  font-bold">{role1}</p>
//             {role2 && <p className="text-[11px]  font-semibold">{role2}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );


// // ==========================================================
// // 2. INDUSTRY CARD COMPONENT (REFINED)
// // ==========================================================

// // --- CUSTOM STYLES FOR SKEUMORPHIC TAG ---
// const TagStyle = {
//     // White to Light Gray gradient for 3D depth
//     background: 'linear-gradient(to bottom, #ffffff 0%, #d4d4d4 100%)', 
//     // Outer shadow (depth) and Inner highlight (sheen)
//     boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.8)',
// };

// const ImageOverlayStyle = {
//     // Defines an ellipse that is wider than it is tall (70% wide, 50% tall)
//     // positioned at the exact center (50% 50%).
//     background: 'radial-gradient(ellipse 90% 100% at 50% 50%, ' + 
//         'rgba(255, 255, 255, 0) 0%, ' +     // Start transparent in the center
//         'rgba(255, 255, 255, 0) 50%, ' +     // Maintain transparency through the middle
//         'rgba(255, 255, 255, 0.7) 80%, ' +  // Transition to semi-white
//         'rgba(255, 255, 255, 1) 100%)',      // Solid white at the horizontal edges
// };

// // --- CUSTOM STYLE FOR CARD BORDER/GLOW ---
// const CardGlowStyle = {
//     // Subtle overall shadow and a light, defined border glow
//     boxShadow: '0 4px 10px rgba(0,0,0,0.1), 0 0 0 1px rgba(0, 0, 0, 0.1)', 
// };


// const IndustryCard: React.FC<typeof industriesData[0] & { className?: string }> = ({ label, image, className }) => (
//   <div
//     className={cn(
//       // Increased rounding (rounded-[32px]) and taller height
//       'relative h-72 md:h-80 rounded-[32px] overflow-hidden bg-white cursor-pointer transition-transform duration-300 hover:scale-[1.02]',
//       className
//     )}
//     style={CardGlowStyle} // Apply subtle shadow/border
//   >
//     <ResizableImage
//       // NOTE: Ensure 'image' path is correct
//       src={Black_Image}
//       alt={label}
//       className="absolute inset-0 w-full h-full object-cover"
//       fit="cover"
//       lazyLoad={true}
//     />

//     {/* Image Fade/Overlay (Absolute positioning) */}
//     <div 
//         className="absolute inset-0 pointer-events-none"
//         style={ImageOverlayStyle}
//     />

//     {/* Tag (Skeuomorphic Pill) */}
//     <div className="absolute top-6 left-6 z-10">
//         <div 
//             className="px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800"
//             style={TagStyle}
//         >
//             {label}
//         </div>
//     </div>
//   </div>
// );

// // ==========================================================
// // 3. MAIN SECTION COMPONENT (AboutUsSections)
// // ==========================================================

// const AboutUsSections: React.FC = () => {
//   return (
//     <section className="w-full py-16" style={SECTION_BG_STYLE}>
//       <div className="mx-auto max-w-[1280px] px-6">

//         {/* ---------------------------------------------------------- */}
//         {/* A. NIRMAAN LEADERSHIP (FIXED)                                */}
//         {/* ---------------------------------------------------------- */}
//         <div className="mb-16">
//           <p className='text-grayN text-3xl lg:text-5xl font-normal'>
//             Nirmaan
//             <RotatingHighlight text="Leadership" />
//           </p>

//           {/* Leadership Cards Grid (Mobile: 1 col stack, Desktop: 3 col) */}
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-4">
//             {leadershipData.map((member, index) => (
//               <LeadershipCard key={index} {...member} />
//             ))}
//           </div>
//         </div>

//         {/* ---------------------------------------------------------- */}
//         {/* B. MEET OUR TEAM                                            */}
//         {/* ---------------------------------------------------------- */}
//         <div className="mb-16">
//           <div className="flex justify-between items-end mb-8">
//             <div>
//               <p className='text-grayN text-3xl lg:text-5xl font-normal'>
//                 Meet our
//                 <RotatingHighlight text="Team" />

//               </p>
//               <p className={cn('text-blackN hidden lg:block mt-2 text-lg max-w-lg', TEXT_COLOR)}>
//                 The strength of our work comes from the people behind it. Meet the team that drives it forward.
//               </p>
//             </div>
//             <Button variant="nirmaanOutline" size="lg" className="px-8 py-3 text-lg font-bold">
//               View All
//             </Button>

//           </div>

//           {/* Team Photo */}
//           <div className="relative w-full overflow-hidden ">
//             <ResizableImage
//               src={OurTeam}
//               alt="Nirmaan Team"
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>

//         {/* ---------------------------------------------------------- */}
//         {/* C. INDUSTRIES WE OPERATE IN (Using Refined IndustryCard)    */}
//         {/* ---------------------------------------------------------- */}
//         <div>
//           <p className='text-grayN text-3xl lg:text-5xl font-normal mb-8'>

//             <RotatingHighlight text="Industries" />
//             we operate in
//           </p>

//           {/* Industries Grid (Mobile: 2 col, Desktop: 10 col layout) */}
//           <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-10 lg:gap-8">
//             {industriesData.map((industry, index) => {

//               // --- Dynamic Spanning Logic (Ensuring 10-column total) ---

//               const colSpanClasses = cn(
//                 'col-span-1 md:col-span-1', // Default 1/2 width on mobile/tablet
                
//                 // LG Screen Spanning: Use 6 columns for wider cards, 4 columns for narrower cards
//                 index === 0 || index === 3 || index === 4 
//                     ? 'lg:col-span-6' 
//                     : 'lg:col-span-4'
//               );
//               return (
//                 <IndustryCard
//                   key={index}
//                   label={industry.label}
//                   image={industry.image}
//                   className={colSpanClasses} 
//                 />
//               );
//             })}
//           </div>


//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutUsSections;

import React from 'react';
import { cn } from '@/lib/utils';
import ResizableImage from './ResizableImage';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import OurTeam from "../assets/group-positive-young-people-posing-together 1.png";
import founder1 from "../assets/Generated Image October 09, 2025 - 7_02PM 1.png"
import RotatingHighlight from './common/RotatingHighlight';
import { Surveillance_Sysytem_Mobile ,Black_Image,  Data_Centers, Hospitality, Hospitals, Office_Space, Pharma_Labs, Industries,
  Data_Centers_Mobile, Hospitality_Mobile, Hospitals_Mobile, Office_Space_Mobile, Pharma_Labs_Mobile, Industries_Mobile
} from './images'; // Assuming path adjustment for image imports

// ==========================================================
// CONSTANTS & DATA
// ==========================================================
// Define the base color and highlight color for clarity
const BASE_BG_COLOR = '#f8f8f8'; // Light gray base
const SOFT_PINK_TINT = 'rgba(249, 237, 238, 1)';
const SECTION_BG_STYLE = {
  // Fallback if gradient fails
  backgroundColor: BASE_BG_COLOR, 
  
  // Radial gradient focused at the top (0% vertical position)
  background: `radial-gradient(
    ellipse at 50% 0%,             /* Positioned at the top center */
    rgba(255, 255, 255, 1) 0%,     /* Pure white start */
    rgba(255, 255, 255, 0.8) 15%,  /* Fading white halo */
    ${SOFT_PINK_TINT} 40%,         /* Strong pink area */
    ${BASE_BG_COLOR} 80%           /* Transitioning back to the base color */
  )`,
  // Crucial: Set background size to ensure the gradient doesn't repeat horizontally/vertically
  backgroundSize: '100% 100%', 
  backgroundRepeat: 'no-repeat',
};
const TEXT_COLOR = 'text-gray-700';


// --- LEADERSHIP DATA --- (Unchanged)
const leadershipData = [
  { name: 'Nitesh Kumar', experience: '15+ years of Industry Expertise', role1: 'B.TECH - IIT Kharagpur', role2: 'MBA - IIM Ahmedabad', image: '/avatars/nitesh.jpg' },
  { name: 'Divyansh Gupta', experience: '10+ years of Industry Expertise', role1: 'IIT Guwahati', role2: 'B.TECH Machinecal Engineering', image: '/avatars/divyansh.jpg' },
  { name: 'Kumar Shanu', experience: '10+ years of Industry Expertise', role1: 'IIT Dhanbad', role2: 'M.TECH Electrical Engineering', image: '/avatars/shanu.jpg' },
];

// --- INDUSTRIES DATA (Using imported image variables) ---
const industriesData = [
  // NOTE: Assuming your imported image variables match the data order
  { label: 'Hospitality', image: Hospitality, mobileSrc: Hospitality_Mobile },
  { label: 'Data Centers', image: Data_Centers, mobileSrc: Data_Centers_Mobile },
  { label: 'Pharma Labs', image: Pharma_Labs, mobileSrc: Pharma_Labs_Mobile },
  { label: 'Office Space', image: Office_Space, mobileSrc: Office_Space_Mobile },
  { label: 'Hospitals', image: Hospitals, mobileSrc: Hospitals_Mobile },
  { label: 'Industries', image: Industries, mobileSrc: Industries_Mobile },
];


// ==========================================================
// 1. LEADERSHIP CARD COMPONENT (Unchanged)
// ==========================================================

const LeadershipCard: React.FC<typeof leadershipData[0]> = ({ name, experience, role1, role2, image }) => (
  // Outer Container: Flex column on mobile, no grid structure here
  <div className="w-full mt-8">
    <div className="flex-grow relative flex items-center bg-gradient-to-r from-red-50 to-red-100">
      {/* LEFT: Image Block (Fixed Width) */}
      <div className="h-60  md:h-60 relative">
        <ResizableImage src={founder1} alt={name} className="w-full h-full object-cover" fit="fill" lazyLoad={true} />
      </div>

      {/* RIGHT: Text/Details Block (Expanded Width with Background) */}
      <div
        className="flex-grow p-3 relative flex items-center"
      >
        <div className="flex flex-col">
          <div className='mb-1'>
            <p className="text-sm md:text-base font-bold text-gray-800 font-bold">{name}</p>
            <p className="text-[11px]  font-semibold">{experience}</p>
          </div>

          <div className='h-1 border-b-2 border-red-500 mt-5'></div>

          <div className='mt-5'>
            <p className="text-[11px]  font-bold">{role1}</p>
            {role2 && <p className="text-[11px]  font-semibold">{role2}</p>}
          </div>
        </div>
      </div>
    </div>
  </div>
);


// ==========================================================
// 2A. MOBILE INDUSTRY CARD COMPONENT (ADJUSTED for text color)
// ==========================================================

interface MobileIndustryCardProps {
  label: string;
  imageSrc: string;
}

const MobileIndustryCard: React.FC<MobileIndustryCardProps> = ({ label, imageSrc }) => {
    // Mobile Text Color Logic: White only for 'Pharma Labs', Black for all others
    const isPharmaLabs = label === 'Pharma Labs';
    const textColorClass = isPharmaLabs ? 'text-white' : 'text-blackN';
    
    // Background style for the tag pill (Subtle Black/Transparent)
    const tagBgClass = isPharmaLabs ? 'bg-black/30' : 'bg-white/70';


    return (
        <div
          className={cn(
            // Mobile dimensions (2 col grid requires smaller height)
            'relative h-40 rounded-[12px] overflow-hidden bg-white cursor-pointer transition-transform duration-300 hover:scale-[1.02]',
            'col-span-1' // Ensures it fits the 2-column mobile grid
          )}
          style={CardGlowStyle} // Apply subtle shadow/border
        >
          <ResizableImage
            src={imageSrc}
            alt={label}
            className="absolute inset-0 w-full h-full object-cover"
            fit="cover"
            lazyLoad={true}
          />

          {/* Tag (Simple Pill for Mobile) */}
          <div className="absolute top-4 left-4 z-10">
              <div 
                  // Applying conditional text color and background class
                  className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-[1px]",
                      textColorClass, // Conditional text color
                      tagBgClass      // Conditional background/transparency
                  )}
              >
                  {label}
              </div>
          </div>
        </div>
    );
};


// ==========================================================
// 2B. DESKTOP INDUSTRY CARD COMPONENT (Unchanged)
// ==========================================================

// --- CUSTOM STYLES FOR SKEUMORPHIC TAG ---
const TagStyle = {
    // White to Light Gray gradient for 3D depth
    background: 'linear-gradient(to bottom, #eeececff 0%, #d4d4d4 100%)', 
    // Outer shadow (depth) and Inner highlight (sheen)
    boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.8)',
};

// const ImageOverlayStyle = {
//     // Fades image out to white at the horizontal edges
//     background: 'radial-gradient(ellipse 90% 100% at 50% 50%, ' + 
//         'rgba(255, 255, 255, 0) 0%, ' +     
//         'rgba(255, 255, 255, 0) 50%, ' +     
//         'rgba(255, 255, 255, 0.7) 80%, ' +  
//         'rgba(255, 255, 255, 1) 100%)',      
// };

// --- CUSTOM STYLE FOR CARD BORDER/GLOW ---
const CardGlowStyle = {
    // Subtle overall shadow and a light, defined border glow
    boxShadow: '0 4px 10px rgba(0,0,0,0.1), 0 0 0 1px rgba(0, 0, 0, 0.1)', 
};


const DesktopIndustryCard: React.FC<typeof industriesData[0] & { className?: string }> = ({ label, image, className }) => (
  <div
    className={cn(
      // Taller height for desktop
      'relative h-72 md:h-80 rounded-[16px] overflow-hidden bg-white cursor-pointer transition-transform duration-300 hover:scale-[1.02]',
      className
    )}
    style={CardGlowStyle} // Apply subtle shadow/border
  >
    <ResizableImage
      src={image}
      alt={label}
      className="absolute inset-0 w-full h-full object-cover"
      fit="cover"
      lazyLoad={true}
    />

    {/* Image Fade/Overlay (Absolute positioning) */}
    <div 
        className="absolute inset-0 pointer-events-none"
        // style={ImageOverlayStyle}
    />

    {/* Tag (Skeuomorphic Pill) */}
    <div className="absolute top-6 left-6 z-10">
        <div 
            className="px-4 py-1.5 rounded-full text-sm font-bold  shadow-md"
            style={TagStyle}
        >
            {label}
        </div>
    </div>
  </div>
);

// ==========================================================
// 3. MAIN SECTION COMPONENT (AboutUsSections)
// ==========================================================

const AboutUsSections: React.FC = () => {
  return (
    <section className="w-full py-16" style={SECTION_BG_STYLE}>
      <div className="mx-auto max-w-[1280px] px-6">

        {/* ---------------------------------------------------------- */}
        {/* A. NIRMAAN LEADERSHIP (Unchanged)                             */}
        {/* ---------------------------------------------------------- */}
        <div className="mb-16">
          <p className='text-grayN text-3xl lg:text-5xl font-normal'>
            Nirmaan
            <RotatingHighlight text="Leadership" />
          </p>

          {/* Leadership Cards Grid (Mobile: 1 col stack, Desktop: 3 col) */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-4">
            {leadershipData.map((member, index) => (
              <LeadershipCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* B. MEET OUR TEAM (Unchanged)                                */}
        {/* ---------------------------------------------------------- */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className='text-grayN text-3xl lg:text-5xl font-normal'>
                Meet our
                <RotatingHighlight text="Team" />

              </p>
              <p className={cn('text-blackN hidden lg:block mt-2 text-lg max-w-lg', TEXT_COLOR)}>
                The strength of our work comes from the people behind it. Meet the team that drives it forward.
              </p>
            </div>
            <Button variant="nirmaanOutline" size="lg" className="px-8 py-3 text-lg font-bold">
              View All
            </Button>

          </div>

          {/* Team Photo */}
          <div className="relative w-full overflow-hidden ">
            <ResizableImage
              src={OurTeam}
              alt="Nirmaan Team"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* C. INDUSTRIES WE OPERATE IN (FIXED LAYOUT LOGIC)            */}
        {/* ---------------------------------------------------------- */}
        <div>
          <p className='text-grayN text-3xl lg:text-5xl font-normal mb-8'>
            <RotatingHighlight text="Industries" />
            we operate in
          </p>

          {/* === MOBILE GRID: 2 Columns (< LG) === */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:hidden">
            {industriesData.map((industry, index) => (
              <MobileIndustryCard
                key={index}
                label={industry.label}
                imageSrc={industry.mobileSrc}
              />
            ))}
          </div>


          {/* === DESKTOP GRID: Asymmetric 10-Column Layout (>= LG) === */}
          <div className="hidden lg:grid grid-cols-10 gap-8">
            {industriesData.map((industry, index) => {

              // --- Dynamic Spanning Logic (Copied from WhatWeOfferSection) ---
              // index 0, 3, 4 get 6/10 columns (60%)
              // index 1, 2, 5 get 4/10 columns (40%)
              const colSpanClasses = 
                index === 0 || index === 3 || index === 4 
                    ? 'lg:col-span-6' 
                    : 'lg:col-span-4';
              
              return (
                <DesktopIndustryCard
                  key={index}
                  label={industry.label}
                  image={industry.image} // This is the desktop image source
                  mobileSrc={industry.mobileSrc} // Kept for interface definition but unused here
                  className={colSpanClasses} 
                />
              );
            })}
          </div>


        </div>

      </div>
    </section>
  );
};

export default AboutUsSections;