import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button'; 
import LOGO from '../assets/LOGO.png';


// Define the structure for the navigation links
interface NavLink {
  label: string;
  href: string;
  dropdown?: boolean;
}

// 1. Define Navigation Links Data (Reordered for the mobile menu appearance)
const mobileNavLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' }, 
    { label: 'Why Nirmaan', href: '/why' },
];

const desktopNavLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Why Nirmaan', href: '/why' },
    { label: 'Our Services', href: '/services', dropdown: true },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const BRAND_COLOR = '#D9444E';
  const navLinkClass = `text-gray-700 transition-colors hover:text-[${BRAND_COLOR}]`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3">
        
        {/* === Logo === */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-3xl font-bold">
              {/* SVG Placeholder */}
              <img 
                    src={LOGO} // <--- Use the imported image file
                    alt="Nirmaan Logo"
                    // Size classes remain the same for proportional scaling
                    className="h-15 w-15 object-contain"
                />
          </div>
          <span className="text-4xl font-semibold text-destructive">Nirmaan</span>
        </Link>

        {/* // img resize logixic  width: 100%;
  height: auto;  */}
         {/* <Link to="/" className="flex flex-row jutify-center items-center">
          <div className="text-3xl font-bold w-[40px] h-[40px]">
              <img 
                    src={LOGO} // <--- Use the imported image file
                    alt="Nirmaan Logo"
                    // Size classes remain the same for proportional scaling
                    className="object-contain"
                />
          </div>
          <span className="text-4xl font-semibold text-destructive ml-2">Nirmaan</span>
        </Link> */}

        {/* === Desktop Navigation Links & Buttons === */}
        <div className="hidden items-center space-x-6 md:flex">
          
          <nav className="flex space-x-6">
            {desktopNavLinks.map((link) => (
              <div key={link.label} >
                <Link
                  to={link.href}
                  className={`flex items-center text-base font-medium ${navLinkClass}`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
              </div>
            ))}
          </nav>
          
          <div className="flex space-x-4">
            <Button variant="destructive" size="lg"  >Quote</Button>
            <Button variant="nirmaanOutline" size="lg" >Consult</Button>
          </div>
        </div>
        
        {/* === Mobile Menu Button (Hamburger) === */}
        <div
          className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-destructive " /> {/* Hamburger Icon in Red */}
        </div>
      </div>

      {/* ============================================== */}
      {/*              MOBILE FULL-SCREEN MENU FIX       */}
      {/* ============================================== */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex h-full w-full flex-col bg-white px-6 py-4 md:hidden">
          
          {/* Mobile Menu Header: Logo and Close Button */}
          <div className="flex items-center justify-between  border-gray-100 pb-4">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
                <div className="text-3xl font-bold" >
                    <img 
                    src={LOGO} // <--- Use the imported image file
                    alt="Nirmaan Logo"
                    // Size classes remain the same for proportional scaling
                    className="h-15 w-15 object-contain"
                />
                </div>
                <span className="text-4xl font-semibold text-destructive">Nirmaan</span>
            </Link>
            
            <div
              onClick={closeMenu}
              className="text-gray-700 hover:text-gray-900 p-1" // Added padding for better tap area
              aria-label="Close menu"
            >
              <X className="h-8 w-8 text-destructive" />
            </div>
          </div>

          {/* FIX 1: Removed flex-grow from <nav> and added padding to the top/bottom for spacing */}
          <nav className="flex flex-col items-center space-y-12 py-20">
            {mobileNavLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.href} 
                onClick={closeMenu}
                // Increased text size and reduced hover opacity for a cleaner look
                className={`text-2xl font-normal text-gray-700 transition-opacity hover:opacity-80`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* FIX 2: Reduced the gap between buttons (space-y-2 instead of space-y-4) */}
          <div className="flex w-full flex-col space-y-6 pb-8 px-6"> 
            <Button 
              variant="destructive" 
              size="lg"
              className="w-full text-xl h-14" // Larger text and fixed height
              onClick={() => { closeMenu(); console.log('Quote clicked'); }}
            >
              Quote
            </Button>
            <Button 
              variant="nirmaanOutline" 
              size="lg" 
              className="w-full text-xl h-14" // Larger text and fixed height
              onClick={() => { closeMenu(); console.log('Consult clicked'); }}
            >
              Consult
            </Button>
          </div>
          
          {/* Mobile Footer/Copyright Section */}
          <div className="mt-auto py-4 text-center border-gray-100 px-4">
            <p className="text-xl font-semibold text-destructive">
                ©2025 Nirmaan. All rights reserved
            </p>
            <div className="flex justify-center space-x-4 text-sm mt-1 text-gray-500">
                <Link to="/cancellation" className="hover:text-gray-700" onClick={closeMenu}>Cancellation Policy</Link>
                <Link to="/terms" className="hover:text-gray-700" onClick={closeMenu}>Terms & Conditions</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;