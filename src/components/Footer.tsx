import React from 'react';
import { Mail, Phone, X, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import LOGO from '../assets/LOGO.png';
import Hard_HAT_CAP from '../assets/hardhat-cap.png';
import HArdHAT_CAPSTICKER from '../assets/hardhat-cap_wipe_bg.png';
import ResizableImage from './ResizableImage';
import RotatingHighlight from './common/RotatingHighlight';

// ==========================================================
// CONSTANTS (Centralized Definitions)
// ==========================================================

const LINKEDIN_COLOR = '#0077B5';
const X_COLOR = '#000000';
// Note: BRAND_COLOR is used for classes where Tailwind utility is not suitable (e.g., inline style)
const BRAND_COLOR = '#D03b44';

// Colors for the Mobile Dark Section
const DARK_BG = '#1a1a1a';
const QUESTION_COLOR = '#b0b0b0';

// Colors for the Light Sections (Based on mobile image analysis)
const ADDRESS_COLOR = '#813237';
const FOOTER_BG = 'rgb(249 237 238)';
const LIGHT_HERO_BG = 'bg-gray-50/50';

const headOfficeAddress = [
  '1st Floor, 234, 9th Main, 16th Cross,',
  'Sector 6, HSR Layout, Bengaluru,',
  '560102, Karnataka, India',
];

const desktopNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Why Nirmaan', href: '/why' },
  { label: 'Our Services', href: '/services', dropdown: true },
];

const mobileFooterNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Why Choose Nirmaan', href: '/why' },
];

