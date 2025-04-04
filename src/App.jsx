import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Icon from './Icon';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { SpeedInsights } from '@vercel/speed-insights/react';
import NotFound from "./Pages/NotFound";
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<>
          <div>
            <Navbar />
            <Home />
            <About />
            <Contact />
            <Footer />
            <Icon />
          </div>
          <Toaster />
          <SpeedInsights />
        </>} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
