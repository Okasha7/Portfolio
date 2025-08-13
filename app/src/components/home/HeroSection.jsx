import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="py-22 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        
        <div className="col-span-7 text-center lg:text-left px-4">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Hello, I'm</span> Okasha
          </h1>
          <p className="text-shadow-current text-lg lg:text-xl text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officia fugit exercitationem sed quasi ipsam, et aliquid vitae magni eum possimus, repellendus aspernatur distinctio rem architecto!
          </p>
          <div className='mt-7'> 
            <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>Hire Me</button>
            <button className='px-6 py-3 mt-3 rounded-full mr-4 bg-transparent border border-white  hover:bg-slate-800 text-white'>Download CV</button>
          </div>
        </div>

        <div className="col-span-5 flex justify-center px-4">
          <Image
            src="/images/heroimg.png"    
            alt="My Profile Picture"
            width={400}                
            height={500}
            className="rounded mt-5 lg:mt-0 bg-transparent"   
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
