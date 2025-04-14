import React from 'react';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import Logo from "../../public/Img/LOGO.png"
import { Link } from 'react-scroll';
import 'animate.css';

function Navbar() {
  const [openMenu, setMenu] = useState(false);
  const menuName = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Contact Us",
    },
  ]
  return (
    <>
      <header className="w-[99%] S bg-white mx-[0.5%] rounded-b-2xl  sticky  top-0 left-0  px-10 py-4 z-40">
        <div className="  container mx-auto flex justify-between items-center">
          <Link to='Home' activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} className=" flex justify-center items-center gap-2 cursor-pointer">
            <img src={Logo} className=' w-10 h-10  rounded-full ' />
            <h1 className="text-2xl font-bold"><span className=' text-3xl'>RO</span> <span className=' text-3xl'>HELPER</span></h1>
          </Link>

          <nav className=' hidden   lg:flex'>
            {
              menuName.map(({ id, text }) => (
               <Link
                to={text}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             key={id} className="px-4 py-1 rounded-md font-bold cursor-pointer  text-lg hover:shadow shadow-[#cccc]">{text}</Link>
              ))
            }
          </nav>

          <div className="lg:hidden block text-3xl cursor-pointer" onClick={() => setMenu(!openMenu)}>
            {openMenu ? <RiCloseFill /> :  <IoMenu />}
          </div>

        </div>
      {
        openMenu && (
          <div className="w-full  h-auto left-0 fixed top-20 lg:hidden ">
            <nav className='w-full rounded-xl py-10 h-full flex justify-center items-center flex-col bg-white shadow shadow-[#ccc] '>
              {
                menuName.map(({ id, text }) => (
                 <Link 
                  to={text}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                 key={id} onClick={() => setMenu(!openMenu)} className="w-[90%] text-center  py-3 rounded-md font-bold cursor-pointer  text-xl  active:shadow shadow-[#ccc]">{text}</Link>
                ))
              }
            </nav>
          </div>
        )
      }
      </header>
    </>

  );
}

export default Navbar;
