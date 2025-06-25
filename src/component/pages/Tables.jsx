import React, { useContext, useEffect } from 'react'
import { api } from '../../template/layout'
import { MdCheckCircle } from 'react-icons/md'
import { HiOutlineDotsVertical } from "react-icons/hi";
const Table = () => {
  const context = useContext(api)
   useEffect(()=>{
      context.setnamepage('table')
    },[context.location])
  return (
    <div className="  flex flex-col gap-5">
      <div className='text-gray-700 dark:text-gray-100 bg-[white] dark:bg-[black] p-4'>
        <h6 className='font-[700] mt-[-10px]'>Authors Tables</h6>
        <div className='overflow-x-auto w-full'>
           <table className="min-w-[700px] w-full border-collapse">
          <thead>
            <tr className="border-b text-gray-600 dark:text-gray-300">
              <th className="text-left font-[600] p-2 border-b border-gray-100 text-[14px]">Author</th>
              <th className="text-left font-[600] p-2 border-b border-gray-100 text-[14px]">Function</th>
              <th className="text-left font-[600] p-2 border-b border-gray-100 text-[14px]">Status</th>
              <th className="text-left  font-[600] p-2 border-b border-gray-100 text-[14px]">Employed</th>
            </tr>
          </thead>
          <tbody>

            <tr className="border-b border-gray-400">
              <td className="p-2 border-b border-gray-300">
                <div className="flex items-center gap-2">
                  <img src="/image/img-project.webp" alt="avatar" className="w-10 h-10" />
                  <div>
                    <p className='font-[600] text-zinc-800 dark:text-zinc-200 m-0'>name client</p>
                    <p className='text-sm m-0'>john@gmail.com</p>
                  </div>
                </div>
              </td>
              <td className="p-2 border-b border-gray-300 flex flex-col">
                <p className='font-[600] text-zinc-800  dark:text-zinc-200 m-0'>Manger</p>
                <p className='text-sm m-0'>organazation</p>
              </td>
              <td className="p-2 border-b border-gray-300">
                <p className='py-[3px] my-auto text-center  bg-sky-700 rounded-2 text-zinc-100 font-[600] text-[14px] w-[60px]'>active</p>
              </td>
              <td className="p-2 border-b border-gray-300 ">
                2020/5/10
              </td>
              <td>
                <button
                  className='py-[3px] my-auto bg-zinc-600 hover:bg-zinc-800 text-center text-gray-100 rounded-2 font-[600] text-[14px] w-[60px]'
                >Edit</button>
              </td>

            </tr>
            <tr className="border-b border-gray-400">
              <td className="p-2 border-b border-gray-300">
                <div className="flex items-center gap-2">
                  <img src="/image/img-project.webp" alt="avatar" className="w-10 h-10" />
                  <div>
                    <p className='font-[600] text-zinc-800 dark:text-zinc-200 m-0'>name client</p>
                    <p className='text-sm m-0'>john@gmail.com</p>
                  </div>
                </div>
              </td>
              <td className="p-2 border-b border-gray-300 flex flex-col">
                <p className='font-[600] text-zinc-800  dark:text-zinc-200 m-0'>Manger</p>
                <p className='text-sm m-0'>organazation</p>
              </td>
              <td className="p-2 border-b border-gray-300">
                <p className='py-[3px] my-auto text-center border-2 border-zinc-900 dark:border-zinc-200 text-zinc-800 dark:text-zinc-200 rounded-2 font-[600] text-[14px] w-[60px]'>off line</p>
              </td>
              <td className="p-2 border-b border-gray-300 ">
                2020/5/10
              </td>
              <td>
                <button
                  className='py-[3px] my-auto bg-zinc-600 hover:bg-zinc-800 text-center text-gray-100 rounded-2 font-[600] text-[14px] w-[60px]'
                >Edit</button>
              </td>

            </tr>
  <tr className="border-b border-gray-400">
              <td className="p-2 border-b border-gray-300">
                <div className="flex items-center gap-2">
                  <img src="/image/img-project.webp" alt="avatar" className="w-10 h-10" />
                  <div>
                    <p className='font-[600] text-zinc-800 dark:text-zinc-200 m-0'>name client</p>
                    <p className='text-sm m-0'>john@gmail.com</p>
                  </div>
                </div>
              </td>
              <td className="p-2 border-b border-gray-300 flex flex-col">
                <p className='font-[600] text-zinc-800  dark:text-zinc-200 m-0'>Manger</p>
                <p className='text-sm m-0'>organazation</p>
              </td>
              <td className="p-2 border-b border-gray-300">
                <p className='py-[3px] my-auto text-center  bg-sky-700 rounded-2 text-zinc-100 font-[600] text-[14px] w-[60px]'>active</p>
              </td>
              <td className="p-2 border-b border-gray-300 ">
                2020/5/10
              </td>
              <td>
                <button
                  className='py-[3px] my-auto bg-zinc-600 hover:bg-zinc-800 text-center text-gray-100 rounded-2 font-[600] text-[14px] w-[60px]'
                >Edit</button>
              </td>

            </tr>
            <tr className="border-b border-gray-400">
              <td className="p-2 border-b border-gray-300">
                <div className="flex items-center gap-2">
                  <img src="/image/img-project.webp" alt="avatar" className="w-10 h-10" />
                  <div>
                    <p className='font-[600] text-zinc-800 dark:text-zinc-200 m-0'>name client</p>
                    <p className='text-sm m-0'>john@gmail.com</p>
                  </div>
                </div>
              </td>
              <td className="p-2 border-b border-gray-300 flex flex-col">
                <p className='font-[600] text-zinc-800  dark:text-zinc-200 m-0'>Manger</p>
                <p className='text-sm m-0'>organazation</p>
              </td>
              <td className="p-2 border-b border-gray-300">
                <p className='py-[3px] my-auto text-center border-2 border-zinc-900 dark:border-zinc-200 text-zinc-800 dark:text-zinc-200 rounded-2 font-[600] text-[14px] w-[60px]'>off line</p>
              </td>
              <td className="p-2 border-b border-gray-300 ">
                2020/5/10
              </td>
              <td>
                <button
                  className='py-[3px] my-auto bg-zinc-600 hover:bg-zinc-800 text-center text-gray-100 rounded-2 font-[600] text-[14px] w-[60px]'
                >Edit</button>
              </td>

            </tr>
          </tbody>
        </table>
        </div>
       
      </div>








      <div className='text-gray-700 dark:text-gray-100 bg-[white] dark:bg-[black] p-4'>
        <div className=' mt-[-10px]'>
        <h6 className='font-[700]'>Projects</h6>
        <p className='flex items-center gap-1'>
          <MdCheckCircle className='text-green-500 text-sm p-0'/>
          <span className='text-gray-600 text-sm font-[600] '>30 done this month</span>
        </p>
        </div>
        <div className="overflow-x-auto w-full mt-4">
            <table className="min-w-[700px] w-full border-collapse">
          <thead>
            <tr className="border-b text-gray-600 dark:text-gray-300">
              <th className="text-left font-[600] p-2 border-b border-gray-100 text-[14px]">Companies</th>
              <th className="text-left font-[600] p-2 border-b border-gray-100 text-[14px]">Budget</th>
              <th className="text-left font-[600] p-2 border-b border-gray-100 text-[14px]">Status</th>
              <th className="text-left  font-[600] p-2 border-b border-gray-100 text-[14px]">Completion</th>
            </tr>
          </thead>
          <tbody>

            <tr className="border-b border-gray-400">
              <td className="p-2 border-b border-gray-300">
                <div className="flex items-center gap-2">
                  <img src="/image/img-project.webp" alt="avatar" className="w-10 h-10" />
                    <p className='font-[600] text-zinc-800  dark:text-zinc-200 m-0'>name client</p>
                </div>
              </td>
              <td className="p-2 border-b border-gray-300 flex flex-col">
                <p className='font-[600] text-zinc-800  dark:text-zinc-200 '>1400$</p>
                
              </td>
              <td className="p-2 border-b border-gray-300">
                working
              </td>
              <td className="p-2 border-b border-gray-300 ">
                <div className=' w-[150px] flex flex-col leading-none gap-1'>
                  <p className='m-0 font-[600] text-zinc-800 dark:text-zinc-200'>80%</p>
                  <progress id={context.isDarkMode ? 'darkprogress' : 'lightprogress'} className='rounded-full  appearance-none m-0' style={{ height: '5px' }} value={80} max={100} />
                </div>
              </td>
              <td>
                
                 <HiOutlineDotsVertical className='text-lg text-zinc-700 dark:text-zinc-200'/>
              
              </td>


            </tr>
            <tr className="border-b border-gray-400">
              <td className="p-2 border-b border-gray-300">
                <div className="flex items-center gap-2">
                  <img src="/image/img-project.webp" alt="avatar" className="w-10 h-10" />
                    <p className='font-[600] text-zinc-800  dark:text-zinc-200 m-0'>name client</p>
                </div>
              </td>
              <td className="p-2 border-b border-gray-300 flex flex-col">
                <p className='font-[600] text-zinc-800  dark:text-zinc-200'>1400$</p>
                
              </td>
              <td className="p-2 border-b border-gray-300">
                working
              </td>
              <td className="p-2 border-b border-gray-300 ">
                <div className=' w-[150px] flex flex-col leading-none gap-1'>
                  <p className='m-0 font-[600] text-zinc-800 dark:text-zinc-200'>80%</p>
                  <progress id={context.isDarkMode ? 'darkprogress' : 'lightprogress'} className='rounded-full  appearance-none m-0' style={{ height: '5px' }} value={80} max={100} />
                </div>
              </td>
              <td>
                
                 <HiOutlineDotsVertical className='text-lg text-zinc-700 dark:text-zinc-200'/>
              
              </td>


            </tr>
             <tr className="border-b border-gray-400">
              <td className="p-2 border-b border-gray-300">
                <div className="flex items-center gap-2">
                  <img src="/image/img-project.webp" alt="avatar" className="w-10 h-10" />
                    <p className='font-[600] text-zinc-800  dark:text-zinc-200 m-0'>name client</p>
                </div>
              </td>
              <td className="p-2 border-b border-gray-300 flex flex-col">
                <p className='font-[600] text-zinc-800  dark:text-zinc-200 '>1400$</p>
                
              </td>
              <td className="p-2 border-b border-gray-300">
                working
              </td>
              <td className="p-2 border-b border-gray-300 ">
                <div className=' w-[150px] flex flex-col leading-none gap-1'>
                  <p className='m-0 font-[600] text-zinc-800 dark:text-zinc-200'>80%</p>
                  <progress id={context.isDarkMode ? 'darkprogress' : 'lightprogress'} className='rounded-full  appearance-none m-0' style={{ height: '5px' }} value={80} max={100} />
                </div>
              </td>
              <td>
                
                 <HiOutlineDotsVertical className='text-lg text-zinc-700 dark:text-zinc-200'/>
              
              </td>


            </tr>
             <tr className="border-b border-gray-400">
              <td className="p-2 border-b border-gray-300">
                <div className="flex items-center gap-2">
                  <img src="/image/img-project.webp" alt="avatar" className="w-10 h-10" />
                    <p className='font-[600] text-zinc-800  dark:text-zinc-200 m-0'>name client</p>
                </div>
              </td>
              <td className="p-2 border-b border-gray-300 flex flex-col">
                <p className='font-[600] text-zinc-800  dark:text-zinc-200 '>1400$</p>
                
              </td>
              <td className="p-2 border-b border-gray-300">
                working
              </td>
              <td className="p-2 border-b border-gray-300 ">
                <div className=' w-[150px] flex flex-col leading-none gap-1'>
                  <p className='m-0 font-[600] text-zinc-800 dark:text-zinc-200'>80%</p>
                  <progress id={context.isDarkMode ? 'darkprogress' : 'lightprogress'} className='rounded-full  appearance-none m-0' style={{ height: '5px' }} value={80} max={100} />
                </div>
              </td>
              <td>
                
                 <HiOutlineDotsVertical className='text-lg text-zinc-700 dark:text-zinc-200'/>
              
              </td>


            </tr>

          </tbody>
        </table>
        </div>
      

      </div>


    </div>
  )
}

export default Table