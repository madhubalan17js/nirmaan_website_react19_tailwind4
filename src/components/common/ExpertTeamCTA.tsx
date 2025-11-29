

import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
// Assuming the path to your combined image is correct
import CTA_Image from '@/assets/Common/CTA herowith bg.png'; // <--- ASSUME THIS IMPORT PATH

// --- Constants ---
const TEXT_COLOR = 'text-white';
const ACCENT_COLOR = 'text-destructive'; 

const ExpertTeamCTA: React.FC = () => {
    return (
        <section className="w-full py-4">
            <div className="mx-auto max-w-[1280px] px-6">
                
                {/* Main Card Container - Now uses CTA_Image as background */}
                <div 
                    
                    style={{
                        // Use the imported variable CTA_Image here
                        backgroundImage: `url(${CTA_Image})`, // <--- Use the variable name here
                        
                        backgroundSize: 'cover',
                        backgroundPosition: 'right center', 
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    
                    {/* Foreground Content */}
                    <div className="relative bottom-0 z-20 h-full w-full p-6 md:p-12 flex flex-col justify-center items-start max-w-[80%] md:max-w-[60%] lg:max-w-[50%]">
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