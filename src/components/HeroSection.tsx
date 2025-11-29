

import React from 'react';
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Autoplay, FreeMode } from 'swiper/modules'; // Autoplay and FreeMode are ideal for logo carousels

// Import Swiper styles

// import 'swiper/css/free-mode'; // Optional, but can improve the feel of continuous movement

import { Button } from './ui/button'; // Assuming Shadcn Button
import ResizableImage from './ResizableImage'; // The reusable image component
import{Hero_Image, Home_Placeholder,Decathlon, ATTIC, Grant_Thornton, Airbrick_Infra, NinetyOne_Square_Feet} from './images';
// Assuming the image import from the new path
// import Hero_Image from '../assets/Mask group.png';
// import Home_Placeholder from '../assets/Placeholder Image.png';
import RotatingHighlight from './common/RotatingHighlight';



// Constants (ensure these match your theme/global constants)
const BRAND_RED = 'bg-destructive';
const BRAND_RED_TEXT = 'text-destructive';
const LIGHT_BG = '#f5f5f5'; // Light gray background of the section

const partnerLogos = [
  { src: Decathlon, alt: 'Decathlon Logo' },
  { src: ATTIC, alt: 'ATTIC Logo' },
  { src: Grant_Thornton, alt: 'Grant Thornton Logo' },
  { src: Airbrick_Infra, alt: 'AirBrick Infra Logo' },
  { src: NinetyOne_Square_Feet, alt: '91 Square Feet Logo' },
  // Adding duplicates for a smoother, infinite loop effect
  { src: Decathlon, alt: 'Decathlon Logo' },
  { src: ATTIC, alt: 'ATTIC Logo' },
  { src: Grant_Thornton, alt: 'Grant Thornton Logo' },
  { src: Airbrick_Infra, alt: 'AirBrick Infra Logo' },
  { src: NinetyOne_Square_Feet, alt: '91 Square Feet Logo' },
  

 
];

