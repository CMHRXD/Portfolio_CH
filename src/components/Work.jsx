import React from 'react';
import Restaurant from '../public/img/restaurant.png';
import TravelAgency from '../public/img/travelagency.png';
import Aph from '../public/img/aph.png';
import iq from '../public/img/iq.png';
import nhs from '../public/img/nhs.png';

const Work = () => {
    return (
        <div name="work" className='w-full md:h-screen py-40 bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h1 className='text-4xl font-bold inline border-b-4 border-red-700'>Work</h1>
                    <p className='py-4'>//Check out some of my recent work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{ backgroundImage: `url(${TravelAgency})` }} className=' shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto personal-content'>
                        {/*Hover Efect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Express Aplication
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://travels-agency-rio.herokuapp.com/">
                                    <button className='text-center border-2 border-red-100 m-2 rounded-lg px-4 py-3 bg text-white font-bold text-lg hover:bg-slate-700'>Demo</button>
                                </a>
                                <a href="https://github.com/CMHRXD/Travel_Agency">
                                    <button className='text-center border-2 border-red-100 m-2  rounded-lg px-4 py-3 bg- text-white font-bold text-lg hover:bg-slate-700'>Code</button>
                                </a>
                            </div> 
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Aph})` }} className=' shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto personal-content'>
                        {/*Hover Efect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                MERN Aplication
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://medical-clinic-administrator.netlify.app/">
                                    <button className='text-center border-2 border-red-100 m-2 rounded-lg px-4 py-3 bg text-white font-bold text-lg hover:bg-slate-700'>Demo</button>
                                </a>
                                <a href="https://github.com/CMHRXD/MCA_MERN_Frontend">
                                    <button className='text-center border-2 border-red-100 m-2  rounded-lg px-4 py-3 bg- text-white font-bold text-lg hover:bg-slate-700'>Code</button>
                                </a>
                            </div> 
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Restaurant})` }} className=' shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto personal-content'>
                        {/*Hover Efect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider '>
                                JS Aplication
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://restaurant-managment-rest-api.netlify.app/">
                                    <button className='text-center border-2 border-red-100 m-2 rounded-lg px-4 py-3 bg text-white font-bold text-lg hover:bg-slate-700'>Demo</button>
                                </a>
                                <a href="https://github.com/CMHRXD/Restaurant-Menu-Managment">
                                    <button className='text-center border-2 border-red-100 m-2  rounded-lg px-4 py-3 bg- text-white font-bold text-lg hover:bg-slate-700'>Code</button>
                                </a>
                            </div> 
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${iq})` }} className=' shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto personal-content'>
                        {/*Hover Efect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider '>
                                React Aplication
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://insurance-quoter.netlify.app/">
                                    <button className='text-center border-2 border-red-100 m-2 rounded-lg px-4 py-3 bg text-white font-bold text-lg hover:bg-slate-700'>Demo</button>
                                </a>
                                <a href="https://github.com/CMHRXD/Insurance-Quoter">
                                    <button className='text-center border-2 border-red-100 m-2  rounded-lg px-4 py-3 bg- text-white font-bold text-lg hover:bg-slate-700'>Code</button>
                                </a>
                            </div> 
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${nhs})` }} className=' shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto personal-content'>
                        {/*Hover Efect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider '>
                                MERN Aplication
                            </span>

                            <div className='pt-8 text-center'>
                                <a href="https://neumaticos-hs.netlify.app/">
                                    <button className='text-center border-2 border-red-100 m-2 rounded-lg px-4 py-3 bg text-white font-bold text-lg hover:bg-slate-700'>Demo</button>
                                </a>
                                <a href="https://github.com/CMHRXD/NeumaticosHS-Frontend">
                                    <button className='text-center border-2 border-red-100 m-2  rounded-lg px-4 py-3 bg- text-white font-bold text-lg hover:bg-slate-700'>Code</button>
                                </a>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work