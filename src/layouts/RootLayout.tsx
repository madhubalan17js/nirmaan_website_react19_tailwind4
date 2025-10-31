import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Your Nirmaan Navbar
import Footer from "../components/Footer"

/**
 * RootLayout defines the persistent structure of the application 
 * (Navbar, Footer, global wrappers, etc.).
 */
const RootLayout: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* 1. The Navbar is static and appears on every page */}
      <Navbar />
      
      {/* 2. The Outlet renders the content of the matched child route */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />

      {/* You would place a global Footer here */}
    </div>
  );
};

export default RootLayout;