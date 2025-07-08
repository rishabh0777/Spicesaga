import React from 'react'
import ContactImg from "../assets/contact.jpg"
import Tag from "../components/Tag"

const Contact = () => {
  return (
    <div className='w-full h-screen flex overflow-hidden bg-red-900 text-white'>
      <div className="w-1/2 h-full pt-[10vh]">
        <div className="w-full relative flex flex-col gap-8">
          <h1 className="text-[4vw] text-center leading-none">EXPERIENCE THE<br/>ESSENCE OF INDIAN DINING</h1>
          <p className="text-center text-[1.3vw]">
            123 Anywhere St, Any City, ST 12344<br />
            📧hello@spicesaga.com<br />
            📞(123) 456-7890
          </p>
        </div>
        <div className="relative bottom-[-12%] w-full flex justify-center z-10">
          <Tag
            text="Make A RESERVATION TODAY"
            className="text-white border-white"
          />
        </div>
      </div>
      <div className="w-1/2 h-full">
        <img src={ContactImg} alt="" />
      </div>
    </div>
  )
}

export default Contact 