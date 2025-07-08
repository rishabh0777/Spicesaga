import React from 'react'
import ContactImg from "../assets/contact.jpg"
import Tag from "../components/Tag"

const Contact = () => {
  return (
    <div id='contact' className='w-full min-h-screen md:h-screen flex justify-between flex-col md:flex-row overflow-hidden bg-red-900 text-white '>

      {/* Left Content */}
      <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center items-center px-4 pt-[10vh] gap-6">
        <div className="text-center flex flex-col gap-6">
          <h1 className="text-[8vw] md:text-[4vw] leading-tight">
            EXPERIENCE THE <br /> ESSENCE OF INDIAN DINING
          </h1>
          <p className="text-[4.5vw] md:text-[1.3vw]">
            123 Anywhere St, Any City, ST 12344 <br />
            📧 hello@spicesaga.com <br />
            📞 (123) 456-7890
          </p>
        </div>

        <div className="">
          <Tag
            text="Make A RESERVATION TODAY"
            className="w-[60vw] h-[30vw] md:w-[18vw] md:h-[9vw] text-center text-white border-white text-[4vw] md:text-[1.2vw]"
          />
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-full">
        <img
          src={ContactImg}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Contact
