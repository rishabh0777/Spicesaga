import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false) // Close mobile menu after clicking
    }
  }

  return (
    <nav className='fixed w-full h-[10vh] top-0 left-0 flex items-center justify-between bg-red-900 text-white px-8 z-[100]'>
      <h2 className='text-[6vw] md:text-[2vw]'>SpiceSaga</h2>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-4 text-[1.1vw]'>
        <li className='cursor-pointer' onClick={() => scrollToSection('home')}>Home</li>
        <li className='cursor-pointer' onClick={() => scrollToSection('story')}>Story</li>
        <li className='cursor-pointer' onClick={() => scrollToSection('menu')}>Menu</li>
        <li className='cursor-pointer' onClick={() => scrollToSection('news')}>News</li>
        <li className='cursor-pointer' onClick={() => scrollToSection('contact')}>Contact</li>
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
          <li onClick={() => scrollToSection('home')} className='cursor-pointer'>Home</li>
          <li onClick={() => scrollToSection('story')} className='cursor-pointer'>Story</li>
          <li onClick={() => scrollToSection('menu')} className='cursor-pointer'>Menu</li>
          <li onClick={() => scrollToSection('news')} className='cursor-pointer'>News</li>
          <li onClick={() => scrollToSection('contact')} className='cursor-pointer'>Contact</li>
        </motion.ul>
      )}
    </nav>
  )
}

export default Navbar
