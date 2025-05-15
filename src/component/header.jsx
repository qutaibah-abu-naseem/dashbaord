import AppBar from '@mui/material/AppBar';
import  { useContext, useState } from 'react';
import { IoNotificationsSharp } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { api } from '../App';
import { Badge } from '@mui/material';
import useScreenWidth from './resize';

const Header = () => {
  const context = useContext(api)
  const [plase,setplase]=useState('')
  const [input,setinput]=useState(false)
  const width = useScreenWidth()
  return (
    <div style={{ height: '50px', width: context.showside ? width - 270 : width - 80, position: 'fixed', zIndex: '30', padding: '10px 0', display: 'flex', justifyContent: 'space-around' }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar >

          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => context.setshowside(prev => !prev)}
          >
            <MenuIcon className='text-gray-900 dark:text-gray-100' />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='text-gray-900 dark:text-gray-100'>
            News
          </Typography>


          <div className='w-[fit-content] relative flex items-center justify-start me-5 '>
            <FaSearch className='text-black absolute text-[16px] ms-3 text-white'/>
            <input type='text' placeholder={plase} className='bg-gray-500 py-1 rounded-2 ps-5 w-[200px] outline-none'/>
          </div>


          <div className=' w-[fit-content] flex gap-2 me-5 '>
            <IconButton onClick={() => context.setisDarkMode(prev => !prev)}>
              {context.isDarkMode ? <MdDarkMode className='text-gray-900 dark:text-gray-100 text-[25px]' /> :
                <CiDark className='text-gray-900 dark:text-gray-100 text-[25px]' />
              }
            </IconButton>

            <IconButton>
              <Badge badgeContent={1} color='primary'>
                <IoNotificationsSharp className='text-gray-900 dark:text-gray-100 text-[18px]' />
              </Badge>
            </IconButton>
            <IconButton>

              <GrLanguage className='text-gray-900 dark:text-gray-100 text-[18px]' />

            </IconButton>
          </div>
          <IconButton><IoMdLogIn className='text-gray-900 dark:text-gray-100' /></IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header