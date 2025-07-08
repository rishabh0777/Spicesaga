import React from 'react';
import Gournet from "../assets/platesGournet.jpg";
import DishVine from "../assets/dishvine.jpg";
import Brews from "../assets/brews.jpg";
import Tag from '../components/Tag';

const Menu = () => {
  return (
    <div className='w-full relative bg-red-900 text-white pt-[10vh]'>
      
      {/* Heading */}
      <h1 className='text-[9vw] md:text-[6vw] text-center mb-4 md:mb-0'>ON THE MENU</h1>

      {/* Image Section */}
      <div className="w-full flex flex-col md:flex-row">
        {/* Image 1 */}
        <div className='w-full md:w-1/3 h-[40vh] md:h-[60vh] relative overflow-hidden'>
          <img
            className='w-full h-full object-cover absolute top-0 left-0'
            src={Gournet}
            alt="Gourmet"
          />
          <div className='absolute z-10 h-full w-full flex justify-center items-center'>
            <Tag
              text="gourmet plates"
              className="sm:w-[60vw] sm:h-[30vw] md:w-[18vw] md:h-[9vw] text-[5vw] md:text-[1.3vw] font-bold text-white border-white"
            />
          </div>
        </div>

        {/* Image 2 */}
        <div className='w-full md:w-1/3 h-[40vh] md:h-[60vh] relative overflow-hidden'>
          <img
            className='w-full h-full object-cover absolute top-0 left-0'
            src={Brews}
            alt="Brews"
          />
          <div className='absolute z-10 h-full w-full flex justify-center items-center'>
            <Tag
              text="craft brews"
              className="sm:w-[60vw] sm:h-[30vw] md:w-[18vw] md:h-[9vw] text-[5vw] md:text-[1.3vw] font-bold text-white border-white"
            />
          </div>
        </div>

        {/* Image 3 */}
        <div className='w-full md:w-1/3 h-[40vh] md:h-[60vh] relative overflow-hidden'>
          <img
            className='w-full h-full object-cover absolute top-0 left-0'
            src={DishVine}
            alt="Wine & Dish"
          />
          <div className='absolute z-10 h-full w-full flex justify-center items-center'>
            <Tag
              text="wine & dish pairings"
              className="sm:w-[60vw] sm:h-[30vw] md:w-[18vw] md:h-[9vw] text-[5vw] md:text-[1.3vw] font-bold text-white border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
