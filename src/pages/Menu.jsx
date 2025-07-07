import React from 'react';
import Gournet from "../assets/platesGournet.jpg";
import DishVine from "../assets/dishvine.jpg";
import Brews from "../assets/brews.jpg";
import Tag from '../components/Tag';

const Menu = () => {
  return (
    <div className='w-full min-h-screen relative bg-red-900 text-white flex flex-col justify-between overflow-hidden'>
      
      {/* Heading */}
      <h1 className='text-[6vw] text-center pt-8'>ON THE MENU</h1>

      {/* Bottom Image Section */}
      <div className="w-full h-[60vh] flex">
        {/* First image */}
        <div className='w-[33.3%] relative h-full overflow-hidden'>
          <img className='w-full h-full object-cover absolute top-0 left-0' src={Gournet} alt="Gourmet" />
          <div className='absolute z-10 h-full w-full flex justify-center items-center'>
            <Tag
            text="gaurmet plates"
              className="text-[1.5vw] font-bold text-white border-white"
            />
          </div>
        </div>

        {/* Second image */}
        <div className='w-[33.3%] relative h-full overflow-hidden'>
          <img className='w-full h-full object-cover absolute top-0 left-0' src={Brews} alt="Brews" />
          <div className='absolute z-10 h-full w-full flex justify-center items-center'>
            <Tag
              text="craft brews"
              className="text-[1.5vw] font-bold text-white border-white"
            />
          </div>
        </div>

        {/* Third image */}
        <div className='w-[33.3%] relative h-full overflow-hidden'>
          <img className='w-full h-full object-cover absolute top-0 left-0' src={DishVine} alt="Dish Vine" />
          <div className='absolute z-10 h-full w-full flex justify-center items-center'>
            <Tag
              text="wine & dish pairings"
              className="text-[1.5vw] font-bold text-white border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
