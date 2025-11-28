
// import React from 'react';
// import { cn } from '@/lib/utils';
// import ResizableImage from './ResizableImage';
// import RotatingHighlight from './common/RotatingHighlight';
// import { Curated_Manpower,Technology_Platform,Stress_free_Handover,Real_Time_Tracking,Stress_free_Handover_Mobile } from './images';

// // ==========================================================
// // HELPER FUNCTION: Derive Transparent Color from Border Class
// // ==========================================================
// const getRgbaForBorder = (borderColorClass: string): string => {
//     switch (borderColorClass) {
//         case "border-orange-500":
//             return "rgba(255, 165, 0, 0.15)";
//         case "border-sky-500":
//             return "rgba(87, 143, 167, 0.2)";
//         case "border-gray-500":
//             return "rgba(107, 114, 128, 0.15)";
//         case "border-gray-400":
//             return "rgba(156, 163, 175, 0.15)";
//         default:
//             return "rgba(255, 255, 255, 0.15)";
//     }
// }


// // ==========================================================
// // 1. DATA DEFINITION
// // ==========================================================

// interface AdvantageCard {
//   title: string
//   description: string
//   image: string
//   mobileImage?: string
//   imageAlt: string
//   borderColor: string
//   contentBottomOffsetPx: number 
// }

// const advantages: AdvantageCard[] = [
//   { title: "Curated Manpower", description: "Trained and tested project manpower", image: Curated_Manpower, mobileImage: Curated_Manpower, imageAlt: "Construction worker with safety gear", borderColor: "border-orange-500", contentBottomOffsetPx: 150, },
//   { title: "Technology Platform", description: "Intelligent planning for execution and procurement", image: Technology_Platform, mobileImage: Technology_Platform, imageAlt: "Modern technology interface", borderColor: "border-sky-500", contentBottomOffsetPx: 60, },
//   { title: "Stress-free Handover", description: "Standardised 50 point handover check", image: Stress_free_Handover, mobileImage: Stress_free_Handover_Mobile, imageAlt: "Professional handshake", borderColor: "border-gray-500", contentBottomOffsetPx: 150, },
//   { title: "Real time tracking", description: "Predictive project health score", image: Real_Time_Tracking, mobileImage: Real_Time_Tracking, imageAlt: "Clock showing real-time tracking", borderColor: "border-gray-400", contentBottomOffsetPx: 150, },
// ];


// // ==========================================================
// // 2A. AdvantageItemMobile (Includes Mobile Image & Styling)
// // ==========================================================

// const getColorRgb = (borderColorClass: string): string => {
//     switch (borderColorClass) {
//         case "border-orange-500": return "245, 128, 30";
//         case "border-sky-500": return "59, 130, 246";
//         case "border-gray-500": return "75, 85, 99";
//         case "border-gray-400": return "156, 163, 175";
//         default: return "255, 255, 255";
//     }
// }
// const getPillBgColor = (rgb: string): string => `rgba(${rgb}, 0.95)`;


// // ==========================================================
// // 2A. AdvantageItemMobile (Corrected)
// // ==========================================================

// interface MobileProps {
//     advantage: AdvantageCard;
// }

// const AdvantageItemMobile: React.FC<MobileProps> = ({ advantage }) => {
    
//     // --- Logic must be inside the function body ---
//     const rgbColor = getColorRgb(advantage.borderColor);
//     const pillBg = getPillBgColor(rgbColor);
    
//     // Position the pill lower down
//     const dynamicBottomStyle = { bottom: `10px`,backdropFilter: 'blur(10px)'};

 

//     return (
//         <div
//             className={cn(
//                 // Mobile Card Wrapper Styles (Taken from original structure)
//                 'relative h-[10rem]  rounded-md overflow-hidden group cursor-pointer transition-transform hover:scale-[1.03]',
//                 'border-2', 
//                 advantage.borderColor
//             )}
//         >
//             {/* Mobile Background Image */}
//             <ResizableImage 
//                 src={advantage.mobileImage || advantage.image || "/placeholder.svg"} 
//                 alt={advantage.imageAlt} 
//                 className="w-full h-full object-cover absolute inset-0"
//                 // fit="cover" // Use cover for card image rendering
//             />
            
            
//             {/* Overlay gradient */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent"
            
//             />

//             {/* Mobile Content Pill Positioner */}
//              <div 
//                 className={cn(` mx-1 absolute left-0 right-0 flex justify-center  py-1 z-10 rounded-lg border-1 drop-shadow-lg`, advantage.borderColor)}
//                 style={dynamicBottomStyle}
//             >
//                 {/* The Pill Element */}
                
//                     <p className=" text-sm  font-extrabold text-white leading-none tracking-tight">
//                         {advantage.title} 
//                     </p> 
                
