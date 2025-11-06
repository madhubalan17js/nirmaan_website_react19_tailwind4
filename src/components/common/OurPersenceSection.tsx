

// import React from 'react';
// import { Button } from '../ui/button';
// import { cn } from '@/lib/utils';
// import ResizableImage from '../ResizableImage';

// // ==========================================================
// // CONSTANTS & DATA
// // ==========================================================

// const SECTION_BG_COLOR = 'bg-gray-100';
// const HEADLINE_COLOR = 'text-gray-800';
// const TEXT_COLOR = 'text-gray-700';
// const ACCENT_COLOR = 'text-destructive';
// const BUTTON_OUTLINE_COLOR = 'border-destructive text-destructive bg-white';
// const LINE_COLOR = 'border-destructive';
// const DOT_COLOR = 'bg-destructive';
// // Dummy Imports (Replace with actual paths)
// import INDIA_MAP_IMAGE from '../../assets/Indiamap.png';
// import TIMELINE_IMAGE_1 from '../../assets/Indiamap.png';
// import TIMELINE_IMAGE_2 from '../../assets/Indiamap.png';

// const metricsData = [
//     { value: '90+', label: 'Projects' },
//     { value: '8.5 lac+', label: 'Square Feet' },
//     { value: '100+', label: 'Partners' },
// ];

// const timelineData = [
//     {
//         year: '2021', headline: 'Laying the', keyword: 'Foundation',
//         bullets: ['Completed our first 15 landmark projects.', 'Secured our first 5 key clients.'],
//         imageSrc: TIMELINE_IMAGE_1,
//     },
//     {
//         year: '2022', headline: 'Accelerated', keyword: 'Growth',
//         bullets: ['Expanded operations to 5 major cities.', 'Completed over 75 projects.'],
//         imageSrc: TIMELINE_IMAGE_2,
//     },
//     {
//         year: '2023', headline: 'Scaling', keyword: 'Impact',
//         bullets: ['Successfully delivered our largest-ever commercial project.', 'Completed over 200 projects.'],
//         imageSrc: TIMELINE_IMAGE_1, // Placeholder
//     },
//     {
//         year: '2024', headline: 'Nationwide', keyword: 'Reach',
//         bullets: ['Exceeded the 350-project milestone.', 'Expanded our footprint to 15+ cities nationwide.'],
//         imageSrc: TIMELINE_IMAGE_2, // Placeholder
//     },
// ];


// // ==========================================================
// // MAIN COMPONENT: OurPresenceSection (Merged Logic)
// // ==========================================================

// const OurPresenceSection: React.FC = () => {
//     return (
//         <section className={cn('w-full py-16', SECTION_BG_COLOR)}>
//             <div className="mx-auto max-w-[1280px] px-6">

//                 {/* ========================================================== */}
//                 {/* 1. PRESENCE / STATS BLOCK (Mobile: Stacked, Desktop: 2-Column) */}
//                 {/* ========================================================== */}
//                 <div className="flex flex-col-reverse lg:flex-row justify-between items-center mb-16">

//                     {/* LEFT: Text, Buttons, and Metrics (60% Width on Desktop) */}
//                     <div className="w-full lg:w-3/5 text-left order-last lg:order-first">
//                         <p className="text-3xl lg:text-5xl font-light leading-tight text-gray-700">
//                             Our

//                             <span className="px-2 rounded-md font-bold text-white bg-destructive ml-2">
//                                 Presence
//                             </span>
//                         </p>
//                         <p className={cn('mt-4 text-lg max-w-2xl', TEXT_COLOR)}>
//                             We provide consistent and hassle-free services across the nation by leveraging our proprietary technology-based execution and monitoring systems.
//                         </p>

//                         <div className="mt-8 flex space-x-4">
//                             <Button variant="destructive" size="lg" className="px-8 py-3 text-lg font-bold">
//                                 Contact
//                             </Button>
//                             <Button size="lg" className={cn("px-8 py-3 text-lg font-bold", BUTTON_OUTLINE_COLOR)} onClick={() => console.log('Learn More clicked')}>
//                                 Learn More
//                             </Button>
//                         </div>

//                         {/* Metrics/Stats (90+ Projects, 8.5 Lac+, 100+ Partners) */}
//                         <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg">
//                             {metricsData.map((metric, index) => (
//                                 <div key={index} className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-300 bg-white shadow-lg">
//                                     <p className={cn('text-3xl lg:text-5xl font-extrabold', ACCENT_COLOR)}>
//                                         {metric.value}
//                                     </p>
//                                     <p className={cn('text-sm lg:text-base font-semibold text-gray-700 mt-1')}>
//                                         {metric.label}
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* RIGHT: Map Image (40% Width on Desktop) */}
//                     <div className="hidden lg:block w-full lg:w-2/5 mb-8 lg:mb-0 relative h-full">
//                         <ResizableImage
//                             src={INDIA_MAP_IMAGE}
//                             alt="Nationwide Presence Map"
//                             className="w-full h-auto object-contain"
//                         />
//                     </div>
//                 </div>

