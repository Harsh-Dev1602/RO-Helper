import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Icon from './Icon';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Contact />
        <Footer />
        <Icon/>
      </div>
      <Toaster/>

    </>
  );
}

export default App;
