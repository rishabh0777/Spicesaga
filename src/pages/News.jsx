import React from 'react';
import NewsImg from "../assets/news.jpg";

const News = () => {
  return (
    <div className='w-full min-h-[90vh] relative text-white pt-[10vh]'>
      
      {/* Background Image */}
      <img 
        className="absolute w-full h-full object-cover top-0 left-0"
        src={NewsImg}
        alt="News Background"
      />

      {/* Dark Overlay */}
      <div className="absolute w-full h-full bg-black opacity-50 top-0 left-0"></div>

      {/* Content */}
      <div className="absolute z-10 w-full h-full flex flex-col md:flex-row">
        
        {/* Left: Heading */}
        <div className="flex w-full md:w-1/2 h-1/3 md:h-full justify-center items-center text-[9vw] md:text-[6vw]">
          <h1 className="text-center">IN THE NEWS</h1>
        </div>

        {/* Right: Reviews */}
        <div className="flex w-full md:w-1/2 h-auto md:h-full items-center justify-center px-4 pb-8 md:pb-0">
          <div className="w-full md:w-[70%] bg-red-900 px-4 py-6 rounded-lg flex flex-col gap-6">
            
            <div>
              <p className="text-[4.5vw] md:text-[1.3vw] leading-tight">
                Spice Saga redefines Indian Dining with elegance and <br className="hidden md:block" /> bold tastes
              </p>
              <h3 className="font-bold text-[4vw] md:text-[1vw] mt-2">- THE FOOD HUB</h3>
            </div>

            <div>
              <p className="text-[4.5vw] md:text-[1.3vw] leading-tight">
                A vibrant tribute to spice, culture, and unforgettable <br className="hidden md:block" /> meals.
              </p>
              <h3 className="font-bold text-[4vw] md:text-[1vw] mt-2">- ONLINE CUPBOARD</h3>
            </div>

            <div>
              <p className="text-[4.5vw] md:text-[1.3vw] leading-tight">
                Every plate is an adventure – Spice Saga is a sensory <br className="hidden md:block" /> journey.
              </p>
              <h3 className="font-bold text-[4vw] md:text-[1vw] mt-2">- EAT THE WORLD</h3>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
