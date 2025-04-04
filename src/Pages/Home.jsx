import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import BgImg3 from "../../public/Img/BG-IMG1.png"
import BgImg4 from "../../public/Img/BG-IMG2.png"
import BgImg5 from "../../public/Img/BG-IMG3.png"
import BgImg6 from "../../public/Img/BG-IMG4.png"


function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
  const bgImg = [ {id:2,img:BgImg3,}, {id:3,img:BgImg4,}, {id:4,img:BgImg5,}, {id:5,img:BgImg6,}];

  return (
    <div name="Home" className=" mx-auto p-5 z-30">
      <div className="  Bg-water  rounded-2xl rounded-bl-[100px] ">
        <header className="text-center p-5">

          <h1 className=" text-4xl font-bold text-blue-800 animate__animated animate__zoomIn"> Welcome to ocean water solution </h1>
          <p className="mt-4 text-black">Your go-to solution for quality services!</p>
        </header>
        <section className="w-[85%]  h-auto lg:w-[70%]  bg-transparent rounded-xl mx-auto ">
          <Slider {...settings}>
            {
              bgImg.map(({id,img}) => (
                <div key={id}>
                <img src={img} className=' w-full h-auto object-cover' />
                </div>
              ))
            }
          </Slider>
        </section>
      </div>

      <div className="S p-5   rounded-2xl  rounded-tr-[100px] mt-5">
        <section className="mt-10 ">
          <h2 className="text-3xl font-semibold">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="p-6 S rounded-lg bg-blue-100">
              <h3 className="text-2xl">Routine Service:</h3>
              <p className="mt-2"> Regular maintenance to ensure your water purifier is functioning optimally.</p>
            </div>
            <div className="p-6 S rounded-lg bg-blue-100">
              <h3 className="text-2xl">Repair Service:</h3>
              <p className="mt-2">Fixing any issues or malfunctions in your water purifier.
              </p>
            </div>
            <div className="p-6 S rounded-lg bg-blue-100">
              <h3 className="text-2xl">Installation:</h3>
              <p className="mt-2">Setting up a new water purifier at your location.</p>
            </div>
            <div className="p-6 S rounded-lg bg-blue-100">
              <h3 className="text-2xl">Uninstallation:</h3>
              <p className="mt-2">Removing an existing water purifier.
              </p>
            </div>
            <div className="p-6 S rounded-lg bg-blue-100">
              <h3 className="text-2xl">Annual Maintenance Contracts (AMC):</h3>
              <p className="mt-2">Comprehensive service packages that cover multiple services over a year.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
