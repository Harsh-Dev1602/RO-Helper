import React from 'react';
import { useState } from 'react';
import { RiMenuUnfold4Line } from "react-icons/ri";
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
      <header className="w-full shadow shadow-[#cccccc94] sticky  top-0 left-0   bg-gray-900 text-white px-10 py-5 z-40">
        <div className="  container mx-auto flex justify-between items-center">
          <div  className=" flex justify-center items-center gap-2 cursor-pointer">
            <img src={Logo} className=' w-10  shadow shadow-[#ccc] rounded-full ' />
            <h1 className="text-3xl font-bold"><span className=' text-4xl'>R</span>O <span className=' text-4xl'>H</span>elper</h1>
          </div>

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
             key={id} className="px-5 py-2 rounded-md font-semibold cursor-pointer  text-lg hover:bg-gray-800  hover:text-white">{text}</Link>
              ))
            }
          </nav>

          <div className="lg:hidden block text-3xl text-white cursor-pointer" onClick={() => setMenu(!openMenu)}>
            {openMenu ? <RiCloseFill /> : <RiMenuUnfold4Line />}
          </div>

        </div>
      {
        openMenu && (
          <div className="w-full  h-auto left-0 fixed top-21 lg:hidden ">
            <nav className='w-full rounded-xl py-10 h-full bg-gray-900 text-white flex justify-center items-center flex-col '>
              {
                menuName.map(({ id, text }) => (
                 <Link 
                  to={text}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                 key={id} onClick={() => setMenu(!openMenu)} className="w-[90%] text-center  py-3 rounded-md font-semibold cursor-pointer  text-xl  active:bg-gray-800">{text}</Link>
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
