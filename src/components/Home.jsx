import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/*Title*/}
        <p className=' text-red-700'>Hi my name is</p>
        <h1 className=' text-4xl sm:text-7xl font-bold text-blue-50'>Cristian Hernandez</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-slate-400'>I'm Full  Stack Developer</h2>
        <p className='text-base sm:text-xl font-bold text-slate-400 py-4 max-w-[700px]'>Im a Junior Full-Stack Developer focused in creating solutions through development to help businesses improve their performance and profits</p>
        <div>
          <Link to='work' smooth={true} duration={500}>
          <button className='flex group justify-between items-center p-2 text-white border-2 rounded-md
              hover:bg-red-700
              hover:border-red-700
              hover:animate-pulse
              '>View Work
            <span className=' group-hover:rotate-90 duration-200 group-hover:mb-3'>
              <HiArrowNarrowRight className=' ml-4' />
            </span>
          </button></Link>

        </div>
      </div>
    </div>
  )
}

export default Home