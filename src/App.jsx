import React from 'react'
import Hero from './pages/Hero'
import About from './pages/About'
import Menu from './pages/Menu'
import News from './pages/News'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
      <main className='pt-[10vh] relative w-screen overflow-x-hidden'>
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <News />
        <Contact />
      </main>
    </>
  )
}

export default App