const HeroSection: React.FC = () => {
  return (
    <div className="w-full">
      
      {/* ========================================================== */}
      {/* A. MAIN HERO BLOCK (Correct Flex-Split) */}
      {/* ========================================================== */}
      <div className="relative w-full overflow-hidden" style={{ backgroundColor: LIGHT_BG }}>

        {/* //Mobile Screen Bulding image  */}  
        <div className="w-full lg:hidden">
          {/* Mobile Screen Building Image */}
          <div className="w-full h-auto p-4">
              <ResizableImage
                src={Home_Placeholder}
                alt="Architectural Background Mobile"
                className="w-full h-auto object-cover"
                fit="cover"
              />
          </div>
          {/* RED SEPARATOR LINE (W-FULL) */}
          {/* <div className="w-full h-[1px] bg-destructive my-4"></div>  */}
        </div>

        {/* 1. TEXT AND IMAGE CONTAINER (Relative to hold the background image) */}
        <div className="relative mx-auto max-w-[1280px] px-6 pt-0 pb-0 lg:pt-14 lg:pb-0">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(243,247,248,0.5),rgba(249,232,232,0.9))]"></div>
          {/* 2. TEXT AND ENGINEER IMAGE (Main Content Layer - z-10) */}
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row">

            {/* LEFT: Text and CTA Buttons (The single block taking the column width) */}
            <div className="w-full text-left">
              <p className="text-3xl font-light leading-tight text-grayN lg:text-5xl">
                Empowering <span className="font-bold text-blackN">India</span> with <span className="font-bold text-blackN">Innovative</span>
                <span className="hidden lg:inline">
                  <br />
                </span>
                {" "}and

                <RotatingHighlight text="TechFirst"/> 
                <span className="font-bold ml-1 text-blackN">MEP</span> Solutions.
              </p>

              <p className="mt-6 text-xl text-blackN max-w-lg">
                Your trusted partner for cutting-edge construction solutions across the nation, ensuring quality and Technology-driven MEP contracting services
              </p>

              <div className="mt-8 flex space-x-4">
                <Button variant="destructive" size="lg" className="px-6 py-3 text-lg" onClick={() => console.log('Quote clicked')}>
                  Quote
                </Button>
                <Button variant="nirmaanOutline" size="lg" className="px-6 py-3 text-lg" onClick={() => console.log('Consult clicked')}>
                  Consult
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BACKGROUND IMAGE (Positioned Absolutely) */}
        <div className='hidden lg:flex justify-center relative w-full h-full items-end top-[-70px]' >
          <div className='relative top-0 left-[15%] lg:left-[15%] z-10'>
            <ResizableImage
              src={Hero_Image}
              alt="Hero Background"
              className="object-cover"
            />
          </div>
          <div className='relative' 
         style={{
        // 1. Define the two gradient masks, separated by a comma
        maskImage: `
            linear-gradient(to top, black 80%, transparent 100%), 
            linear-gradient(to left, black 95%, transparent 100%) 
        `,
        // 2. IMPORTANT: Tell the browser to combine the mask images (multiply their transparency)
        maskComposite: 'intersect', 
        
        // 3. WebKit Prefixes for Safari/Older Browsers
        WebkitMaskImage: `
            linear-gradient(to top, black 80%, transparent 100%), 
            linear-gradient(to right, black 90%, transparent 100%) 
        `,
        WebkitMaskComposite: 'source-in' 
    }}
        
        >
            <ResizableImage src={Home_Placeholder} alt="Hero Background" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="hidden lg:block relative w-full h-[1px] mb-8 bg-destructive top-[-70px]"></div> 
      </div>



      {/* --- */}
      {/* ========================================================== */}
      {/* B. TRUSTED BY SECTION (Logos) - CONVERTED TO SWIPER */}
      {/* ========================================================== */}
      <div className="w-full pt-10 pb-12 lg:pt-4" style={{ backgroundColor: LIGHT_BG }}>
        <div className="mx-auto max-w-[1280px] px-6">

          {/* Headline */}
          <div className="flex flex-row justify-between lg:text-left mb-10">
            <p className="text-3xl lg:text-4xl font-light text-grayN">
              Trusted by <span className="font-bold text-blackN">Industry leaders</span>
              <br />
              across
              
                <RotatingHighlight text="India"/> 

            </p>
            <div className="hidden lg:flex items-center">
              <Button
                variant="destructive"
                size="lg"
                className="px-6 py-3 text-lg w-full lg:w-auto"
              >
                Get Quote
              </Button>
            </div>
          </div>

          {/* Swiper Logos Container */}
          <div className="w-full relative p-4 px-8"  style={{
            // Gradient from transparent on the left to a solid color on the right
            // This creates a mask on the right edge.
            background: `linear-gradient(to right, #F4EFEF, #ecd1d4)`,
maskImage: `linear-gradient(to right, 
        transparent 0%,      /* Left Edge: Start transparent (invisible) */
        black 5%,            /* Transition to black (fully visible) */
        black 95%,           /* Center: Stay black (fully visible) */
        transparent 100%     /* Right Edge: Transition back to transparent (invisible) */
    )`,
        }}>
             
            <Swiper
              modules={[Autoplay, FreeMode]} // Use Autoplay for automatic movement
              loop={true} // Enable continuous looping
              freeMode={true} // Allows the slider to move freely without snapping to a slide
              grabCursor={true}
              speed={4000} // The higher the speed, the slower the slide movement
              autoplay={{
                delay: 0, // Set delay to 0 for continuous scroll
                disableOnInteraction: false, // Keep scrolling even if the user interacts
              }}
              
              // Breakpoints for responsive slidesPerView
              breakpoints={{
                320: {
                  slidesPerView: 1, // Show 2 full logos and a partial 3rd
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5, // Show 5 logos on large screens
                  spaceBetween: 40,
                },
              }}
              className="logo-carousel" // Custom class for potential CSS adjustments
            >

              {partnerLogos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div
                    // Simplified class structure for SwiperSlide content
                    className=" bg-white shadow-md rounded-lg flex items-center justify-center "
                  >
                    <img
                      src={logo.src} // Placeholder for your image path
                      alt={logo.alt}
                      className=" h-auto object-cover max-h-16"
                    />
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>
          </div>
          {/* End of Swiper Logos Container */}

        </div>
        <div className="w-full h-[1px] bg-destructive my-4"></div> 
      </div>

    </div>
  );
};

export default HeroSection;