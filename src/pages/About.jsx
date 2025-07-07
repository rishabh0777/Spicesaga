import React from 'react'
import AboutImg from "../assets/story.jpg"

const About = () => {
  return (
    <div className='w-full min-h-screen relative'>
      <div className='w-full h-[50vh] relative'>
        <img 
        className="w-full h-full object-cover"
        src={AboutImg} alt="" />
      </div>
      <div className="w-full relative h-[50vh] bg-red-900 flex text-white">
        <div className='w-1/2 h-full flex justify-center items-center text-[6vw]'>
        <h1>OUR STORY</h1>
        </div>
        <div className="w-1/2 h-full">
        <div className="w-[90%] text-[1.4vw] h-full flex justify-center items-center">
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