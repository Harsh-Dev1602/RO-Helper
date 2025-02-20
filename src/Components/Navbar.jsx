import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RiMenuUnfold4Line } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import Logo from "../../public/Img/LOGO.png"

function Navbar() {
  const [openMenu, setMenu] = useState(false);
  const menuName = [
    {
      id: 1,
      text: "Home",
      to: "/"
    },
    {
      id: 2,
      text: "About",
      to: "/about"
    },
    {
      id: 3,
      text: "Contact Us",
      to: "/contact"
    },
  ]
  return (
    <>
      <header className="w-full shadow shadow-[#cccccc94] sticky  top-0 left-0   bg-gray-900 text-white px-10 py-5 z-40">
        <div className="  container mx-auto flex justify-between items-center">
          <Link to="/" className=" flex justify-center items-center gap-2 cursor-pointer">
            <img src={Logo} className=' w-10  shadow shadow-[#ccc] rounded-full ' />
            <h1 className="text-3xl  font-bold">RO Service</h1>
          </Link>

          <nav className=' hidden   lg:block'>
            {
              menuName.map(({ id, text, to }) => (
                <Link to={to} key={id} className="px-5 py-2 rounded-md font-semibold  text-lg hover:bg-gray-800  hover:text-white">{text}</Link>
              ))
            }
          </nav>

          <div className="lg:hidden block text-3xl text-white" onClick={() => setMenu(!openMenu)}>
            {openMenu ? <RiCloseFill /> : <RiMenuUnfold4Line />}
          </div>

        </div>
      {
        openMenu && (
          <div className="w-full  h-auto left-0 fixed top-21 lg:hidden ">
            <nav className='w-full rounded-xl py-10 h-full bg-gray-900 text-white flex justify-center items-center flex-col '>
              {
                menuName.map(({ id, text, to }) => (
                  <Link to={to} key={id} onClick={() => setMenu(!openMenu)} className="w-[90%] text-center  py-3 rounded-md font-semibold  text-xl  active:bg-gray-800">{text}</Link>
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
