// import React from 'react';
// import { Button } from '../ui/button';
// import { cn } from '@/lib/utils';
// import ResizableImage from '../ResizableImage'; // Assuming the path to your reusable image component

// // --- Image Imports ---
// import MANNEQUIN_IMAGE from '../../assets/devshree26_A_hyper-realistic_digital_render_of_a_matte_black__90cef0db-5aa4-4855-854f-83b8bf8a73b5_2 1.png'; 

// // --- Constants ---
// const BORDER_COLOR = 'border-destructive';
// const TEXT_COLOR = 'text-white'; // Base text color
// const ACCENT_COLOR = 'text-destructive'; // The red for 'Expert Team' highlight
// const BUTTON_OUTLINE_COLOR = 'border-destructive text-destructive bg-white'; 

// const ExpertTeamCTA: React.FC = () => {
//     return (
//         <section className="w-full py-16">
//             <div className="mx-auto max-w-[1280px] px-6">
                
//                 {/* === MAIN CTA CARD === */}
//                 <div 
//                     // FIX 1: Set fixed height and RELATIVE for absolute children
//                     className="relative w-full h-[200px] md:h-[450px] rounded-3xl shadow-2xl"
//                 >
                    
//                     {/* 1. BACKGROUND TEXTURE/PATTERN (Absolute Background Layer) */}
//                     <div 
//                         className="absolute inset-0 z-0 rounded-3xl" 
//                         style={{ 
//                             // Background is a blend of the red base color and the repeating pattern image
//                             backgroundColor: 'rgba(215, 60, 60, 0.8)', // Base Red
//                             backgroundSize: 'cover',
//                             backgroundBlendMode: 'multiply' // Multiplies the pattern over the red color
//                         }}
//                     >
//                         {/* Inner Gradient Overlay (White/Pink fade on the left) */}
//                         <div 
//                             className="absolute inset-0"
//                             style={{ 
//                                 background: 'linear-gradient(to right, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 30%, transparent 80%)'
//                             }}
//                         />
//                     </div>
                    

//                     {/* 2. MANNEQUIN IMAGE (Absolute Positioned, Pixel Perfect Placement) */}
                    

//                     {/* 3. FOREGROUND CONTENT (Relative Z-Index, Pushed to Bottom-Left) */}
//                     <div className="relative z-20 p-4 md:p-12 flex flex-col justify-end h-full w-full max-w-md">
                        
//                         {/* Button */}
//                         <div className="absolute top-[-40px] right-[0px] bottom-0 z-10 h-full  pointer-events-none">
//                         <ResizableImage
//                             src={MANNEQUIN_IMAGE}
//                             alt="Construction Mannequin Head"
//                             // FIX 2: Object-contain and transform for positioning
//                             className="w-233 h-60 transform translate-x-10" 
//                             fit="contain"
//                             lazyLoad={false}
//                         />
//                      </div>

//                         <div className="mb-4">
//                             <Button 
//                                 size="lg" 
//                                 variant="nirmaanOutline" // Use your custom nirmaan-outline or a styled one
//                                 className="px-2 py-3 text-lg font-bold border-2" 
//                                 style={{ 
//                                     borderColor: BORDER_COLOR, 
//                                     color: BORDER_COLOR, 
//                                     backgroundColor: 'white',
//                                 }}
//                                 onClick={() => console.log('Connect with us clicked')}
//                             >
//                                 Connect with us
//                             </Button>
//                         </div>
                        
//                         {/* Headline/Slogan */}
//                         <h2 className={cn("text-lg md:text-xl font-bold leading-tight z-10", TEXT_COLOR)}>
//                             Achieve flawless project 
//                             execution with our 
//                             <span className={cn("font-extrabold", ACCENT_COLOR)} style={{ marginLeft: '0.5rem' }}>
//                                 Expert Team
//                             </span>
//                         </h2>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ExpertTeamCTA;

import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import ResizableImage from '../ResizableImage'; // Assuming the path to your reusable image component

// --- Image Imports ---
import MANNEQUIN_IMAGE from '../../assets/devshree26_A_hyper-realistic_digital_render_of_a_matte_black__90cef0db-5aa4-4855-854f-83b8bf8a73b5_2 1.png'; 

// --- Constants ---
const BORDER_COLOR = 'border-destructive';
const TEXT_COLOR = 'text-white'; // Base text color - **Keep white for contrast on the gradient**
const ACCENT_COLOR = 'text-destructive'; // The red for 'Expert Team' highlight
// Import and constants unchanged

const ExpertTeamCTA: React.FC = () => {
    return (
        <section className="w-full py-16">
            <div className="mx-auto max-w-[1280px] px-6">
                <div className="relative w-full h-[230px] md:h-[350px] lg:h-[400px] rounded-3xl shadow-2xl">
                    
                    {/* Background Layer */}
                    <div
                        className="absolute inset-0 z-0 rounded-3xl"
                        style={{
                            backgroundColor: 'rgba(215, 60, 60, 0.8)',
                        }}
                    >
                        <div
                            className="absolute inset-0 rounded-3xl"
                            style={{
                                background: 'linear-gradient(to right, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 20%, transparent 60%)',
                            }}
                        />
                    </div>

                    {/* Mannequin Image Container */}
                    <div className="absolute right-[15%] lg:right-[20%] top-[-10%] z-10 h-full w-2/3 md:w-1/2 lg:w-[38.9%] pointer-events-none">
                        <ResizableImage
                            src={MANNEQUIN_IMAGE}
                            alt="Construction Mannequin Head"
                            className="h-auto w-full object-contain object-right"
                            fit="contain"
                            lazyLoad={false}
                        />
                    </div>

                    {/* Foreground Content */}
                    <div className="relative z-20 h-full w-full p-6 md:p-12 flex flex-col justify-center items-start max-w-[80%] md:max-w-[60%] lg:max-w-[50%]">
                        <div className="mb-6">
                            <Button
                                size="lg"
                                variant="outline"
                                className="px-6 py-4 text-xl font-bold border-4 rounded-xl shadow-lg transition-all hover:bg-destructive hover:text-white"
                                style={{
                                    borderColor: 'rgb(215 60 60)',
                                    color: 'rgb(215 60 60)',
                                    backgroundColor: 'white',
                                }}
                                onClick={() => console.log('Connect with us clicked')}
                            >
                                Connect with us
                            </Button>
                        </div>
                        <h2 className={cn('text-xl md:text-3xl lg:text-4xl font-bold leading-snug z-10', 'text-white')}>
                            Achieve flawless project execution with our
                            <span className={cn('font-extrabold', 'text-destructive', 'block mt-1')}>
                                Expert Team
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertTeamCTA;