//                 {/* ========================================================== */}
//                 {/* 2. TIMELINE / REACH BLOCK (Vertical Timeline) */}
//                 {/* ========================================================== */}
//                 <div className="w-full pt-8">
//                     {/* Header */}
//                     <div className='lg:flex flex-row gap-18'>
//                         <p className="text-3xl lg:text-5xl font-light leading-tight text-gray-700">
//                             Our Nationwide Reach and
//                             <span className="px-2 rounded-md font-bold text-white bg-destructive ml-2">
//                                 Impact
//                             </span>

//                         </p>
//                         <p className='mt-4'>
//                             Explore our extensive presence across India. We proudly serve over 15 cities with a commitment to excellence.
//                         </p>
//                     </div>


//                     {/* Timeline Content */}
//                     <div className="relative w-full py-8">

//                         {/* Vertical Timeline Line (Hidden on mobile, runs down the center of the desktop layout) */}
//                         <div className={cn('absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] hidden lg:block', LINE_COLOR)}></div>

//                         {timelineData.map((item, index) => {
//                             const isLeftAligned = index % 2 === 0; // For desktop logic

//                             return (
//                                 <div
//                                     key={item.year}
//                                     className={cn(
//                                         'relative w-full py-8 lg:py-12',
//                                         // Desktop positioning: Alternating left/right
//                                         isLeftAligned ? 'lg:pr-[50%] lg:text-right' : 'lg:pl-[50%] lg:text-left'
//                                     )}
//                                 >

//                                     {/* Timeline Dot (Crucial for mobile and desktop alignment) */}
//                                     <div className={cn(
//                                         // Mobile: Left-aligned dot (to the side of the content block)
//                                         // Desktop: Center dot
//                                         'absolute left-0 lg:left-1/2 transform -translate-x-1/2 top-10 h-6 w-6 rounded-full border-4 border-white shadow-lg',
//                                         DOT_COLOR
//                                     )}></div>

//                                     {/* Content Container: The entire item block */}
//                                     <div className={cn(
//                                         'flex flex-col space-y-3',
//                                         // Mobile Spacing: Add margin to the left to avoid the dot/imaginary line
//                                         'pl-10',
//                                         isLeftAligned ? 'lg:pr-10' : 'lg:pl-10' // Desktop padding
//                                     )}>

//                                         {/* Inner Content Block: All text elements stack on mobile */}
//                                         <div className="flex flex-col space-y-4">

//                                             {/* Text Block (Full-width on mobile) */}
//                                             <div className="w-full">
//                                                 {/* Year */}
//                                                 <p className={cn('text-2xl font-bold', TEXT_COLOR)}>
//                                                     {item.year}
//                                                 </p>

//                                                 {/* Headline */}
//                                                 <h3 className={cn('text-xl lg:text-3xl font-normal', TEXT_COLOR)}>
//                                                     {item.headline}
//                                                     <span className={cn('inline-block px-2 rounded-md ml-2 text-white font-bold text-xl', ACCENT_COLOR)}>
//                                                         {item.keyword}
//                                                     </span>
//                                                 </h3>

//                                                 {/* Description/Bullets */}
//                                                 <ul className={cn(
//                                                     'mt-3 text-lg font-medium list-disc list-inside space-y-1',
//                                                     TEXT_COLOR,
//                                                     // Remove desktop-only padding/alignment
//                                                 )}>
//                                                     {item.bullets.map((bullet, bIndex) => (
//                                                         <li key={bIndex}>{bullet}</li>
//                                                     ))}
//                                                 </ul>
//                                             </div>

//                                             {/* Image Block (Full-width on mobile, always at the bottom of the text block) */}
//                                             <div className="w-full mt-4 rounded-xl overflow-hidden shadow-2xl">
//                                                 <ResizableImage
//                                                     src={item.imageSrc}
//                                                     alt={item.headline}
//                                                     className="w-full h-auto object-cover"
//                                                 />
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default OurPresenceSection;

import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import ResizableImage from '../ResizableImage'; // Assuming the path to your reusable image component
import { Mail, Phone, X, Linkedin } from 'lucide-react'; // Example imports for completeness
import RotatingHighlight from './RotatingHighlight';

// ==========================================================
// CONSTANTS & DATA (TIMELINE & PRESENCE)
// ==========================================================

const SECTION_BG_COLOR = 'bg-white'; 
const RED_COLOR = 'text-destructive';
const BG_RED_COLOR = 'bg-destructive';
const TEXT_COLOR = 'text-gray-800';
const MUTE_TEXT_COLOR = 'text-gray-600';
const BUTTON_OUTLINE_COLOR = 'border-destructive text-destructive bg-white'; 

