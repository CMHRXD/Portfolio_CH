import React from 'react'
import HTML_logo from '../public/img/HTML_logo.png';
import CSS_logo from '../public/img/CSS_logo.png';
import JS_Logo from '../public/img/JS_Logo.png';
import React_Logo from '../public/img/React_logo.png';
import Mongo_Logo from '../public/img/Mongo_logo.png';
import Express_Logo from '../public/img/Express_logo.png';
import Node_Logo from '../public/img/Node_logo.png';
import Tailwind_logo from '../public/img/Tailwind_logo.png';


const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full'>
                <p className='text-4xl font-bold inline border-b-4 border-red-700'>Skills</p>
                <p className='py-4'>// These are the principal tecnologies I've worked with</p>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
                    <div className='shadow-sm shadow-black hover:scale-105 duration-500'>
                        <img className=' w-20 mx-auto' src={HTML_logo} alt="CSS" />
                        <p>HTMl</p>
                    </div>
                    <div className='shadow-sm shadow-black hover:scale-105 duration-500'>
                        <img className=' w-20 mx-auto' src={CSS_logo} alt="CSS" />
                        <p>CSS</p>
                    </div>
                    <div className='shadow-sm shadow-black hover:scale-105 duration-500'>
                        <img className=' w-20 mx-auto' src={JS_Logo} alt="CSS" />
                        <p>JS</p>
                    </div>
                    <div className='shadow-sm shadow-black hover:scale-105 duration-500'>
                        <img className=' w-20 mx-auto' src={React_Logo} alt="CSS" />
                        <p>React</p>
                    </div>
                    <div className='shadow-sm shadow-black hover:scale-105 duration-500'>
                        <img className=' w-20 mx-auto' src={Mongo_Logo} alt="CSS" />
                        <p>MongoDB</p>
                    </div>
                    <div className='shadow-sm shadow-black hover:scale-105 duration-500'>
                        <img className=' w-20 mx-auto' src={Express_Logo} alt="CSS" />
                        <p>ExpressJS</p>
                    </div>
                    <div className='shadow-sm shadow-black hover:scale-105 duration-500'>
                        <img className=' w-20 mx-auto' src={Node_Logo} alt="CSS" />
                        <p>NodeJS</p>
                    </div>
                    <div className='shadow-sm shadow-black hover:scale-105 duration-500'>
                        <img className=' w-20 mx-auto' src={Tailwind_logo} alt="CSS" />
                        <p>Tailwind Css</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;