import React from 'react'
import { MdCheckCircle, MdShop } from 'react-icons/md'

const Overview = () => {
  return (
    <div className='p-2 text-zinc-900 dark:text-zinc-100'>
        <h5>Overview</h5>
        <div className='flex items-center gap-1'>
          <p>
<MdCheckCircle className='text-green-500 text-lg'/>
          </p>
            <p className='text-gray-600 dark:text-gray-300 text-[14px]'>30% this month</p>
        </div>
        <div>
          <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-1 gap-2 p-0 ps-1'>
            <li className='flex   gap-2'>
              <MdShop className='p-0 text-gray-600'/>
              <div className='flex flex-col leading-none gap-1'>
                <p className='m-0 font-[600] text-zinc-800 text-[14px]'>order new</p>
                            <p className='text-[9px] text-gray-600 dark:text-gray-300 m-0 font-[600]'>22dec 11:30 pm</p>
              </div>
            </li>
             <li className='flex   gap-2'>
              <MdShop className='p-0 text-gray-600'/>
              <div className='flex flex-col leading-none gap-1'>
                <p className='m-0 font-[600] text-zinc-800 text-[14px]'>order new</p>
                            <p className='text-[9px] text-gray-600 dark:text-gray-300 m-0 font-[600]'>22dec 11:30 pm</p>
              </div>
            </li>
             <li className='flex   gap-2'>
              <MdShop className='p-0 text-gray-600'/>
              <div className='flex flex-col leading-none gap-1'>
                <p className='m-0 font-[600] text-zinc-800 text-[14px]'>order new</p>
                            <p className='text-[9px] text-gray-600 dark:text-gray-300 m-0 font-[600]'>22dec 11:30 pm</p>
              </div>
            </li>
             <li className='flex   gap-2'>
              <MdShop className='p-0 text-gray-600'/>
              <div className='flex flex-col leading-none gap-1'>
                <p className='m-0 font-[600] text-zinc-800 text-[14px]'>order new</p>
                            <p className='text-[9px] text-gray-600 dark:text-gray-300 m-0 font-[600]'>22dec 11:30 pm</p>
              </div>
            </li>
             <li className='flex   gap-2'>
              <MdShop className='p-0 text-gray-600'/>
              <div className='flex flex-col leading-none gap-1'>
                <p className='m-0 font-[600] text-zinc-800 text-[14px]'>order new</p>
                            <p className='text-[9px] text-gray-600 dark:text-gray-300 m-0 font-[600]'>22dec 11:30 pm</p>
              </div>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Overview