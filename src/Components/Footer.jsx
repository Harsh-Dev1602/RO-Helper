import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
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
    }
  ];
  return (
    <footer className="bg-gray-900 gap-6 lg:gap-0 text-white p-10 flex-col lg:flex-row flex justify-between">
      <div className=" order-2 lg:order-1 text-center">
        <p>&copy; 2025 RO Service. All Rights Reserved.</p>
      </div>
      <div className="flex order-1 lg:order-2 gap-4 justify-center items-center">
        {
          Icons.map(({ id, icon, link }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" className=' text-3xl' >{icon}</a>
          ))
        }
      </div>
    </footer>
  );
}

export default Footer;