// --- PRESENCE/STATS DATA ---
const INDIA_MAP_IMAGE = '../../assets/Indiamap.png'; // Placeholder path
const metricsData = [
    { value: '90+', label: 'Projects' },
    { value: '8.5 lac+', label: 'Square Feet' },
    { value: '100+', label: 'Partners' },
];

// --- TIMELINE DATA ---
interface TimelineEntry {
  year: string
  title: string
  titleHighlight: string
  description: string
  bulletPoints: string[]
  image: string
  imageAlt: string
}

const timelineData: TimelineEntry[] = [
  // NOTE: Image paths are placeholder and need to be corrected in the consuming app
  {
    year: "2021", title: "Laying the ", titleHighlight: "Foundation", description: "We laid our foundation by completing our first 15 landmark projects and securing our first 5 key clients.",
    bulletPoints: ["Completed our first 15 landmark projects.", "Secured our first 5 key clients.", "Grew our founding team to 20 members."],
    image: "/abstract-foundation-architecture.jpg", imageAlt: "Foundation milestone",
  },
  {
    year: "2022", title: "Accelerated ", titleHighlight: "Growth", description: "Fueled by innovation and efficiency, we continue to scale new heights in project delivery, expanding our footprint and strengthening our capabilities across India.",
    bulletPoints: ["Expanded operations to 5 major cities.", "Completed over 75 projects.", "Achieved a 200% increase in project volume."],
    image: "/growth-expansion-network.jpg", imageAlt: "Growth milestone",
  },
  {
    year: "2023", title: "Scaling ", titleHighlight: "Impact", description: "Through consistent delivery and strategic partnerships, we continue to scale our impact, driving growth and excellence across every project we undertake.",
    bulletPoints: ["Successfully delivered our largest-ever commercial project.", "Completed over 200 projects.", "Secured a strategic partnership with a key industry leader."],
    image: "/impact-scaling-tower.jpg", imageAlt: "Impact milestone",
  },
  {
    year: "2024", title: "Nationwide ", titleHighlight: "Reach", description: "With a growing presence across major cities, we continue to expand our reach, delivering impactful and sustainable projects across India.",
    bulletPoints: ["Exceeded the 350-project milestone.", "Expanded our footprint to 15+ cities nationwide.", "Launched a new service vertical focusing on sustainable solutions."],
    image: "/nationwide-reach-map-india.jpg", imageAlt: "Nationwide reach milestone",
  },
];


// Inside src/components/OurPresentationSection.tsx

// ... (Other functions and constants) ...

// ==========================================================
// 2. TIMELINE ITEM COMPONENT (Nested & Corrected Order)
// ==========================================================

interface TimelineItemProps { item: TimelineEntry; index: number; }

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const isLeftSide = index % 2 === 0; // The side where the image/content is placed on desktop

  const RED_COLOR = 'text-destructive';
  const BG_RED_COLOR = 'bg-destructive';
  const TEXT_COLOR = 'text-gray-800';
  const MUTE_TEXT_COLOR = 'text-gray-600';


  return (
    <div className="relative">
      
      {/* Timeline Dot (Mobile Left, Desktop Center from MD) */}
      <div className={cn(
        'absolute left-6 top-0 w-4 h-4 rounded-full transform -translate-x-1/2 z-10 border-4 border-white shadow-lg',
        BG_RED_COLOR,
        'md:left-1/2 md:-translate-x-1/2'
      )} />

      {/* Item Content: Alternating Grid on Desktop from MD */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 md:gap-12 md:items-start"
      >
        
        {/* ===================================================== */}
        {/* A. Content Block (Text, Title, Bullets)               */}
        {/* ===================================================== */}
        <div 
          className={cn(
            "ml-12 md:ml-0 text-left", // Base left alignment for mobile
            "md:w-full", 
            isLeftSide ? "md:pr-8" : "md:pl-8", // Spacing from the center spine

            // FIX: DESKTOP TEXT ALIGNMENT
            isLeftSide ? "md:text-left" : "md:text-left",

            "order-1", // Mobile order
            isLeftSide ? "md:order-2" : "md:order-1" // Desktop order
          )}
        >
          {/* ... (Text content: Year, Title, Description, Bullets) ... */}
          <div className={cn("text-sm font-semibold mb-2", RED_COLOR)}>{item.year}</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {item.title}
            {/* <span className={cn(BG_RED_COLOR, "text-white px-2 py-1 ml-2 inline-block","transform -rotate-3")}>{item.titleHighlight}</span> */}
             <RotatingHighlight
                text={item.titleHighlight}
            />
          </h3>
          <p className={cn("mb-6 leading-relaxed", MUTE_TEXT_COLOR)}>{item.description}</p>
          <ul className="space-y-2 list-none">
            {item.bulletPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className={cn(RED_COLOR, "font-bold flex-shrink-0 mt-1")}>•</span>
                <span className={MUTE_TEXT_COLOR}>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===================================================== */}
        {/* B. Image Block                                        */}
        {/* ===================================================== */}
        <div 
          className={cn(
            "relative h-48 md:h-80 rounded-lg overflow-hidden mb-6 ml-12 md:ml-0", 
            // FIX: MOBILE ORDER - Image is ORDER-2 on mobile
            "order-2", 
            // FIX: DESKTOP ORDER - Image is ORDER-1 on Left-Aligned items (even index) 
            isLeftSide ? "md:order-1" : "md:order-2" 
          )}
        >
          <ResizableImage 
            src={item.image || "/placeholder.svg"} 
            alt={item.imageAlt} 
            className="object-cover w-full h-full" 
            fit="cover" 
          />
        </div>
        
      </div>
    </div>
  );
};

