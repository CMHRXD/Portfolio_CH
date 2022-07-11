import {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import logo from '../public/img/Logo CH.png';

import {Link} from 'react-scroll';



const Navbar = () => {
    const [navStatus, setNavStatus] = useState(false)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={logo} alt="Logo" style={{ width: '100px' }} />
            </div>
            {/*Menu*/}
            <ul className='hidden md:flex'>
                <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} duration={500}>About</Link></li>
                <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li><Link to='work' smooth={true} duration={500}>Works</Link></li>
                <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>

            {/*Mobile Menu*/}
            <div className='md:hidden z-10'>
                { !navStatus ? <FaBars className='cursor-pointer' onClick={()=>setNavStatus(!navStatus)}/> : <FaTimes className='cursor-pointer' onClick={()=>setNavStatus(!navStatus)}/> }
            </div>

            <ul className={navStatus ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center': ' hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f]  flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={()=> setNavStatus(!navStatus)} to='home' smooth={true} duration={500}>Home</Link></li>
                <li className='py-6 text-4xl'><Link onClick={()=> setNavStatus(!navStatus)} to='about' smooth={true} duration={500}>About</Link></li>
                <li className='py-6 text-4xl'><Link onClick={()=> setNavStatus(!navStatus)} to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li className='py-6 text-4xl'><Link onClick={()=> setNavStatus(!navStatus)} to='work' smooth={true} duration={500}>Works</Link></li>
                <li className='py-6 text-4xl'><Link onClick={()=> setNavStatus(!navStatus)} to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>

            {/*Social Icons*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='bg-blue-500 w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-300'>
                        <a href="" className='text-lg font-bold flex justify-between items-center w-full text-gray-300'>
                            Linkedin <FaLinkedin size={35}/> 
                        </a>
                    </li>
                    <li className='bg-black w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-300'>
                        <a href="https://github.com/CMHRXD" className='text-lg font-bold flex justify-between items-center w-full text-gray-300'>
                            GitHub <FaGithub size={35}/> 
                        </a>
                    </li>
                    <li className=' bg-green-600  w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-300'>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCbfNqhlZPNgtRJgCDbCKkRCKVjhcFNLWljWssgjFRJsfwlkTrCTPwcpqVbrtRbNgxMCpm" className='text-lg font-bold flex justify-between items-center w-full text-gray-300'>
                            Email <HiOutlineMail size={35}/> 
                        </a>
                    </li>
                    <li className='bg-slate-600 w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-300'>
                        <a href="" className='text-lg font-bold flex justify-between items-center w-full text-gray-300'>
                            Resume <BsFillPersonLinesFill size={35}/> 
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar;