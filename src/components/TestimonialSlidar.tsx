// // import React, { useState } from 'react';
// // import { cn } from '@/lib/utils';
// // import { ArrowLeft, ArrowRight } from 'lucide-react';
// // import ResizableImage from './ResizableImage'; // Reusable image component
// // import { Button } from './ui/button';

// // // --- Data Structure for a single Testimonial ---
// // interface Testimonial {
// //   quote: string;
// //   author: string;
// //   title: string;
// //   companyLogo: string;
// //   companyLogoAlt: string;
// //   avatar: string;
// // }

// // // --- Dummy Data (Only one for the static layout) ---
// // const testimonials: Testimonial[] = [
// //   {
// //     quote: "Nirmaan's MEP contracting services, combined with their planning technology, have allowed us to complete our MEP projects on time and within budget. They are a game-changer in the industry!",
// //     author: "Mayank Bhandari",
// //     title: "Principal Architect, Beta Maker Lab",
// //     companyLogo: "/logos/beta-makers-lab.png", // Placeholder path
// //     companyLogoAlt: "Beta Makers Lab Logo",
// //     avatar: "/avatars/mayank-bhandari.jpg", // Placeholder path
// //   },
// //    {
// //     quote: "Nirmaan's MEP contracting services, combined with their planning technology, have allowed us to complete our MEP projects on time and within budget. They are a game-changer in the industry!",
// //     author: "Mayank Bhandari",
// //     title: "Principal Architect, Beta Maker Lab",
// //     companyLogo: "/logos/beta-makers-lab.png", // Placeholder path
// //     companyLogoAlt: "Beta Makers Lab Logo",
// //     avatar: "/avatars/mayank-bhandari.jpg", // Placeholder path
// //   },
// //    {
// //     quote: "Nirmaan's MEP contracting services, combined with their planning technology, have allowed us to complete our MEP projects on time and within budget. They are a game-changer in the industry!",
// //     author: "Mayank Bhandari",
// //     title: "Principal Architect, Beta Maker Lab",
// //     companyLogo: "/logos/beta-makers-lab.png", // Placeholder path
// //     companyLogoAlt: "Beta Makers Lab Logo",
// //     avatar: "/avatars/mayank-bhandari.jpg", // Placeholder path
// //   },
// //   // Add more items here if you want a true list for the slider
// // ];

// // const TestimonialSlider: React.FC = () => {
// //   // Use state to manage the active slide index in a real implementation
// //   const [activeIndex, setActiveIndex] = useState(0); 
// //   const currentTestimonial = testimonials[activeIndex];

// //   // Colors
// //   const BORDER_COLOR = 'border-destructive';
// //   const ARROW_COLOR = 'text-gray-700';

// //   // Slider function placeholders
// //   const goToNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
// //   const goToPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

// //   // If no testimonial data, return null
// //   if (!currentTestimonial) return null;

// //   return (
// //     // Outer container with top/bottom red borders (full bleed)
// //     <section className=" w-full py-20 border-t-4 border-b-4" style={{ borderColor: BORDER_COLOR, backgroundColor: 'white' }}>
// //       <div className="mx-auto max-w-[1280px] text-center">
        
// //         {/* --- Navigation Arrows (Absolute Positioning) --- */}
// //         <div className="absolute inset-y-0 flex w-full items-center justify-between pointer-events-none px-6">
// //           <Button 
// //             onClick={goToPrev} 
// //             variant="ghost" 
// //             className="rounded-full size-12 p-0 border border-gray-400 hover:border-gray-600 pointer-events-auto transition-colors"
// //             aria-label="Previous testimonial"
// //           >
// //             <ArrowLeft className={cn("size-6", ARROW_COLOR)} />
// //           </Button>

// //           <Button 
// //             onClick={goToNext} 
// //             variant="ghost" 
// //             className="rounded-full size-12 p-0 border border-gray-400 hover:border-gray-600 pointer-events-auto transition-colors"
// //             aria-label="Next testimonial"
// //           >
// //             <ArrowRight className={cn("size-6", ARROW_COLOR)} />
// //           </Button>
// //         </div>


// //         {/* --- SLIDER CONTENT (Max width for text readability) --- */}
// //         <div className="mx-auto max-w-4xl flex flex-col items-center">
          
// //           {/* Company Logo / Brand Sticker */}
// //           <div className="mb-10 w-48 h-16 relative">
// //             <ResizableImage
// //                 src={currentTestimonial.companyLogo}
// //                 alt={currentTestimonial.companyLogoAlt}
// //                 className="w-full h-full object-contain"
// //                 fit="contain"
// //             />
// //           </div>

// //           {/* Testimonial Quote */}
// //           <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-800 italic max-w-3xl px-4">
// //             &ldquo;{currentTestimonial.quote}&rdquo;
// //           </p>

// //           {/* Avatar */}
// //           <div className="mt-8 mb-4">
// //             <ResizableImage
// //                 src={currentTestimonial.avatar}
// //                 alt={currentTestimonial.author}
// //                 className="w-16 h-16 rounded-full object-cover border-4 border-gray-300 mx-auto"
// //             />
// //           </div>

// //           {/* Author Name and Title */}
// //           <p className="text-lg font-bold text-gray-900">{currentTestimonial.author}</p>
// //           <p className="text-sm font-medium text-gray-600">{currentTestimonial.title}</p>

// //           {/* Dots / Paginator */}
// //           <div className="flex space-x-2 mt-10">
// //             {testimonials.map((_, index) => (
// //               <button
// //                 key={index}
// //                 className={cn(
// //                   "size-3 rounded-full transition-colors",
// //                   index === activeIndex ? "bg-gray-800" : "bg-gray-300"
// //                 )}
// //                 onClick={() => setActiveIndex(index)}
// //                 aria-label={`Go to slide ${index + 1}`}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TestimonialSlider;

// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { cn } from '@/lib/utils';
// // Assuming ResizableImage is passed down or imported from a higher level
// import ResizableImage from './ResizableImage'; 
// import { Button } from './ui/button'; // Assuming you have a reusable Button component

// interface Testimonial {
//   id: number
//   company: string
//   logo: string
//   quote: string
//   author: string
//   title: string
//   image: string
// }

// const testimonials: Testimonial[] = [
//   // ... (Your testimonial data) ...
//   {
//     id: 1,
//     company: "Beta Makers Lab",
//     logo: "/logos/beta-makers-lab-logo.jpg",
//     quote:
//       "Nirmaan's MEP contracting services, combined with their planning technology, have allowed us to complete our MEP projects on time and within budget. They are a game-changer in the industry!",
//     author: "Mayank Bhandari",
//     title: "Principal Architect, Beta Maker Lab",
//     image: "/avatars/mayank-bhandari-profile.jpg",
//   },
//   {
//     id: 2,
//     company: "Tech Innovations",
//     logo: "/logos/tech-innovations-logo.jpg",
//     quote:
//       "Outstanding service and exceptional attention to detail. Nirmaan transformed our project delivery process completely.",
//     author: "Rajesh Kumar",
//     title: "Project Director, Tech Innovations",
//     image: "/avatars/rajesh-kumar-profile.jpg",
//   },
//   {
//     id: 3,
//     company: "Global Builders",
//     logo: "/logos/global-builders-logo.jpg",
//     quote:
//       "The expertise and professionalism demonstrated by Nirmaan exceeded all our expectations. Highly recommended!",
//     author: "Priya Sharma",
//     title: "CEO, Global Builders",
//     image: "/avatars/priya-sharma-profile.jpg",
//   },
//   {
//     id: 4,
//     company: "Construction Plus",
//     logo: "/logos/construction-plus-logo.jpg",
//     quote: "Working with Nirmaan has been a transformative experience. Their innovative approach sets them apart.",
//     author: "Vikram Singh",
//     title: "Operations Head, Construction Plus",
//     image: "/avatars/vikram-singh-profile.jpg",
//   },
// ]

// export default function TestimonialCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isAutoPlay, setIsAutoPlay] = useState(true)

//   useEffect(() => {
//     if (!isAutoPlay) return

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [isAutoPlay])

//   const goToPrevious = () => {
//     setIsAutoPlay(false)
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }

//   const goToNext = () => {
//     setIsAutoPlay(false)
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length)
//   }

//   const goToSlide = (index: number) => {
//     setIsAutoPlay(false)
//     setCurrentIndex(index)
//   }

//   const current = testimonials[currentIndex]
//   const ARROW_COLOR = 'text-gray-800'; // Define color for arrows

//   return (
//     <div className="w-full bg-gradient-to-b from-white to-gray-50 py-16 px-4">
//       {/* Red top border */}
//       <div className="h-1 bg-destructive"></div>

//       {/* Main Content Container - NOW RELATIVE FOR ARROW POSITIONING */}
//       <div className="max-w-4xl mx-auto relative mt-12 mb-12"> 
        
//         {/* ========================================================== */}
//         {/* FIX: Navigation Arrows - ABSOLUTE CENTERED LEFT/RIGHT        */}
//         {/* ========================================================== */}
//         <div className="hidden md:flex absolute inset-y-0 w-full justify-between items-center z-20 pointer-events-none">
          
