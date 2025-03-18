import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import ContactForm from '../Pages/ContactForm';
import "./Home.css"

function Contact() {
  return (
    <div name="Contact Us" className="w-full rounded-4xl bg-white  p-5">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-800">Contact Us</h1>
        <p className="mt-4">We'd love to hear from you!</p>
      </header>

      <section className="S w-full mt-8  mx-auto flex justify-center items-center flex-col text-3xl gap-5   p-2 py-5 rounded-2xl rounded-tl-[50px] rounded-br-[50px] bg-blue-100">
        <h1 className=' w-[90%] lg:w-[50%] bg-white shadow shadow-[#cccc] p-2 rounded-2xl flex justify-center gap-2 '> <FaPhone className=' text-black text-4xl ' />
          <a href='tel:+919926052876' className=' font-semibold text-2xl text-black hover:underline ' > Mobile Number</a>
        </h1> 

        <h1 className=' w-[90%] lg:w-[50%] bg-white shadow shadow-[#cccc] p-2 rounded-2xl flex justify-center gap-2'><FaSquareWhatsapp className='text-black  text-4xl ' />
          <a href={`https://wa.me/${+919926052876}`} target="_blank" rel="noopener noreferrer" className=' font-semibold text-2xl text-black hover:underline ' >Whatsapp</a>
        </h1>

        <h1 className='  w-[90%] lg:w-[50%] bg-white shadow shadow-[#cccc] p-2 rounded-2xl flex justify-center gap-2 '> <FaFacebook className=' text-black text-4xl ' />
          <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/OceanROService' className=' font-semibold text-2xl text-black hover:underline' >Facebook</a>


        </h1>
        <h1 className=' w-[90%] lg:w-[50%] bg-white shadow shadow-[#cccc] p-2 rounded-2xl flex justify-center gap-2 '><FaInstagramSquare  className=' text- text-4xl black' />
          <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/ocean_water_solution?igsh=NG1xdnc4Ym43dTZr ' className=' font-semibold text-2xl text-black hover:underline' >Instagram</a>

          </h1>
      </section>
      <ContactForm />
    </div>
  );
}

export default Contact;
