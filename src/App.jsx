import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ContactForm from './Pages/ContactForm';
import { Toaster } from 'react-hot-toast';
import AddStructuredData from './AddStructuredData';

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Home />
        <About />
        <Contact />
        <ContactForm />
        <Footer />
        <AddStructuredData/>
      </div>
      <Toaster/>

    </>
  );
}

export default App;
