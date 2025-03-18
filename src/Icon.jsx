import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";


function Icon() {
    return (
        <>
            <div className=" fixed bottom-5 right-5">
                <h1 className='w-[50px] h-[50px] flex justify-center items-center bg-blue-400 p-2 rounded-full'> 
                    <a href='tel:+919926052876' className=' font-semibold  text-black hover:underline ' ><MdCall className=' text-black text-5xl border-2 border-black rounded-full p-2  ' /> </a>
                </h1>
                <br />
                <h1 className='w-[50px] h-[50px] flex justify-center items-center bg-[#31cb31]  p-2 rounded-full'>
                    <a href={`https://wa.me/${+919926052876}`} target="_blank" rel="noopener noreferrer" className=' font-semibold text-2xl text-black hover:underline ' ><FaWhatsapp className='text-green-100  text-4xl ' /></a>
                </h1>
            </div>
        </>
    )
}

export default Icon