//           {/* Previous Button (Left) */}
//           <Button
//             onClick={goToPrevious}
//             className="w-12 h-12 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md pointer-events-auto"
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeft className={cn("w-6 h-6", ARROW_COLOR)} />
//           </Button>
          
//           {/* Next Button (Right) */}
//           <Button
//             onClick={goToNext}
//             className="w-12 h-12 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md pointer-events-auto"
//             aria-label="Next testimonial"
//           >
//             <ChevronRight className={cn("w-6 h-6", ARROW_COLOR)} />
//           </Button>
//         </div>


//         {/* Logo */}
//         <div className="flex justify-center mb-8">
//           <div className="bg-destructive px-8 py-4 transform -skew-x-12 shadow-lg">
//             <ResizableImage src={current.logo || "/placeholder.svg"} alt={current.company} className="h-12 transform skew-x-12" />
//           </div>
//         </div>

//         {/* Testimonial quote */}
//         <div className="text-center mb-12 px-12"> {/* Added horizontal padding to prevent quote from touching arrows */}
//           <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed">
//             "{current.quote}"</p>
//         </div>

//         {/* Author section */}
//         <div className="flex flex-col items-center mb-12">
//           <div className="w-24 h-24 rounded-full border-4 border-destructive overflow-hidden mb-4 flex-shrink-0">
//             <ResizableImage
//               src={current.image || "/placeholder.svg"}
//               alt={current.author}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900">{current.author}</h3>
//           <p className="text-gray-600 text-sm">{current.title}</p>
//         </div>

//         {/* Dot indicators */}
//         <div className="flex justify-center gap-3 mb-8">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === currentIndex ? "bg-gray-900 w-8" : "bg-gray-300 hover:bg-gray-400"
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Red bottom border */}
//       <div className="h-1 bg-destructive mt-12"></div>
//     </div>
//   )
// }

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from "lucide-react";
import ResizableImage from './ResizableImage';
import { Button } from './ui/button';

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import test from "../assets/Social Icon/Tech.png"
import BetaMaker from '../assets/Social Icon/Beta Makers.png';
// 2. Import Swiper styles (Crucial for arrows and dots)
// 
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


interface Testimonial {
  id: number;
  company: string;
  logo: string;
  quote: string;
  author: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    company: "Beta Makers Lab",
    logo: BetaMaker,
    quote:
      "Nirmaan's MEP contracting services, combined with their planning technology, have allowed us to complete our MEP projects on time and within budget. They are a game-changer in the industry!",
    author: "Mayank Bhandari",
    title: "Principal Architect, Beta Maker Lab",
    image: test,
  },
  {
    id: 2,
    company: "Tech Innovations",
    logo: BetaMaker,
    quote:
      "Outstanding service and exceptional attention to detail. Nirmaan transformed our project delivery process completely.",
    author: "Rajesh Kumar",
    title: "Project Director, Tech Innovations",
    image: test,
  },
  {
    id: 3,
    company: "Global Builders",
    logo: BetaMaker,
    quote:
      "The expertise and professionalism demonstrated by Nirmaan exceeded all our expectations. Highly recommended!",
    author: "Priya Sharma",
    title: "CEO, Global Builders",
    image: test,
  },
  {
    id: 4,
    company: "Construction Plus",
    logo: BetaMaker,
    quote: "Working with Nirmaan has been a transformative experience. Their innovative approach sets them apart.",
    author: "Vikram Singh",
    title: "Operations Head, Construction Plus",
    image: test,
  },
];

const ARROW_COLOR = 'text-gray-800'; 
const RED_BORDER_COLOR = 'bg-destructive';

