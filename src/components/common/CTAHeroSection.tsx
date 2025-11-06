import React from 'react';
import { Button } from "../ui/button";
import { cn } from '@/lib/utils';
import ResizableImage from '../ResizableImage'; // Assuming the path to your reusable image component
import RotatingHighlight from './RotatingHighlight';
// --- Image Import ---
import HERO_CTA_IMAGE from '../../assets/struggleWithProjectdelay.png'; // The large construction image
import MOBILE_CTA_IMAGE from '../../assets/struggleWithProjectdelay.png'; // The smaller handshake image

// --- Constants ---
const SECTION_BG_COLOR = '#ffffff'; // Light gray background
const TEXT_COLOR = 'text-gray-800';
const MUTE_TEXT_COLOR = 'text-gray-600';
const BG_RED_COLOR = 'bg-destructive';
const BUTTON_OUTLINE_COLOR = 'border-destructive text-destructive bg-white'; 

const CTAHeroSection: React.FC = () => {
    return (
        <section className={cn('w-full py-0', SECTION_BG_COLOR)}>
                   <div className="mx-auto max-w-[1280px]">
                
                {/* === MAIN CONTAINER: Relative to hold the Image Background === */}
                <div className="relative w-full overflow-hidden shadow-2xl" >
                    
                    {/* 1. BACKGROUND IMAGE (Absolute and Responsive) */}
                    <div className="absolute inset-0 z-0">
                        {/* Desktop Image: Wide construction scene */}
                        <div className="hidden lg:block w-full h-full">
                            <ResizableImage
                                src={HERO_CTA_IMAGE} 
                                alt="Engineers reviewing blueprints at a construction site"
                                className="w-full h-full object-cover"
                                fit="cover"
                            />
                        </div>
                        
                        {/* Mobile Image: Handshake on blueprints (Smaller, fits mobile better) */}
                       
                        
                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-transparent lg:from-white/80 lg:via-#ddc0be/50" />
                    </div>

                    
                    {/* 2. FOREGROUND CONTENT (Relative, Pushed to Left) */}
                    <div className="relative z-10 p-6 md:p-12 flex items-center justify-start lg:h-full">
                        
                        {/* Content Wrapper (Confined to the left half) */}
                        <div className="w-full max-w-lg lg:w-1/2">
                            
                            {/* Headline */}
                            <h2 className={cn("text-grayN text-3xl md:text-5xl leading-tight", TEXT_COLOR)}>
                                <span className='font-semibold text-blackN'>Struggling</span> <span className="font-light">with project</span>
                                <br />delays and rising
                                <span className="font-semibold text-blackN"> MEP</span>
                                <br />
                               
                                 <RotatingHighlight
                            text={" costs?"}
                        />
                            </h2>
                            
                            {/* Description */}
                            <p className={cn("mt-6 text-base md:text-lg leading-relaxed max-w-lg", MUTE_TEXT_COLOR)}>
                                We replace MEP unpredictability with performance. Our technology-driven 
                                process delivers your project on time and on budget by tackling delays at their source.
                            </p>
                            
                            {/* Button */}
                            <div className="mt-8">
                                <Button 
                                    size="lg" 
                                    className={cn("px-8 py-3 text-lg font-bold border-2", BUTTON_OUTLINE_COLOR)} 
                                    onClick={() => console.log('Connect with us clicked')}
                                >
                                    Connect with us
                                </Button>
                            </div>
                        </div>
                    </div>
                     <div className="lg:hidden w-full h-full">
                            <ResizableImage
                                src={MOBILE_CTA_IMAGE} 
                                alt="Handshake over construction blueprints"
                                className="w-full h-full object-cover"
                                fit="cover"
                            />
                        </div>
                </div>
            </div>
        </section>
    );
};

export default CTAHeroSection;