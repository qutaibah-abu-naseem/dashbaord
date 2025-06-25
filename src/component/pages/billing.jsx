import React, { useContext, useEffect } from 'react'
import Card from '@mui/material/Card';
import { BsThreeDots } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BiSolidArrowToTop } from "react-icons/bi";
import { BiArrowFromTop } from "react-icons/bi";import { api } from '../../template/layout';
import { FaPencil } from 'react-icons/fa6';
const Billing = () => {
  const context=useContext(api)
  useEffect(()=>{
    context.setnamepage('billing')
  },[context.location])
  return (
    <div className='grid grid-cols-12  relative gap-2'>
      <div className='h-[fit-content] col-span-12  lg:col-span-8 relative flex flex-col gap-3 '>
        <div className='flex flex-col items-center sm:flex-row  gap-4 relative'>
          <Card className='p-3 font-[600]  w-[60%] sm:w-[50%]' sx={{background:' linear-gradient(rgb(3, 29, 46),rgb(26, 25, 25))',height:'200px',backgroundColor:context.isDarkMode?'rgb(31, 30, 30)':'rgb(7, 68, 104)',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <h4 className='text-white'>Vision Ui</h4>
        <div className='flex flex-col gap-3'>
          <h5 className='text-sky-500'>54515646XXX</h5>
          <div className='flex gap-4 leading-none text-[14px] text-white' >
            <div className='flex flex-col gap-2'>
              <p className='m-0'>VALID</p>
             <p className='m-0'>5/15</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='m-0'>cvv</p>
             <p className='m-0'>09XX</p>
            </div>
            
          </div>
        </div>
        </Card>

         <Card className='p-3 font-[600] w-full sm:w-[50%]' sx={{background:' linear-gradient(rgb(3, 29, 46),hsl(0, 2.00%, 10.00%))',height:'200px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
       <div className='w-[95%] h-[auto] bg-zinc-800  px-2 py-3 rounded-4 flex justify-between '>
        <div className='flex flex-col gap-1'>
          <p className='text-zinc-200 text-[12px] m-0'>Credit Balance</p>
        <h5 className='text-white m-0'>25,400$</h5>
        </div>
        <BsThreeDots className='text-white text-lg'/>
       </div>

       <p className='m-0 text-[12px] text-white'>Newest</p>


        <div className=' flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <div className='w-[30px] h-[30px] bg-green-500/80 flex items-center justify-center rounded-full'>
            <FaCalendarAlt className='text-white text-[14px]'/>
          </div>
          <div>
<p className='text-zinc-100 text-[12px] m-0'>Bill & Taxes</p>
          <p className='text-zinc-300 text-[12px] m-0'>today ,15.30</p>
          </div>
        </div>
        <p className='text-white'>-150.50 $</p>
       </div>
        </Card>
        
        </div>
        
         <Card className='p-3  rounded-2 h-[auto] flex flex-col gap-3 sm:h-[160px]' sx={{background:' linear-gradient(rgb(3, 29, 46),rgb(26, 25, 25))',width:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
          <div className='flex justify-between'>
            <h6 className='text-white font-[600]'>Payment Method</h6>
             <button className='px-4 py-2 bg-sky-500 rounded-2 text-white font-[600] text-[10px]'>Add New Card</button>
          </div>
          <div className='flex flex-col sm:flex-row  gap-2'>
            <div className='border-2 border-zinc-200 flex items-center justify-between w-full sm:w-[50%] px-4 h-[70px] rounded-[30px]'>
             <div className='flex items-center gap-2'>
              <img src='/image/mscard.png' className='w-[30px] h-[20px] m-0'/>
              <h6 className='text-white m-0 text-[13px] font-[600]'>754625556724XXX</h6>
             </div>
             <FaPencil className='text-white text-[14px]'/>
            </div>
             <div className='border-2 border-zinc-200 flex items-center justify-between  w-full sm:w-[50%] px-4 h-[70px] rounded-[30px]'>
             <div className='flex items-center gap-2'>
              <img src='/image/mscard.png' className='w-[30px] h-[20px] m-0'/>
              <h6 className='text-white m-0 text-[13px] font-[600]'>754625556724XXX</h6>
             </div>
             <FaPencil className='text-white text-[14px]'/>
            </div>
          </div>
        </Card>
        

      </div>
            <div className='h-[fit-content] col-span-12 sm:col-span-10 lg:col-span-4 px-4 py-4 flex flex-col gap-4 rounded-2' style={{background:' linear-gradient(rgb(3, 29, 46),rgb(26, 25, 25))'}}>
              <div className='flex justify-between'>
                <h6 className='font-[600] text-white'>Involces</h6>
                <button className='px-4 py-1 bg-sky-500 rounded-2 text-white font-[600] text-[10px]'>View All</button>
              </div>
              <div>
                <ul className='p-0 flex flex-col gap-3'>
                  <li className='flex items-center justify-between '>
                    <div>
                      <p className='m-0 font-[600] text-[13px] text-zinc-100'>March,01,2020</p>
                      <p className='m-0 text-sm   text-zinc-400'>#Ms-245642</p>
                    </div>
                    <div className='flex items-center gap-2 '>
                      <p className='font-[600] text-white text-sm  m-0'>
                        180$
                      </p>
                      
                      <button  className='m-0 flex gap-1 text-sm leading-none'><FaFileDownload className='text-zinc-200'/> <span className='text-zinc-200'>PDF</span></button>
                    </div>
                  </li>
                     <li className='flex items-center justify-between '>
                    <div>
                      <p className='m-0 font-[600] text-[13px] text-zinc-100'>March,01,2020</p>
                      <p className='m-0 text-sm   text-zinc-400'>#Ms-245642</p>
                    </div>
                    <div className='flex items-center gap-2 '>
                      <p className='font-[600] text-white text-sm  m-0'>
                        180$
                      </p>
                      
                      <button  className='m-0 flex gap-1 text-sm leading-none'><FaFileDownload className='text-zinc-200'/> <span className='text-zinc-200'>PDF</span></button>
                    </div>
                  </li>
                    <li className='flex items-center justify-between '>
                    <div>
                      <p className='m-0 font-[600] text-[13px] text-zinc-100'>March,01,2020</p>
                      <p className='m-0 text-sm   text-zinc-400'>#Ms-245642</p>
                    </div>
                    <div className='flex items-center gap-2 '>
                      <p className='font-[600] text-white text-sm  m-0'>
                        180$
                      </p>
                      
                      <button  className='m-0 flex gap-1 text-sm leading-none'><FaFileDownload className='text-zinc-200'/> <span className='text-zinc-200'>PDF</span></button>
                    </div>
                  </li>
                    <li className='flex items-center justify-between '>
                    <div>
                      <p className='m-0 font-[600] text-[13px] text-zinc-100'>March,01,2020</p>
                      <p className='m-0 text-sm   text-zinc-400'>#Ms-245642</p>
                    </div>
                    <div className='flex items-center gap-2 '>
                      <p className='font-[600] text-white text-sm  m-0'>
                        180$
                      </p>
                      
                      <button  className='m-0 flex gap-1 text-sm leading-none'><FaFileDownload className='text-zinc-200'/> <span className='text-zinc-200'>PDF</span></button>
                    </div>
                  </li>
                    <li className='flex items-center justify-between '>
                    <div>
                      <p className='m-0 font-[600] text-[13px] text-zinc-100'>March,01,2020</p>
                      <p className='m-0 text-sm   text-zinc-400'>#Ms-245642</p>
                    </div>
                    <div className='flex items-center gap-2 '>
                      <p className='font-[600] text-white text-sm  m-0'>
                        180$
                      </p>
                      
                      <button  className='m-0 flex gap-1 text-sm leading-none'><FaFileDownload className='text-zinc-200'/> <span className='text-zinc-200'>PDF</span></button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

      <div className=' col-span-12 sm:col-span-10 lg:col-span-6 px-3 py-4 h-[fit-content] flex flex-col gap-4 rounded-2'  style={{background:' linear-gradient(rgb(9, 10, 10),rgb(26, 25, 25))'}}>
        <h6 className='text-white font-[600]'>Billing Information</h6>
        <div className='flex flex-col gap-4'>
          <div className='w-[100%] h-[fit-content] border-2 rounded-3 px-2 py-4 flex justify-between'>
            <div className='w-[150px]'>
              <h6 className='text-white font-[600]'>oliver laim</h6>
              <p className='text-zinc-200'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex gap-4'>
              <button className='flex gap-1 leading-none text-red-500 '><MdDelete /> <p className='m-0 text-[13px]'>DELETE</p></button>
              <button className='flex gap-1 leading-none text-zinc-200'><FaPencil className='text-sm p-0'/> <p className='text-[13px]'>EDIT</p></button>
            </div>
          </div>
           <div className='w-[100%] h-[fit-content] border-2 rounded-3 px-2 py-4 flex justify-between'>
            <div className='w-[150px]'>
              <h6 className='text-white font-[600]'>oliver laim</h6>
              <p className='text-zinc-200'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex gap-4'>
              <button className='flex gap-1 leading-none text-red-500 '><MdDelete /> <p className='m-0 text-[13px]'>DELETE</p></button>
              <button className='flex gap-1 leading-none text-zinc-200'><FaPencil className='text-sm p-0'/> <p className='text-[13px]'>EDIT</p></button>
            </div>
          </div>
           <div className='w-[100%] h-[fit-content] border-2 rounded-3 px-2 py-4 flex justify-between'>
            <div className='w-[150px]'>
              <h6 className='text-white font-[600]'>oliver laim</h6>
              <p className='text-zinc-200'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex gap-4'>
              <button className='flex gap-1 leading-none text-red-500 '><MdDelete /> <p className='m-0 text-[13px]'>DELETE</p></button>
              <button className='flex gap-1 leading-none text-zinc-200'><FaPencil className='text-sm p-0'/> <p className='text-[13px]'>EDIT</p></button>
            </div>
          </div>
        </div>
      </div>




            <div className='h-[fit-content] col-span-12 sm:col-span-10 lg:col-span-6 px-4 py-4 flex flex-col gap-4 rounded-2' style={{background:' linear-gradient(rgb(3, 29, 46),rgb(26, 25, 25))'}}>
              <div className='flex justify-between'>
                <h6 className='font-[600] text-white'>Your Transaction</h6>
                <p className='text-zinc-300 text-sm'>23-30 March2020</p>
              </div>
              <div>
                <ul className='p-0 flex flex-col gap-3'>
                  <p className='text-zinc-200'>Newest</p>
                  <li className='flex items-center justify-between '>
                    <div className='flex gap-2'>
                     <div className='w-[40px] h-[40px] border-1 rounded-full border-green-500 flex items-center justify-center text-white'>
                      <BiSolidArrowToTop/></div>
                      <div className='flex flex-col leading-none gap-1'>
                        <p className='font-[600] text-white m-0'>netflex</p>
                        <p className='text-zinc-300 m-0 text-sm'>20 March 2020,at 12:30 pm</p>

                      </div>
                    </div>
                    <p className='text-green-500 font-[600]'>+2500$</p>
                  </li>
                   <li className='flex items-center justify-between '>
                    <div className='flex gap-2'>
                     <div className='w-[40px] h-[40px] border-1 rounded-full border-red-500 flex items-center justify-center text-white'>
                      <BiArrowFromTop/></div>
                      <div className='flex flex-col leading-none gap-1'>
                        <p className='font-[600] text-white m-0'>netflex</p>
                        <p className='text-zinc-300 m-0 text-sm'>20 March 2020,at 12:30 pm</p>

                      </div>
                    </div>
                    <p className='text-red-500 font-[600]'>-2400$</p>
                  </li>
                                    <p className='text-zinc-200'>Yesterday</p>

                        <li className='flex items-center justify-between '>
                    <div className='flex gap-2'>
                     <div className='w-[40px] h-[40px] border-1 rounded-full border-green-500 flex items-center justify-center text-white'>
                      <BiSolidArrowToTop/></div>
                      <div className='flex flex-col leading-none gap-1'>
                        <p className='font-[600] text-white m-0'>netflex</p>
                        <p className='text-zinc-300 m-0 text-sm'>20 March 2020,at 12:30 pm</p>

                      </div>
                    </div>
                    <p className='text-green-500 font-[600]'>+2500$</p>
                  </li>
                        <li className='flex items-center justify-between '>
                    <div className='flex gap-2'>
                     <div className='w-[40px] h-[40px] border-1 rounded-full border-green-500 flex items-center justify-center text-white'>
                      <BiSolidArrowToTop/></div>
                      <div className='flex flex-col leading-none gap-1'>
                        <p className='font-[600] text-white m-0'>netflex</p>
                        <p className='text-zinc-300 m-0 text-sm'>20 March 2020,at 12:30 pm</p>

                      </div>
                    </div>
                    <p className='text-green-500 font-[600]'>+2500$</p>
                  </li>
                        <li className='flex items-center justify-between '>
                    <div className='flex gap-2'>
                     <div className='w-[40px] h-[40px] border-1 rounded-full border-red-500 flex items-center justify-center text-white'>
                      <BiArrowFromTop/></div>
                      <div className='flex flex-col leading-none gap-1'>
                        <p className='font-[600] text-white m-0'>netflex</p>
                        <p className='text-zinc-300 m-0 text-sm'>20 March 2020,at 12:30 pm</p>

                      </div>
                    </div>
                    <p className='text-red-500 font-[600]'>-2400$</p>
                  </li>
                           <li className='flex items-center justify-between '>
                    <div className='flex gap-2'>
                     <div className='w-[40px] h-[40px] border-1 rounded-full border-red-500 flex items-center justify-center text-white'>
                      <BiArrowFromTop/></div>
                      <div className='flex flex-col leading-none gap-1'>
                        <p className='font-[600] text-white m-0'>netflex</p>
                        <p className='text-zinc-300 m-0 text-sm'>20 March 2020,at 12:30 pm</p>

                      </div>
                    </div>
                    <p className='text-red-500 font-[600]'>-2400$</p>
                  </li>
                         <li className='flex items-center justify-between '>
                    <div className='flex gap-2'>
                     <div className='w-[40px] h-[40px] border-1 rounded-full border-green-500 flex items-center justify-center text-white'>
                      <BiSolidArrowToTop/></div>
                      <div className='flex flex-col leading-none gap-1'>
                        <p className='font-[600] text-white m-0'>netflex</p>
                        <p className='text-zinc-300 m-0 text-sm'>20 March 2020,at 12:30 pm</p>

                      </div>
                    </div>
                    <p className='text-green-500 font-[600]'>+2500$</p>
                  </li>
                </ul>
              </div>
            </div>

    </div>
  )
}

export default Billing