export default function TestimonialCarousel() {
  // Use state to hold the Swiper instance for external control (optional, but useful)
  const [swiper, setSwiper] = useState<SwiperType | null>(null);


  // Note: Autoplay is now managed directly by Swiper's Autoplay module.
  // The logic for goToNext, goToPrevious, and goToSlide can be replaced by swiper.slideNext(), etc.

  // Custom function to handle navigation via external buttons
  const slideToNext = () => {
    if (swiper) swiper.slideNext();
  };

  const slideToPrev = () => {
    if (swiper) swiper.slidePrev();
  };
  
  // Custom class names for controlling Swiper's default styles via CSS (if needed)
  const swiperPrevButtonClass = 'testimonial-swiper-button-prev';
  const swiperNextButtonClass = 'testimonial-swiper-button-next';

  return (
    <div className="w-full"> {/* Added relative for the outer container */}
      
      {/* Red top border */}
      <div className={ ` relative h-1 ${RED_BORDER_COLOR}`}></div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto py-12 relative overflow-hidden"> 
        
        {/* ========================================================== */}
        {/* SWIPER CONTAINER */}
        {/* ========================================================== */}
        <Swiper
          // 3. Register the modules
          modules={[Navigation, Pagination, Autoplay]}
          
          // 4. Set Swiper instance to state
       onSwiper={(swiperInstance) => setSwiper(swiperInstance)}

          
          // 5. Configuration
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          speed={500} // Transition speed
          
          // 6. Navigation (Arrows)
          navigation={{
            prevEl: `.${swiperPrevButtonClass}`,
            nextEl: `.${swiperNextButtonClass}`,
          }}
          
          // 7. Pagination (Dots) - Customizing the class name
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination-testimonial', // Assign a unique class for pagination container
            bulletClass: 'w-3 h-3 rounded-full transition-all duration-300 inline-block mx-1 cursor-pointer bg-gray-300 hover:bg-gray-400',
            bulletActiveClass: `w-8 !bg-destructive`, // !important needed to override Swiper's internal active class
          }}
          
          // 8. Autoplay (Enabled)
          autoplay={{
            delay: 6000, // 6 seconds delay
            disableOnInteraction: false, // Continue autoplay after manual slide
          }}
        >
          {/* Map through testimonials and render each one inside a SwiperSlide */}
          {testimonials.map((current) => (
            <SwiperSlide key={current.id}>
              
              {/* Logo */}
          <div className="flex justify-center mb-4 h-20 md:h-40">
           
            {/* The image is centered and sized */}
            <ResizableImage 
                src={current.logo} // Path to the uploaded banner image
                alt={current.company} 
                className="object-cover" 
            />
      
        </div>
              {/* Testimonial Quote */}
              <div className="text-center mb-10 px-4">
                <p className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed max-w-3xl mx-auto">
                  <span className="text-destructive font-serif text-4xl mr-1">&ldquo;</span>
                  {current.quote}
                  <span className="text-destructive font-serif text-4xl ml-1">&rdquo;</span>
                </p>
              </div>

              {/* Author section */}
              <div className="flex flex-col items-center mb-6">
                <div className={`w-20 h-20 rounded-full border-4 border-destructive overflow-hidden mb-4 flex-shrink-0`}>
                  <ResizableImage
                    src={current.image || "/placeholder.svg"}
                    alt={current.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{current.author}</h3>
                <p className="text-gray-600 text-sm font-medium">{current.title}</p>
              </div>

            </SwiperSlide>
          ))}
          
        </Swiper>
        {/* END SWIPER CONTAINER */}
        
        {/* ========================================================== */}
        {/* 3. PAGINATION DOTS CONTAINER (Required for custom pagination element) */}
        {/* ========================================================== */}
        <div className="swiper-pagination-testimonial flex justify-center gap-2 mt-8 md:mt-12" />

      </div> {/* End max-w-4xl mx-auto */}
      
      {/* ========================================================== */}
      {/* 4. EXTERNAL NAVIGATION BUTTONS (For controlling Swiper) */}
      {/* ========================================================== */}
      {/* Desktop Arrows (Positioned outside the max-width container) */}
      {/* <div className="flex justify-center  gap-6 mt-6 md:block">
          
        <Button
          onClick={slideToPrev}
          className={cn(
            "w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-xl pointer-events-auto -ml-16",
            swiperPrevButtonClass // Custom class for Swiper navigation
          )} 
          aria-label="Previous testimonial"
        >
          <ChevronLeft className={cn("w-6 h-6", ARROW_COLOR)} />
        </Button>
        
        <Button
          onClick={slideToNext}
          className={cn(
            "w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-xl pointer-events-auto -mr-16",
            swiperNextButtonClass // Custom class for Swiper navigation
          )} 
          aria-label="Next testimonial"
        >
          <ChevronRight className={cn("w-6 h-6", ARROW_COLOR)} />
        </Button>
      </div> */}

      {/* Mobile Arrows (Below content on small screens) */}
      {/* <div className="flex justify-center gap-6 mt-6 md:hidden">
          <Button
            onClick={slideToPrev}
            className="w-10 h-10 rounded-full border border-gray-300 bg-white shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className={cn("w-5 h-5", ARROW_COLOR)} />
          </Button>
          <Button
            onClick={slideToNext}
            className="w-10 h-10 rounded-full border border-gray-300 bg-white shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className={cn("w-5 h-5", ARROW_COLOR)} />
          </Button>
      </div> */}


      {/* Red bottom border */}
      {/* <div className={` absolute inset-x-0 bottom-0 h-1 ${RED_BORDER_COLOR} `}></div> */}
    </div>
  );
}