//             </div>
//         </div>
//     );
// };

// // ==========================================================
// // 2B. AdvantageItemDesktop (Includes Desktop Image & Styling)
// // ==========================================================

// interface DesktopProps { advantage: AdvantageCard; }

// const AdvantageItemDesktop: React.FC<DesktopProps> = ({ advantage }) => {
    
//     // Core Desktop Card Styling
//     const desktopCardClasses = cn(
//         'relative h-[25rem] rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-[1.03]',
//         'border-2', 
//         advantage.borderColor
//     );

//     // Dynamic Content Styling
//     const dynamicBottomStyle = { bottom: `${advantage.contentBottomOffsetPx}px` };
//     const dynamicBgColor = getRgbaForBorder(advantage.borderColor);

//     const FrostedEllipticalStyle = {
//         backgroundColor: dynamicBgColor, 
//         backdropFilter: 'blur(1px)',
//         WebkitBackdropFilter: 'blur(1px)', 
//         border: '1px solid rgba(255, 255, 255, 0.4)',
//         borderRadius: '50% / 50%',
//     };

//     return (
//         <div className={desktopCardClasses}>
//             {/* Desktop Background Image */}
//             <ResizableImage 
//                 src={advantage.image || "/placeholder.svg"} 
//                 alt={advantage.imageAlt} 
//                 className="w-full h-full object-cover absolute inset-0 z-0"
//             />

//             {/* Overlay gradient */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />

//             {/* Desktop Content Block */}
//             <div 
//                 className={`absolute left-0 p-6 w-full`} 
//                 style={dynamicBottomStyle}
//             >
//                 <div 
//                     // style={FrostedEllipticalStyle} 
//                     className="px-8 py-5 inline-block backdrop-blur-[1px"
//                 >
//                     <h3 className="text-2xl font-extrabold text-white mb-1 leading-tight">
//                         <span>{advantage.title}</span>
//                     </h3> 
//                     <p className="text-white/90 text-sm leading-relaxed">
//                         <span>{advantage.description}</span>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };


// // ==========================================================
// // 3. MAIN COMPONENT (NirmaanAdvantageSection)
// // ==========================================================

// export default function NirmaanAdvantageSection() {
//   const MUTE_TEXT_COLOR = 'text-gray-700';

//   return (
//     <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"> 
//       <div className="mx-auto max-w-[1280px]">
//         {/* Header */}
//         <div className="mb-12 max-w-4xl">
//            <p className='text-gray-700 text-3xl lg:text-5xl font-normal'>
//             The Nirmaan 
//             <RotatingHighlight text='Advantage'/>
//           </p>
//           <p className={cn("text-lg leading-relaxed mt-2", MUTE_TEXT_COLOR)}>
//             Our proprietary planning and tracking technology, curated manpower and large supplier base ensure seamless
//             project delivery.
//           </p>
//         </div>

//         {/* Advantages Grid - Incorporating responsive component rendering */}
//         <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-8">
//           {advantages.map((advantage, index) => (
//             <React.Fragment key={index}>
//                 {/* 1. Mobile View (Visible below MD) */}
//                 <div className="md:hidden">
//                     <AdvantageItemMobile advantage={advantage} />
//                 </div>

//                 {/* 2. Desktop View (Visible MD and up) */}
//                 <div className="hidden md:block">
//                     <AdvantageItemDesktop advantage={advantage} />
//                 </div>
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import React from 'react';
import { cn } from '@/lib/utils';
import ResizableImage from './ResizableImage';
import RotatingHighlight from './common/RotatingHighlight';
import { 
  Curated_Manpower, 
  Technology_Platform, 
  Stress_free_Handover, 
  Real_Time_Tracking, 
  Stress_free_Handover_Mobile ,Curated_Card_Mobile,Technology_card_Mobile,Curated_Image_With_Card,Stress_Free_Card_Mobile,Real_Time_Card_Mobile
} from './images';

// ==========================================================
// 1. DATA DEFINITION
// ==========================================================

interface AdvantageCard {
  title: string
  description: string
  image: string
  mobileImage?: string
  tagImage?:string
  imageAlt: string
  borderColor: string
  contentBottomOffsetPx: number 
}

