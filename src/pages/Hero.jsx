import HeroImg from "../assets/hero.jpg"
import Tag from "../components/Tag"

const Hero = () => {
  return (
    <div className='w-full h-[120vh] relative'>
      <div className='absolute inset-0 z-0'>
        <img 
          className='w-full h-full object-cover object-center'
          src={HeroImg} 
          alt="Hero Background" 
        />
      </div>

      <div className='relative z-10 h-full top-[15%] left-[10%]'>
        <h1 className='text-4xl font-bold text-orange text-red-900 text-[9.5vw]'>Spice<br />Saga</h1>
      </div>

      <div className='relative bottom-[30%] left-[10%] left-0 z-10'>
        <Tag
        text="Where tradition meets taste"
        />
      </div>
    </div>
  )
}

export default Hero
