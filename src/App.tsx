import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Import Layout
import RootLayout from './layouts/RootLayout';

// Import Placeholder Pages
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import WhyNirmaanPage from './pages/WhyNirmaanPage';
import OurServicesPage from './pages/OurServicesPage';

// --- Router Definition using v7.x APIs ---
const router = createBrowserRouter(
  createRoutesFromElements(
    // The parent Route uses the RootLayout component
    <Route path="/" element={<RootLayout />}>
      
      {/* 1. Index Route: Matches the path of the parent ("/"), rendering HomePage inside the Outlet */}
      <Route index element={<HomePage />} />
      
      {/* 2. Nested Routes for Navbar Links */}
      <Route path="about" element={<AboutUsPage />} />
      <Route path="why" element={<WhyNirmaanPage />} />
      <Route path="services" element={<OurServicesPage />} />
      
      {/* 3. Catch-all for 404/Not Found pages */}
      <Route path="*" element={<div className="p-8 text-center text-xl">404 - Page Not Found</div>} />
    </Route>
  )
);

/**
 * The main App component is responsible for providing the router context.
 */
const App = () => {
  // Renders the entire application based on the defined routes
  return <RouterProvider router={router} />;
};

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
     
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
