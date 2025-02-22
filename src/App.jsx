import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <div className="">
       <Navbar/>
       <Home/>
       <About/>
       <Contact/>
       <Footer/>
    </div>
    
    </>
  );
}

export default App;