// ==========================================================
// DESKTOP LAYOUT COMPONENT
// ==========================================================
const DesktopFooterLayout: React.FC = () => (
  <div className="w-full">
 

{/* 
    ================================================================
    1. TOP SECTION: Hero/Call to Action Block ("Build Smarter...")
    ================================================================
*/}
<div className={LIGHT_HERO_BG + ' pt-16 pb-12'}>
  <div className="mx-auto max-w-[1280px] px-6">
    
    {/* Main Flex Container for Left (Text) and Right (Image) */}
    <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center"> {/* Added lg:items-center for vertical alignment */}

      {/* LEFT: Text & Buttons (e.g., 60% width on desktop) */}
      <div className="flex-1 w-full text-left lg:w-[60%]"> {/* Adjusted width for a better visual split */}
        <h2 className="text-blackN text-3xl font-normal lg:text-5xl ">
          Build Smarter with
          <RotatingHighlight text="Nirmaan"/>
          {/* <span className=" ml-2 inline-block rounded-lg px-2 py-1 text-white bg-destructive font-bold">
            Nirmaan
          </span> */}
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
          Transform your construction experience with our innovative MEP solutions tailored for your needs.
        </p>

        <div className="mt-8 flex justify-center space-x-4 lg:justify-start">
          <Button variant="destructive" size="lg" className="px-6 py-3 text-lg w-full max-w-xs lg:w-auto lg:max-w-none" onClick={() => console.log('Contact Us clicked')}>
            Contact Us
          </Button>

          <Button variant="nirmaanOutline" size="lg" className="hidden lg:flex px-6 py-3 text-lg" onClick={() => console.log('Learn More clicked')}>
            Learn More
          </Button>
        </div>
      </div>

      {/* RIGHT: Image (Hidden on mobile, 40% width on desktop) 
          FIX: Used ResizableImage and controlled the container's width.
      */}
      <div className="hidden lg:flex lg:w-[40%] justify-center items-center">
        <ResizableImage
          src={Hard_HAT_CAP}
          alt="Construction Hard Hat"
          // Classname controls its size within the 40% container
          className="w-full h-auto object-contain" 
          fit="contain" 
        />
      </div>
    </div>
  </div>
</div>

 

    {/* 
            ================================================================
            2. MID SECTION: Contact Info and Social Links
            ================================================================
        */}
    <div className="w-full pb-12 pt-4" style={{ backgroundColor: FOOTER_BG }}>
      <div className="mx-auto max-w-[1280px] px-6">

        {/* Contact Buttons & Social Links (DESKTOP ONLY) */}
        <div className="hidden flex-col items-center justify-between gap-6 lg:flex lg:flex-row lg:items-end">

          {/* LEFT: Contact Buttons & Question Text */}
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-gray-600 mb-4 hidden lg:block">We are here to answer your questions</p>

            <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
              <Button variant="destructive" size="lg" className="flex w-full items-center justify-center space-x-2 rounded-full px-6 py-3 lg:w-auto" asChild>
                <a href="tel:+919599596773" className="text-lg text-white"><Phone className="h-5 w-5" /><span className='font-bold'>+91- 9599596773</span></a>
              </Button>

              <Button variant="destructive" size="lg" className="flex w-full items-center justify-center space-x-2 rounded-full px-6 py-3 lg:w-auto" asChild>
                <a href="mailto:info@nirmaan.app" className="text-lg text-white font"><Mail className="h-5 w-5" /><span className='font-bold'>info@nirmaan.app</span></a>
              </Button>
            </div>
          </div>

          {/* RIGHT: Social Links */}
          <div className="flex items-center space-x-4 bg-white/80 px-8 py-2 rounded-full shadow">
            <span className="text-gray-600">Follow us on</span>
            <Link to="#" className="rounded-full bg-gray-300 p-2 shadow hover:opacity-80" aria-label="Follow us on LinkedIn">
              <Linkedin className="h-5 w-6" style={{ color: LINKEDIN_COLOR }} />
            </Link>
            <Link to="#" className="rounded-full bg-gray-300 p-2 shadow hover:opacity-80" aria-label="Follow us on X/Twitter">
              <X className="h-5 w-6" style={{ color: X_COLOR }} />
            </Link>
          </div>
        </div>

        {/* Address Blocks (Desktop only) */}
        <div className="mt-12 justify-between gap-6 hidden lg:flex">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex-1">
              <h3 className="text-sm font-semibold text-gray-500 mt-2">Head Office</h3>
              {headOfficeAddress.map((line, lineIndex) => (
                <p key={lineIndex} className="text-md font-bold" style={{ color: ADDRESS_COLOR }}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* 
            ================================================================
            3. BOTTOM SECTION: Logo and Copyright/Policies
            ================================================================
        */}


    <div className="w-full py-10 text-center">
      <div className="mx-auto max-w-[1280px] px-6">

        {/* Overall Container (relative to center everything) */}
        <div className="relative flex flex-col items-center justify-center">

          {/* 
        NEW: Logo and Tagline Wrapper 
        - This is the new relative context for the tagline
      */}
          <div className="relative inline-flex items-center justify-center">

            {/* Logo Icon (Left Side) */}
            <div className="hidden sm:block">
              <img src={LOGO} alt="Nirmaan Logo" className="h-30 w-30 lg:h-40 lg:w-40 xl:h-80 xl:w-80 object-contain" />
            </div>

            {/* Nirmaan Text (The large, dominant element) */}
            <span className="font-extrabold text-[4rem] sm:text-[6rem] lg:text-[14rem] xl:text-[13rem] leading-none text-destructive">
              Nirmaan
            </span>

            {/* Tagline - ABSOLUTE Positioning FIX */}
            <p
              // This must now be absolute relative to its new parent 'inline-flex' div
              className="text-2xl font-medium text-destructive text-center 
                     absolute
                     right-5                     /* Aligns to the right edge of the text/logo block */
                     bottom-[70%]                /* Pushes it up to sit above the text */
                     lg:text-right 
                     lg:mt-0"
            >
              Making Construction Easier
            </p>
          </div>

          {/* Copyright and Policies (Aligned Center) */}
          <div className="mt-0 flex flex-col items-center space-y-2 font-semibold ">
            <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-8 text-base font-medium">
              <Link to="/terms" className="hover:opacity-80 underline underline-offset-4 text-destructive">Terms & Conditions</Link>
              <p className="text-gray-600 font-normal">© 2025 Nirmaan. All rights reserved</p>
              <Link to="/cancellation" className="hover:opacity-80 underline underline-offset-4 text-destructive">Cancellation Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


// ==========================================================
// MAIN FOOTER COMPONENT
// ==========================================================
const Footer: React.FC = () => {
  return (
    <footer className="w-full">

      {/* ========================================================== */}
      {/* 1. MOBILE LAYOUT (Default, then hidden on lg)              */}
      {/* ========================================================== */}
      <div className="lg:hidden w-full">
        <div className="mx-auto py-6">

          {/* A. MOBILE HERO/CTA Block */}
          <div className="mb-8 px-6">
            <h2 className="text-2xl font-normal text-gray-500">
              Build smarter with
               <RotatingHighlight text="Nirmaan"/>
             
            </h2>
            <p className="mt-2 text-base">
              Transform your construction experience with our innovative MEP solutions tailored for you.
            </p>
            <Button variant="destructive" size="lg" className="mt-4  px-6 py-3 text-lg" onClick={() => console.log('Contact Us clicked')}>
              Contact Us
            </Button>
          </div>

          {/* B. MOBILE ADDRESS Blocks (Stacked) */}
          <div className="w-full h-[1px] mb-8 bg-destructive"></div> {/* Separator Line */}
          <div className="mb-8 px-6 space-y-4">
            {/* The Head Office text is bold/red, while the 'Head Office' title is regular text */}
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex-1">
                <h3 className="text-sm font-semibold text-gray-500 mt-2">Head Office</h3>
                {headOfficeAddress.map((line, lineIndex) => (
                  <p key={lineIndex} className="text-md font-semibold ml-2" style={{ color: ADDRESS_COLOR }}>{line}</p>
                ))}
              </div>
            ))}
          </div>



          {/* C. MOBILE CONTACT & SOCIAL Block (Light Area - NEW STRUCTURE) */}
          <div className="w-ful px-6 pt-4 pb-4 ">

            {/* Question Text */}
            <p className=" text-sm text-gray-600 mb-4">We are here to answer your questions</p>

            {/* FIX: Main flex row container to align left (Contact) and right (Social) */}
            <div className="flex items-start justify-between ml-2">

              {/* LEFT: Contact Details (Stacked Vertically) */}
              <div className="flex flex-col space-y-2">
                <a href="tel:+919599596773" className="flex items-center space-x-3 text-lg font-bold" style={{ color: ADDRESS_COLOR }}>
                  <Phone className="h-5 w-5" />
                  <span className='font-bold'>+91- 9599596773</span>
                </a>

                <a href="mailto:info@nirmaan.app" className="flex items-center space-x-3 text-lg font-semibold" style={{ color: ADDRESS_COLOR }}>
                  <Mail className="h-5 w-5" />
                  <span className='font-bold'>info@nirmaan.app</span>
                </a>
              </div>


              {/* RIGHT: Social Icons (Aligned to the end of the container) */}
              <div className="flex items-center space-x-3 self-end">
                <Link to="#" className="rounded-full p-2" style={{ backgroundColor: '#e0e0e0' }} aria-label="Follow us on X/Twitter">
                  <X className="h-6 w-6" style={{ color: X_COLOR }} />
                </Link>
                <Link to="#" className="rounded-full p-2" style={{ backgroundColor: LINKEDIN_COLOR }} aria-label="Follow us on LinkedIn">
                  <Linkedin className="h-6 w-6" style={{ color: '#ffffff' }} />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] mb-8 bg-destructive"></div> {/* Separator Line */}


          {/* D. MOBILE NAVIGATION LINKS */}
          <div className="mt-8 px-6 pb-6">
            <h3 className="text-sm text-gray-400 mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-3">
              {mobileFooterNavLinks.map((link) => (
                <Link key={link.label} to={link.href} className="text-lg ml-4 font-normal text-gray-700 hover:text-destructive">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* <div className="relative mt-12 flex flex-col items-center pt-12 overflow-hidde">
           
            <div className='flex flex-row items-center justify-between space-x-4'>
             <img src={LOGO} alt="Nirmaan Logo" className="h-16 w-16 object-contain" />
              
             <span className=" text-[3rem] font-bold text-destructive">
              <div className="absolute ">
        <ResizableImage
            src={HArdHAT_CAPSTICKER} // <--- USE IMPORTED IMAGE
            alt="Construction Hard Hat"
            className="w-full h-full  transform translate-x-1/4 translate-y-[-10%] absolute top-0 right-10 z-0"
            fit="contain" 
            lazyLoad={false}
        />
    </div>
              Nirmaan
            </span>
            </div>
            

            <p className="text-sm font-semibold">© 2025 Nirmaan. All rights reserved</p>
            <div className="flex space-x-4 text-sm font-medium mt-2">
              <Link to="/terms" className="underline underline-offset-4 text-destructive">Terms & Conditions</Link>
              <Link to="/cancellation" className="underline underline-offset-4 text-destructive">Cancellation Policy</Link>
            </div>

            {/* Hard Hat Image for style (Set to absolute/z-index to be a background) */}

          {/* <div className="absolute top-[-45px] right-26">
               <img
              src={HArdHAT_CAPSTICKER} // <--- USE IMPORTED IMAGE
              alt="Construction Hard Hat"
              className="w-60 h-60" // h-auto ensures proportional scaling
            />
            </div> 
          </div> */}


          {/* E. MOBILE LOGO & COPYRIGHT */}
          <div className="flex pt-30 flex-col items-center  overflow-hidden">

            {/* The main container for the logo and hard hat */}
            <div className='relative z-10 flex flex-row items-center justify-center space-x-4'> {/* Added relative/z-10 */}

              <ResizableImage
                src={LOGO}
                alt="Nirmaan Logo"
                className="h-16 w-16 object-contain"
                lazyLoad={false}
              />

              {/* Hard Hat Image Container (Absolute, scaled relative to the logo block) */}
              <div
                // Position absolute relative to the 'flex' container above
                className="absolute z-0"
                // Adjust size (w-1/2 of the parent) and position
                // Values are estimated to put the cap on the Nirmaan text.
                style={{
                  width: '100%',
                  height: 'auto',
                  left: '28%', // Center horizontally
                  top: '-170%', // Move up 
                  right: '0', // Move right
                  transform: 'rotate(0deg)' // Optional: Match the slight rotation
                }}
              >
                <ResizableImage
                  src={HArdHAT_CAPSTICKER}
                  alt="Construction Hard Hat"
                  fit="cover"
                  lazyLoad={false}
                />
              </div>

              {/* Nirmaan Text (Ensure it has higher Z-index if the cap overlaps) */}
              <span className="text-[3rem] font-bold text-destructive relative z-20"> {/* Added relative z-20 */}
                Nirmaan
              </span>
             
            </div>

            {/* Copyright and Policies (Continue with relative/z-10) */}
            <p className="relative z-10 text-sm font-semibold mt-4">© 2025 Nirmaan. All rights reserved</p>
            <div className="relative z-10 flex space-x-4 text-sm font-medium mt-2">
              <Link to="/terms" className="underline underline-offset-4 text-destructive">Terms & Conditions</Link>
              <Link to="/cancellation" className="underline underline-offset-4 text-destructive">Cancellation Policy</Link>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================== */}
      {/* 2. DESKTOP LAYOUT (Hidden by default, shown on lg)         */}
      {/* ========================================================== */}
      <div className="hidden lg:block">
        <DesktopFooterLayout />
      </div>
    </footer>
  );
};

export default Footer;