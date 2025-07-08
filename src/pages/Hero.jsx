import HeroImg from "../assets/hero.jpg"
import Tag from "../components/Tag"

const Hero = () => {
  return (
    <div className='w-full sm:h-[40vh] md:h-[120vh] relative'>
      <div className='absolute inset-0 z-0'>
        <img 
          className='w-full h-full object-cover object-center'
          src={HeroImg} 
          alt="Hero Background" 
        />
      </div>

      <div className='relative z-10 h-full top-[15%] left-[5%] md:left-[10%]'>
        <h1 className='md:text-[9vw] leading-none font-bold text-orange text-red-900 sm:text-[9.5vw]'>Spice<br />Saga</h1>
      </div>

      <div className='relative bottom-[30%] sm:left-[5%] md:left-[10%] left-0 z-10'>
        <Tag
        text="Where tradition meets taste"
        className="w-[30vw] h-[15vw] md:w-[24vw] md:h-[12vw] sm:text-[2vw] md:text-[1.5vw] text-center"
        />
      </div>
    </div>
  )
}

export default Hero
