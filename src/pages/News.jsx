import React from 'react';
import NewsImg from "../assets/news.jpg";

const News = () => {
  return (
    <div className='w-full min-h-[90vh] relative text-white'>
      
      {/* Background Image */}
      <img 
        className="absolute w-full h-[90vh] object-cover"
        src={NewsImg} alt="" 
      />

      {/* Dark Overlay */}
      <div className="absolute w-full h-[90vh] bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute z-10 w-full h-[90vh] flex">
        <div className="flex w-1/2 h-full justify-center items-center text-[6vw]">
          <h1>IN THE NEWS</h1>
        </div>
        <div className="flex w-1/2 h-full items-center justify-between">
          <div className="w-[70%] h-[75%] bg-red-900 px-4 py-4 flex flex-col justify-between ">
            <div>
              <p>
                Spice Saga redefines Indian Dining with elegance and<br />bold tastes
              </p>
            <h3 className="font-bold text-[1.1vw] font-medium">-THE FOOD HUB</h3>
            </div>
            <div>
              <p>A vibrant tribute to spice, culture, and unforgettable<br />meals.</p>
            <h3 className="font-bold text-[1.1vw] font-medium">-ONLINE CUPBOARD</h3>
            </div>
            <div>
              <p>Every plate is an adventure - Spice Saga is a sesory<br />journey</p>
            <h3 className="font-bold text-[1.1vw] font-medium">-EAT THE WORLD</h3>
            </div>
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
