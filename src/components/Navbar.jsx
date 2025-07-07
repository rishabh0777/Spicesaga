import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed w-full h-[10vh] top-0 left-0 flex bg-red-900 text-white z-[100] justify-between items-center px-8'> 
      <h2 className='text-[2vw]'>SpiceSaga</h2>
      <ul className='flex gap-4'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Story</li>
        <li className='cursor-pointer'>Menu</li>
        <li className='cursor-pointer'>News</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>

    </nav>
  )
}

export default Navbar