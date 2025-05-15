import React, { useContext } from 'react'
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IoMdHappy } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import { FaArrowRight, FaMoneyBillWave } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { api } from '../App';
import Chart from './chart';
import ColChart from './col_chart';

const Dashboard = () => {
    const context = useContext(api)
    const group1 = [
        {
            type: "today's Mony",
            money: "$500",
            color: <h6 className='text-emerald-600 dark:text-emerald-300'>+55%</h6>,
            icon: <FaMoneyBillWave />
        },
        {
            type: "today's User",
            money: "400",
            color: <h6 className='text-emerald-600 dark:text-emerald-300'>+45%</h6>,
            icon: <GrLanguage />
        },
        {
            type: "New Clients",
            money: "+40",
            color: <h6 className='text-red-600 dark:text-red-300'>-5%</h6>,
            icon: <FaRegFileAlt />
        },
        {
            type: "Total sales",
            money: "$500",
            color: <h6 className='text-emerald-600 dark:text-emerald-300'>+8%</h6>,
            icon: <IoMdCart />
        },

    ]
    return (
        <div className='flex flex-col gap-3'>
            <div id='top-dash' className='w-[100%]  grid grid-cols-4 gap-4 text-gray-100 dark:text-gray-900'>
                {group1.map(item => (
                    <div className="h-[65px] bg-gray-200 dark:bg-zinc-900 col-span-1 rounded-2 p-2 flex">
                        <p className='flex flex-col ms-2'>
                            <p className='text-sm text-gray-700 dark:text-gray-300 '>{item.type}</p>
                            <p className='mt-[-16px] flex items-center gap-1'>
                                <h5 className='text-gray-900 dark:text-gray-100'>{item.money}</h5>{item.color}
                            </p>
                        </p>

                        <p className='my-auto ms-auto bg-zinc-900 text-gray-100 dark:text-gray-900 dark:bg-zinc-100 p-2 rounded-2'>
                            {item.icon}
                        </p>
                    </div>
                ))}

            </div>


            <div id='layer1' className='w-[100%] h-[300px] grid grid-cols-8 gap-4 text-gray-100 dark:text-gray-900'>
                <div className=" bg-zinc-50 dark:bg-zinc-900 col-span-3 rounded-2 p-3 flex flex-col justify-between">
                    <div>
                        <p className='text-gray-700 dark:text-gray-300 text-[15px]'>welcom back,</p>
                        <h4 className='text-zinc-900 dark:text-gray-100 mt-[-10px]'>Qutaibah Mohamed </h4>
                        <p className='text-gray-700 dark:text-gray-300 text-[15px] mt-4'>I make dashboard so if you need <br /> some thing  call me</p>
                    </div>
                    <div className='flex gap-2 text-gray-700 dark:text-gray-300 '>
                        <p className='text-[15px]'>call me </p>
                        <FaArrowRight className='text-[12px] mt-2' />

                    </div>
                </div>


                <div className=" bg-gray-50 dark:bg-zinc-900 col-span-2 rounded-2 w-[250px] p-3 flex flex-col gap-3">
                    <div >
                        <h5 className=" text-gray-900 dark:text-zinc-100">Satisfaction Rate</h5>
                        <p className=" text-gray-500 dark:text-zinc-100 text-[15px] ms-3">from all projects</p>
                    </div>

                    <div className=' relative flex flex-col justify-between items-center  h-[auto]'>
                        <div className=' mx-auto w-[70%]  rotate-[270deg] '>
                            <CircularProgressbar
                                value={50}
                                styles={buildStyles({
                                    textColor: "#18181b",
                                    pathColor: context.isDarkMode ? "#f4f4f5" : "#18181b",
                                    trailColor: "#80838a"
                                })}
                            />
                        </div>
                        <div className='w-[35px] h-[35px] rounded-full flex items-center justify-center bg-zinc-900 dark:bg-zinc-100 text-gray-100 dark:text-gray-900 absolute top-[35%]'><IoMdHappy className='text-[28px]' /></div>
                        <div className='w-[80%] h-[60px] bg-zinc-900 dark:bg-zinc-100 absolute top-[76%] rounded-2 flex justify-between px-2 text-gray-100 dark:text-gray-900'>
                            <p className=' text-gray-100 dark:text-gray-900'>0%</p>
                            <h4 className='ms-2 my-auto'>95%</h4>
                            <p>100%</p>
                        </div>

                    </div>


                </div>


                <div className=" bg-gray-50 dark:bg-zinc-900 col-span-3 rounded-2 p-3 flex gap-3">
                    <div id='left' className='flex flex-col gap-4' >
                        <h5 className='text-gray-900 dark:text-gray-100'>Referral Tracking</h5>
                        <div className='w-[150px] p-2 bg-zinc-900/80 dark:bg-zinc-100 rounded-3 ms-4'>
                            <p className='text-gray-200 dark:text-gray-500'> Invited</p>
                            <h5 className='text-gray-100 dark:text-gray-900 mt-[-15px]'>145 People</h5>
                        </div>
                        <div className='w-[150px] p-2 bg-zinc-900/80 dark:bg-zinc-100  rounded-3 ms-4'>
                            <p className='text-gray-200 dark:text-gray-500'>Bonus</p>
                            <h5 className='text-gray-100 dark:text-gray-900 mt-[-15px]'>1,433</h5>
                        </div>
                    </div>

                    <div id='right' className='flex flex-col gap-5'>
                        <div className='w-[35px] h-[35px] bg-zinc-800 dark:bg-zinc-100 rounded-3 ms-auto flex items-center justify-center'>
                            <IoIosMore className='text-[26px] text-gray-100 dark:text-gray-900'/>
                        </div>

                        <div className=' relative flex flex-col justify-between items-center ms-2  h-[auto]'>
                            <div className=' mx-auto w-[80%]  rotate-[220deg] '>
                                <CircularProgressbar
                                    value={50}
                                    styles={buildStyles({
                                        textColor: "#18181b",
                                        pathColor: context.isDarkMode ? "#f4f4f5" : "#18181b",
                                        trailColor:context.isDarkMode ?"#18181b":'#e5e7eb'
                                    })}
                                />
                            </div>
                            <div className=' absolute top-[20%] flex flex-col items-center justify-center'>
                                <p className='text-gray-900 dark:text-gray-300'>safety</p>
                                <h1 className='text-gray-900 dark:text-gray-100 mt-[-10px]'>9.3</h1>
                                <p className='text-gray-900 dark:text-gray-300 mt-[-10px]'>Total Score</p>
                            </div>
                           

                        </div>


                    </div>
                </div>
            </div>


            <div id='layer2' className='w-[100%] h-[450px] grid grid-cols-5 gap-4 text-gray-100 dark:text-gray-900'>
                <div className="  col-span-3  rounded-2"> 
                <Chart/>
                </div>
                <div className="col-span-2 rounded-2 "> 
                <ColChart/>
                </div>
            </div>
            <div id='layer3' className='w-[100%] h-[200px] grid grid-cols-4 gap-4 text-gray-100 dark:text-gray-900'>
                <div className=" bg-blue-900/80 dark:bg-zinc-500 col-span-3 rounded-2"> d</div>
                <div className=" bg-blue-900/80 dark:bg-zinc-500 col-span-1 rounded-2 "> d</div>
            </div>
        </div>
    )
}

export default Dashboard