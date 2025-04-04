import React from 'react';

function About() {
  return (
    <div name="About" className="w-full p-5  text-black">
      <header className="text-center py-10 bg-white">
        <h1 className="text-4xl font-bold text-blue-800">About Us</h1>
        <p className="mt-4">We are passionate about providing the best service!</p>
      </header>

      <section className=" S mt-2 p-5 text-xl rounded-2xl rounded-tr-[100px]  bg-blue-100 ">
        <h2 className="text-3xl font-bold">Our Story</h2>
        <p className=" mt-4 text-justify">
          Hello, I'm Shambhulal Suryavanshi, the founder of Ocean water solution. My journey in the world of water purification began in 2005 with Eureka Forbes Co. Ltd., a leading direct marketing company. Starting as a sales representative, I gained valuable experience in customer interaction and product knowledge over a year.
        </p>
        <p className=" mt-4 text-justify">In January 2010, fueled by my passion for providing safe drinking water, I launched my own water purifier business. This venture quickly evolved, and by 2013, I expanded into offering comprehensive water purifier services. Over the past 20 years, I've had the privilege of serving around 500 customers directly, building a reputation for reliability and excellence.
        </p>

        <p className=" mt-4 text-justify">As we celebrate this milestone, our commitment to improving and expanding our services remains stronger than ever. We continuously strive to enhance our water purification solutions, ensuring that our customers receive the best possible care and support.</p>
        <p className=" mt-4 text-justify">
          Thank you for being a part of our journey. Together, we look forward to a future filled with innovation and continued dedication to providing safe and clean water for all.
        </p>
      </section>
    </div>
  );
}

export default About;
