import React from 'react';
import { cn } from '@/lib/utils';
import ResizableImage from './ResizableImage'; // Assuming the path to your reusable image component
import RotatingHighlight from './common/RotatingHighlight';

// ==========================================================
// 1. DATA DEFINITION
// ==========================================================

interface AdvantageCard {
  title: string
  description: string
  image: string
  imageAlt: string
  borderColor: string // e.g., "border-orange-400"
}

const advantages: AdvantageCard[] = [
  {
    title: "Curated Manpower",
    description: "Trained and tested project manpower",
    image: "/curated-manpower.jpg",
    imageAlt: "Construction worker with safety gear",
    borderColor: "border-orange-400",
  },
  {
    title: "Technology Platform",
    description: "Intelligent planning for execution and procurement",
    image: "/technology-platform.jpg",
    imageAlt: "Modern technology interface",
    borderColor: "border-blue-400",
  },
  {
    title: "Stress-free Handover",
    description: "Standardised 50 point handover check",
    image: "/stress-free-handover.jpg",
    imageAlt: "Professional handshake",
    // NOTE: This color should map to the dark color on the clock image
    borderColor: "border-amber-200", 
  },
  {
    title: "Real Time Tracking",
    description: "Predictive project health score",
    image: "/real-time-tracking.jpg",
    imageAlt: "Clock showing real-time tracking",
    // NOTE: This color should map to the clock image color
    borderColor: "border-gray-800", 
  },
];

// ==========================================================
// 2. MAIN COMPONENT: NirmaanAdvantageSection
// ==========================================================

export default function NirmaanAdvantageSection() {
  const HEADER_TEXT_COLOR = 'text-gray-800';
  const MUTE_TEXT_COLOR = 'text-gray-700';
  const BG_RED_COLOR = 'bg-destructive';

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-12 max-w-4xl">
           <p className='text-grayN text-3xl lg:text-5xl font-normal'>
            The Nirmaan 
            <RotatingHighlight text='Advantage'/>
          </p>
          <p className={cn("text-blackN text-lg leading-relaxed", MUTE_TEXT_COLOR)}>
            Our proprietary planning and tracking technology, curated manpower and large supplier base ensure seamless
            project delivery.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={cn(
                // Base Styling
                'relative h-70 md:h-82 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-[1.03] shadow-2xl',
                // Border
                'border-4', 
                advantage.borderColor // Injects border color class: e.g., border-orange-400
              )}
            >
              {/* Background Image (Replaced Next/Image with ResizableImage) */}
              <ResizableImage 
                src={advantage.image || "/placeholder.svg"} 
                alt={advantage.imageAlt} 
                className="w-full h-full object-cover absolute inset-0"
                fit="cover" 
              />

              {/* Overlay gradient (Darkens image for text contrast) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center pl-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{advantage.title}</h3>
                <p className="text-white/90 text-sm md:text-base">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}