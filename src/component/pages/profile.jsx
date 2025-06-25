import React, { useContext, useEffect } from 'react'
import { FaArrowRight, FaCar } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa6'
import { SiFastapi } from "react-icons/si";
import { GrOverview } from 'react-icons/gr'
import { api } from '../../template/layout'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { Switch } from '@mui/material';
import Cart from '../anther/cart';

const Profile = () => {
    const context = useContext(api)
     useEffect(()=>{
        context.setnamepage('profile')
      },[context.location])
    return (
        <div className='flex flex-col gap-4'>
            <div id='header' className='w-full h-[70px] rounded-2 bg-zinc-400 dark:bg-zinc-900 flex items-center justify-between px-2'>
                <div className='flex items-center gap-2'>
                    <div className='border-2 border-sky-600 rounded-2 relative w-[fit-content]'>
                        <img src='/image/my-phote.webp' className='w-[45px] h-[45px] rounded-2 ' />
                        <button className='absolute bottom-[-5px] end-[-5px] text-sky-700 w-[20px] h-[20px] flex justify-center items-center bg-zinc-100 hover:bg-zinc-400 rounded-full'>
                            <FaPencil className=' text-[10px] text-sky-700 dark:text-sky-500' />
                        </button>
                    </div>
                    <div>
                        <p className='text-sky-800 dark:text-sky-500 font-[600] text-[14px] m-0'> Qutaibah Mohamed</p>
                        <p className='text-gray-200 text-sm m-0'> my email@gmail.com</p>

                    </div>
                </div>
                <div className='flex items-center gap-2 bg-sky-700 text-white px-2 py-1 rounded-2'><GrOverview className='text-white p-0' /> <p className='font-bold text-[12px] m-0'>Overview</p></div>
            </div>


            <div id="midel" className="flex flex-wrap justify-center gap-3 w-full ">
                {/* العنصر الأول */}
                <div className=" min-w-[340px] bg-zinc-200 dark:bg-zinc-900 rounded-2 p-4 flex flex-col justify-between">
                    <div>
                        <p className="text-gray-700 dark:text-gray-300 text-[15px]">Welcome back,</p>
                        <h5 className="text-zinc-900 dark:text-gray-100 mt-[-10px]">Qutaibah Mohamed</h5>
                        <p className="text-gray-700 dark:text-gray-300 text-[15px] mt-4">I make dashboard so if you need<br />something call me</p>
                    </div>
                    <div className="flex gap-2 text-gray-700 dark:text-gray-300 mt-3">
                        <p className="text-[15px]">Call me</p>
                        <FaArrowRight className="text-[12px] mt-2" />
                    </div>
                </div>

                {/* العنصر الثاني */}
                <div className=" bg-zinc-200 dark:bg-zinc-900 rounded-2 p-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
                    {/* الجزء الأول داخل العنصر */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col items-start gap-4">
                        <div>
                            <p className="text-zinc-800 dark:text-zinc-100 font-[600] text-[14px] m-0">About me</p>
                            <p className="text-zinc-800 dark:text-zinc-200 text-[12px] my-2 m-0">Hello, Qutaibah Mohamed, live in Jordan</p>
                        </div>

                        <div className="relative flex justify-center items-center w-full max-w-[150px] aspect-square">
                            <div className="absolute inset-0 rotate-[220deg]">
                                <CircularProgressbar
                                    value={50}
                                    styles={buildStyles({
                                        textColor: "#18181b",
                                        pathColor: context.isDarkMode ? "#f4f4f5" : "rgb(43, 43, 43)",
                                        trailColor: context.isDarkMode ? "#18181b" : "rgba(0, 0, 0, 0)",
                                    })}
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 pointer-events-none">
                                <h3 className="text-gray-900 dark:text-gray-100 text-lg m-0"><SiFastapi /></h3>
                                <h4 className="text-gray-900 dark:text-gray-100 m-0">65%</h4>
                                <p className="text-gray-700 dark:text-gray-200 font-[600] text-[12px] m-0">Current load</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <h6 className="text-zinc-800 dark:text-zinc-100 font-[600] my-1 m-0">Oh 1 week</h6>
                            <p className="text-gray-600 dark:text-gray-200 text-sm m-0">Time to finish website</p>
                        </div>
                    </div>

                    {/* البطاقات */}
                    <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="bg-zinc-800/70 w-full min-w-0 h-[60px] rounded-2 px-2 py-2 flex gap-3 items-center">
                                <div className="flex flex-col gap-1 flex-grow">
                                    <p className="text-gray-200 text-[11px] m-0">Battery Health</p>
                                    <h6 className="text-white m-0 font-bold">76%</h6>
                                </div>
                                <div className="w-[40px] h-[40px] bg-sky-600 flex items-center justify-center rounded-2 overflow-hidden">
                                    {i % 2 === 0 ? (
                                        <FaCar className="text-lg text-zinc-200" />
                                    ) : (
                                        <img src="/image/carv.jpg" alt="car" className="w-full h-full object-cover rounded-2" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* العنصر الثالث */}
                <div className="bg-zinc-200 dark:bg-zinc-900 rounded-2 p-4">
                    <h6 className="font-bold text-zinc-900 dark:text-zinc-100">Profile Information</h6>
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptate.
                    </p>
                    <ul className="p-0 mt-3 space-y-1">
                        <li className="flex items-center gap-1 text-sm">
                            <span className="text-zinc-600 dark:text-zinc-400">Full Name:</span>
                            <span className="text-zinc-900 dark:text-zinc-200 font-bold text-[14px]">Qutaibah Mohamed</span>
                        </li>
                        <li className="flex items-center gap-1 text-sm">
                            <span className="text-zinc-600 dark:text-zinc-400">Mobile:</span>
                            <span className="text-zinc-900 dark:text-zinc-200 font-bold text-[14px]">+8288</span>
                        </li>
                        <li className="flex items-center gap-1 text-sm">
                            <span className="text-zinc-600 dark:text-zinc-400">Email:</span>
                            <span className="text-zinc-900 dark:text-zinc-200 font-bold text-[14px]">Qutaibah@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-1 text-sm">
                            <span className="text-zinc-600 dark:text-zinc-400">Location:</span>
                            <span className="text-zinc-900 dark:text-zinc-200 font-bold text-[14px]">Jordan</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div id='last' className='grid grid-cols-12 gap-3'>
                <div className='bg-zinc-200 rounded-2 px-2 py-3 dark:bg-zinc-900 col-span-12 lg:col-span-3'>
                    <h6 className='font-bold text-zinc-900 dark:text-zinc-100 text-[15px]'>Platform Settings</h6>
                  <div className='flex flex-col sm:flex-row  justify-between lg:flex-col'>
                     <ul className='p-0'>
                        <p className='text-[10px]  text-gray-600 dark:text-gray-300 mt-4 m-0'>Acount</p>
                        <li> <Switch size='small' defaultChecked /><span className='text-[12px] text-zinc-800 dark:text-zinc-200 '>Email me when you ready</span></li>
                        <li> <Switch size='small' defaultChecked /><span className='text-[12px] text-zinc-800 dark:text-zinc-200'>Email me when you ready</span></li>

                        <li> <Switch size='small' defaultChecked /><span className='text-[12px] text-zinc-800 dark:text-zinc-200'>Email me when you ready</span></li>

                    </ul>
                    <ul className='p-0'>
                        <p className='text-[10px]  text-gray-600 dark:text-gray-300 mt-4 m-0'>Applecation</p>
                        <li> <Switch size='small' defaultChecked /><span className='text-[12px] text-zinc-800 dark:text-zinc-200'>Email me when you ready</span></li>
                        <li> <Switch size='small' defaultChecked /><span className='text-[12px] text-zinc-800 dark:text-zinc-200'>Email me when you ready</span></li>

                        <li> <Switch size='small' defaultChecked /><span className='text-[12px] text-zinc-800 dark:text-zinc-200'>Email me when you ready</span></li>

                    </ul>
                  </div>
                   
                </div>
                <div className='col-span-12 lg:col-span-9 bg-zinc-200 rounded-2 px-2 py-3 dark:bg-zinc-900 '>
                    <h6 className='font-bold text-zinc-900 dark:text-zinc-100 text-[15px]'>Projects</h6>
                    <p className='text-gray-600 dark:text-gray-300 text-sm'>Architects design houses</p>
                    <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        <Cart />
                        <Cart />

                        <Cart />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile