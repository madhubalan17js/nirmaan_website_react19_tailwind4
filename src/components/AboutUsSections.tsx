import React from 'react';
import { cn } from '@/lib/utils';
import ResizableImage from './ResizableImage';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import OurTeam from "../assets/group-positive-young-people-posing-together 1.png";
import founder1 from "../assets/Generated Image October 09, 2025 - 7_02PM 1.png"
import RotatingHighlight from './common/RotatingHighlight';

// ==========================================================
// CONSTANTS & DATA
// ==========================================================

const SECTION_BG_STYLE = {
  background: 'linear-gradient(to bottom, #f8f8f8 0%, rgba(249, 237, 238, 1) 30%, rgba(255, 255, 255, 0.8) 100%)',
};
const TEXT_COLOR = 'text-gray-700';
const BG_RED_COLOR = 'bg-destructive';
const HEADER_TEXT_COLOR = 'text-gray-800';

// --- LEADERSHIP DATA ---
const leadershipData = [
  // NOTE: Added dummy education/role for completeness
  { name: 'Nitesh Kumar', experience: '15+ years of Industry Expertise', role1: 'B.TECH - IIT Kharagpur', role2: 'MBA - IIM Ahmedabad', image: '/avatars/nitesh.jpg' },
  { name: 'Divyansh Gupta', experience: '10+ years of Industry Expertise', role1: 'B.TECH - IIT Guwahati', role2: '', image: '/avatars/divyansh.jpg' },
  { name: 'Kumar Shanu', experience: '10+ years of Industry Expertise', role1: 'M.TECH - IIT Dhanbad', role2: '', image: '/avatars/shanu.jpg' },
];

// --- INDUSTRIES DATA (Simplified for layout logic) ---
const industriesData = [
  { label: 'Hospitality', image: 'industry-hospitality.jpg' },
  { label: 'Data Centers', image: 'industry-datacenter.jpg' },
  { label: 'Pharma Labs', image: 'industry-pharma.jpg' },
  { label: 'Office Space', image: 'industry-office.jpg' },
  { label: 'Hospitals', image: 'industry-hospital.jpg' },
  { label: 'Industries', image: 'industry-factory.jpg' },
];



// ==========================================================
// 1. LEADERSHIP CARD COMPONENT (FIXED)
// ==========================================================

const LeadershipCard: React.FC<typeof leadershipData[0]> = ({ name, experience, role1, role2, image }) => (
  // Outer Container: Flex column on mobile, no grid structure here
  <div className="w-full">
    <div className="flex flex-row items-center rounded-xl overflow-hidden shadow-lg bg-white">

      {/* LEFT: Image Block (Fixed Width) */}
      <div className="flex-shrink-0 w-28 h-28 md:w-32 md:h-32 relative">
        <ResizableImage src={founder1} alt={name} className="w-full h-full object-cover" fit="cover" />
      </div>

      {/* RIGHT: Text/Details Block (Expanded Width with Background) */}
      <div
        className="flex-grow h-28 md:h-32 p-3 relative flex items-center"
        style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(249, 237, 238, 1) 100%)' }} // Pink/Red Gradient Background
      >
        <div>
          <p className="text-sm md:text-base font-bold text-gray-800">{name}</p>
          <p className="text-xs text-gray-600 mt-1">{experience}</p>
          <p className="text-xs text-gray-600">{role1}</p>
          {role2 && <p className="text-xs text-gray-600">{role2}</p>}
        </div>
      </div>
    </div>
  </div>
);

// ==========================================================
// 2. INDUSTRY CARD COMPONENT
// ==========================================================
const IndustryCard: React.FC<typeof industriesData[0] & { className?: string }> = ({ label, image, className }) => (
  <div 
    className={cn(
        // FIX 1: Increased mobile height from h-48 (192px) to h-56 (224px) for better visual appeal
        'relative h-56 md:h-64 rounded-xl overflow-hidden shadow-lg', 
        className
    )}
  >
    <ResizableImage
      src={image}
      alt={label}
      className="absolute inset-0 w-full h-full object-cover"
      fit="cover"
      lazyLoad={true}
    />
    
    {/* FIX 2: Stronger White Vignette/Overlay for label visibility */}
    <div
      className="absolute inset-0"
      style={{ 
          // Stronger radial gradient to push the white further from the center
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,1) 85%)' 
      }}
    />
    
    {/* FIX 3: Label Sticker (Slightly larger text/padding) */}
    <div className="absolute top-3 left-3 px-4 py-1.5 rounded-full bg-white shadow-xl"> {/* Rounded-full for pill shape */}
      <p className="text-xs md:text-sm font-bold text-gray-800">{label}</p>
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
        {/* A. NIRMAAN LEADERSHIP (FIXED)                                */}
        {/* ---------------------------------------------------------- */}
        <div className="mb-16">
         <p className='text-3xl lg:text-5xl font-normal mb-8'>
            Nirmaan
            <RotatingHighlight text="Leadership"/>
          </p>

          {/* Leadership Cards Grid (Mobile: 1 col stack, Desktop: 3 col) */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {leadershipData.map((member, index) => (
              <LeadershipCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* B. MEET OUR TEAM                                            */}
        {/* ---------------------------------------------------------- */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className='text-3xl lg:text-5xl font-normal'>
                Meet our
                <RotatingHighlight text="Team"/>
                
              </p>
              <p className={cn(' hidden lg:block mt-2 text-lg max-w-lg', TEXT_COLOR)}>
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
        {/* C. INDUSTRIES WE OPERATE IN                                 */}
        {/* ---------------------------------------------------------- */}
        <div>
          <p className='text-3xl lg:text-5xl font-normal mb-8'>
            
            <RotatingHighlight text="Industries"/>
             we operate in
          </p>

          {/* Industries Grid (Mobile: 2 col, Desktop: 4 col with spanning) */}
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-10 lg:gap-8">
            {industriesData.map((industry, index) => {
                
                // --- Dynamic Spanning Logic ---
              
                          const colSpanClasses = cn(
                              // Mobile/Tablet: Still span full width (col-span-2 on md)
                              'md:col-span-2', 
              
                              // Desktop (LG and up) Split:
                              index===0 || index===3 || index===4 ? 'lg:col-span-6' : 'lg:col-span-4'
                          );
                return (
                    <IndustryCard 
                        key={index} 
                        label={industry.label} 
                        image={industry.image}
                        className={colSpanClasses} // Apply the calculated span
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