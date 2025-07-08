import React from 'react'
import AboutImg from "../assets/story.jpg"

const About = () => {
  return (
    <div className='w-full min-h-screen relative'>
      <div className='w-full md:h-[50vh] h-[40vh] relative'>
        <img 
        className="w-full h-full object-cover"
        src={AboutImg} alt="" />
      </div>
      <div className="w-full relative h-[50vh] bg-red-900 flex flex-col md:flex-row text-white">
        <div className='md:w-1/2 md:h-full flex justify-center items-center text-[9vw] md:text-[6vw] md:mt-0 mt-[3vh]'>
        <h1>OUR STORY</h1>
        </div>
        <div className="md:w-1/2 md:h-full sm:flex justify-center items-center">
        <div className="w-[90%] md:text-[1.4vw] h-full flex justify-center items-center md:mt-0 mt-[3vh]">
          <p>
            Born from a passion for flavour and a desire to create delicious, high-quality products, our company was founded on the belief that everyone deserves to enjoy great tasting food. We believe that great food should be affordable and accessible to everyone, which is why we strive to provide our customers with the best value for their money.
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About