// ==========================================================
// 3. MAIN COMPONENT: OurPresentationSection (The Final Export)
// ==========================================================

const OurPresentationSection: React.FC = () => {
    return (
        <section className={cn('w-full py-16', SECTION_BG_COLOR)}>
            <div className="mx-auto max-w-[1280px] px-6">
                
                {/* ========================================================== */}
                {/* A. PRESENCE / STATS BLOCK (Top Section) */}
                {/* ========================================================== */}
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center mb-16">
                    
                    {/* LEFT: Text, Buttons, and Metrics (60% Width on Desktop) */}
                    <div className="w-full lg:w-3/5 text-left order-last lg:order-first">
                       <p className=' text-grayN text-3xl lg:text-5xl font-normal'>
                            Our
                        
                              <RotatingHighlight
                            text={"Presence"}
                        />
                        </p>
                        <p className={cn('text-blackN mt-4 text-lg max-w-2xl', MUTE_TEXT_COLOR)}>
                            We provide consistent and hassle-free services across the nation by leveraging our proprietary technology-based execution and monitoring systems.
                        </p>

                        <div className="mt-8 flex space-x-4">
                            <Button variant="destructive" size="lg" className="px-8 py-3 text-lg font-bold">
                                Contact
                            </Button>
                            <Button size="lg" className={cn("px-8 py-3 text-lg font-bold", BUTTON_OUTLINE_COLOR)} onClick={() => console.log('Learn More clicked')}>
                                Learn More
                            </Button>
                        </div>
                        
                        {/* Metrics/Stats (90+ Projects, 8.5 Lac+, 100+ Partners) */}
                        <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg">
                            {metricsData.map((metric, index) => (
                                <div key={index} className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-300 bg-white shadow-lg">
                                    <p className={cn('text-2xl lg:text-3xl font-extrabold', RED_COLOR)}>
                                        {metric.value}
                                    </p>
                                    <p className={cn('text-sm lg:text-base font-semibold text-gray-700 mt-1')}>
                                        {metric.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Map Image (40% Width on Desktop) */}
                    <div className="w-full lg:w-2/5 mb-8 lg:mb-0 relative h-full">
                        <ResizableImage 
                            src={INDIA_MAP_IMAGE} 
                            alt="Nationwide Presence Map" 
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                {/* ========================================================== */}
                {/* B. TIMELINE / REACH BLOCK (Bottom Section) */}
                {/* ========================================================== */}
                <div className="w-full pt-8">
                    {/* Header */}
                    <div className='flex flex-col gap-4 mb-12 lg:flex-row lg:gap-10 lg:items-start'>
                
                {/* Headline (60% on Desktop) */}
                <div className="w-full lg:w-[60%]">
                    <p className='text-grayN text-3xl lg:text-5xl font-normal leading-tight text-gray-700'>
                        Our <span className="font-bold text-blackN">Nationwide</span> Reach <br /> and
                        <RotatingHighlight
                            text={"Impact"}
                        />
                    </p>
                </div>
                
                {/* Description (40% on Desktop) */}
                <div className='text-blackN w-full lg:w-[40%] mt-2 lg:mt-0'>
                    <p className='text-lg max-w-lg text-gray-600'>
                        Explore our extensive presence across India. We proudly serve over 15 cities with a commitment to excellence.
                    </p>
                </div>
            </div>
                    
                    {/* Timeline Content */}
                    <div className="relative">
                        
                        {/* Vertical Spine (Mobile Left, Desktop Center from MD) */}
                        <div className={cn(
                          "absolute left-[27px] top-0 bottom-0 w-1", BG_RED_COLOR, 
                          "md:left-1/2 md:transform md:-translate-x-1/2"
                        )} />

                        {/* Timeline items */}
                        <div className="space-y-12 md:space-y-16">
                            {timelineData.map((item, index) => (
                                <TimelineItem key={index} item={item} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default OurPresentationSection;

