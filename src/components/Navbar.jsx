import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='fixed w-full h-[10vh] top-0 left-0 flex items-center justify-between bg-red-900 text-white px-8 z-[100]'>
      <h2 className='text-[6vw] md:text-[2vw]'>SpiceSaga</h2>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-4 text-[1.1vw]'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Story</li>
        <li className='cursor-pointer'>Menu</li>
        <li className='cursor-pointer'>News</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>

      {/* Mobile Hamburger */}
      <div className='md:hidden text-[6vw] cursor-pointer' onClick={toggleMenu}>
        <i className={isOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3 }}
          className='absolute top-[10vh] left-0 w-full h-[90vh] bg-red-900 flex flex-col items-center justify-center gap-8 text-[6vw] md:hidden z-[99]'
        >
          <li onClick={toggleMenu} className='cursor-pointer'>Home</li>
          <li onClick={toggleMenu} className='cursor-pointer'>Story</li>
          <li onClick={toggleMenu} className='cursor-pointer'>Menu</li>
          <li onClick={toggleMenu} className='cursor-pointer'>News</li>
          <li onClick={toggleMenu} className='cursor-pointer'>Contact</li>
        </motion.ul>
      )}
    </nav>
  )
}

export default Navbar
