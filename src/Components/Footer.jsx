import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { PiMapPinAreaFill } from "react-icons/pi";


function Footer() {
  const Icons = [
    { 
      id: 0, 
      icon: <FaFacebook />,
      link:"https://www.facebook.com/OceanROService"},
    {
      id: 1, 
      icon: <FaSquareWhatsapp />,
      link:`https://wa.me/${+919926052876}`,
    },
    {
      id: 2, 
      icon: <FaInstagramSquare />,
      link:"https://www.instagram.com/ocean_water_solution?igsh=NG1xdnc4Ym43dTZr",
    }
  ];
  return (
    <footer className="bg-black gap-10 lg:gap-0 text-white px-5 lg:px-15 py-20 flex-col lg:flex-row flex justify-between">
      <div className=" order-2 lg:order-1 text-center">
        <p>&copy; 2025 RO Helper. All Rights Reserved. </p>
        <p className=' flex justify-center items-center gap-2.5 mt-1'> <PiMapPinAreaFill className=' text-2xl text-red-600 font-bold'/>Indore, Madhya Pradesh, India</p>
      </div>
      <div className="flex order-1 lg:order-2 gap-8 justify-center items-center">
        {
          Icons.map(({ id, icon, link }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" className=' text-4xl' >{icon}</a>
          ))
        }
      </div>
    </footer>
  );
}

export default Footer;
