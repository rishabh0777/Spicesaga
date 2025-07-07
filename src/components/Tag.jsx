import React from 'react'

const Tag = ({text, className}) => {
  return (
    <>
        <div className={`${className} w-[18vw] h-[9vw] border border-red-900 rounded-[50%/50%] flex justify-center items-center tracking-wide text-[1vw] text-red-900`}>
            <p>{text}</p>
        </div>
    </>
  )
}

export default Tag