const advantages: AdvantageCard[] = [
  { 
    title: "Curated Manpower", 
    description: "Trained and tested project manpower", 
    image: Curated_Manpower, 
    mobileImage: Curated_Manpower,
    tagImage:Curated_Card_Mobile,
    imageAlt: "Construction worker with safety gear", 
    borderColor: "border-orange-500", 
    contentBottomOffsetPx: 150, 
  },
  { 
    title: "Technology Platform", 
    description: "Intelligent planning for execution and procurement", 
    image: Technology_Platform, 
    mobileImage: Technology_Platform, 
    tagImage:Technology_card_Mobile,
    imageAlt: "Modern technology interface", 
    borderColor: "border-sky-500", 
    contentBottomOffsetPx: 60, 
  },
  { 
    title: "Stress-free Handover", 
    description: "Standardised 50 point handover check", 
    image: Stress_free_Handover, 
    mobileImage: Stress_free_Handover_Mobile, 
    tagImage:Stress_Free_Card_Mobile,
    imageAlt: "Professional handshake", 
    borderColor: "border-gray-500", 
    contentBottomOffsetPx: 150, 
  },
  { 
    title: "Real time tracking", 
    description: "Predictive project health score", 
    image: Real_Time_Tracking, 
    mobileImage: Real_Time_Tracking, 
    tagImage:Real_Time_Card_Mobile,
    imageAlt: "Clock showing real-time tracking", 
    borderColor: "border-gray-400", 
    contentBottomOffsetPx: 150, 
  },
];

// ==========================================================
// 2A. AdvantageItemMobile (Includes Mobile Image & Styling)
// ==========================================================

interface MobileProps {
  advantage: AdvantageCard;
}

const AdvantageItemMobile: React.FC<MobileProps> = ({ advantage }) => {
  const dynamicBottomStyle = { 
    bottom: `5px`,
    // backdropFilter: 'blur(10px)'
  };

  return (
    <div
      className={cn(
        'relative h-[10rem] rounded-md overflow-hidden group cursor-pointer transition-transform hover:scale-[1.03]',
        'border-2', 
        advantage.borderColor
      )}
    >
      {/* Mobile Background Image */}
      <ResizableImage 
        src={advantage.mobileImage|| advantage.image || "/placeholder.svg"} 
        alt={advantage.imageAlt} 
        className="w-full h-full object-cover absolute inset-0 z-0"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />

      {/* Mobile Content Pill */}
      
      <div 
        // className={cn(
        //   `mx-1 absolute left-0 right-0 flex justify-center py-1 z-10 rounded-lg border-1 drop-shadow-lg`, 
        //   advantage.borderColor
        // )}
        style={dynamicBottomStyle}
        className='absolute left-0 right-0  mx-2 py-1 z-10'
      >
            {/* <p className="text-sm font-extrabold text-white leading-none tracking-tight">
              {advantage.title} 
            </p>  */}
        <img className="mr-2 z-99" src={advantage.tagImage} alt="Icon" />

      </div>
    </div>
  );
};

// ==========================================================
// 2B. AdvantageItemDesktop (Includes Desktop Image & Styling)
// ==========================================================

interface DesktopProps { 
  advantage: AdvantageCard; 
}

const AdvantageItemDesktop: React.FC<DesktopProps> = ({ advantage }) => {
  const desktopCardClasses = cn(
    'relative h-[25rem] rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-[1.03]',
    'border-2', 
    advantage.borderColor
  );

  const dynamicBottomStyle = { 
    bottom: `${advantage.contentBottomOffsetPx}px` 
  };

  return (
    <div className={desktopCardClasses}>
      {/* Desktop Background Image */}
      <ResizableImage 
        src={advantage.image || "/placeholder.svg"} 
        alt={advantage.imageAlt} 
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />

      {/* Desktop Content Block */}
      <div 
        className={`absolute left-0 p-6 w-full`} 
        style={dynamicBottomStyle}
      >
        <div className="px-8 py-5 inline-block backdrop-blur-[1px]">
          <h3 className="text-2xl font-extrabold text-white mb-1 leading-tight">
            <span>{advantage.title}</span>
          </h3> 
          <p className="text-white/90 text-sm leading-relaxed">
            <span>{advantage.description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================================
// 3. MAIN COMPONENT (NirmaanAdvantageSection)
// ==========================================================

export default function NirmaanAdvantageSection() {
  const MUTE_TEXT_COLOR = 'text-gray-700';

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"> 
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-12 max-w-4xl">
          <p className='text-gray-700 text-3xl lg:text-5xl font-normal'>
            The Nirmaan 
            <RotatingHighlight text='Advantage'/>
          </p>
          <p className={cn("text-lg leading-relaxed mt-2", MUTE_TEXT_COLOR)}>
            Our proprietary planning and tracking technology, curated manpower and large supplier base ensure seamless
            project delivery.
          </p>
        </div>

        {/* Advantages Grid - Responsive component rendering */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-8">
          {advantages.map((advantage, index) => (
            <React.Fragment key={index}>
              {/* Mobile View (Visible below MD) */}
              <div className="md:hidden">
                <AdvantageItemMobile advantage={advantage} />
              </div>

              {/* Desktop View (Visible MD and up) */}
              <div className="hidden md:block">
                <AdvantageItemDesktop advantage={advantage} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
