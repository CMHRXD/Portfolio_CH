
import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen py-40 bg-[#0a192f] text-gray-300 '>
        <div className='flex flex-col jusify-center items-center h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className=' sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-700'>About</p>
                </div>
            </div>
            <div className='w-max-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Cristian, nice to meet you, Please Take a look around</p>
                </div>
                <div>
                    <p>
                        I'm a passionate software developer and design enthusiast, 
                        currently a third year student of the systems analysis career at the University of <a href='https://www.unae.edu.py/tv/'>UNAE</a>.
                        In my free time i do research on the web technologies and design and i'm always looking for new challenges to improve my programer skills.
                    </p>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default About