import AppBar from '@mui/material/AppBar';
import  { useContext, useState } from 'react';
import { IoNotificationsSharp } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { FaQuestion, FaSearch } from "react-icons/fa";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { api } from '../template/layout';
import { Badge, Box } from '@mui/material';
import SideBar from './SideBar';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header = () => {
  const context = useContext(api)

  return (
    <Box className='items-center' sx={{ height: '70px', width:'100%', position: 'fixed', zIndex: '30',  display: 'flex', justifyContent: 'space-around',right:0 }}>
      <AppBar  position="static" sx={{backgroundColor:context.isDarkMode?'rgb(31, 30, 30)':'rgb(231, 231, 231)',boxShadow: 'none',borderRadius:'30px',width:'90%' }}>
      <Toolbar
  sx={{
    display: 'flex',
    gap:1,
    justifyContent:'space-between',
    width:'100%',
  }}
>
  <Box sx={{ display: 'flex',alignItems: 'center',gridColumn:1, width: 'fit-content', justifyContent: { xs: 'space-between', md: 'flex-start' } }}>
    <SideBar />
    <Typography
      variant="h6"
      component="div"
      className="text-gray-900 dark:text-gray-100"
      sx={{ ml: 2 }}
    >
      News
    </Typography>
  </Box>

  {/* Search */}
  <Box
    className="relative flex items-center   md:w-[500px] h-[40px]"
  >
    <FaSearch className="absolute ms-3 text-zinc-700" />
    <input
      type="text"
      placeholder='search'
      
 className="bg-gray-100 rounded-5 ps-[40px] w-full h-full outline-none border-2 border-gray-700 focus:border-sky-600 text-black"    />
  </Box>

  {/* Icons */}
  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: { xs: 1, md: 0 } }}>
    <IconButton>
      <Badge badgeContent={1} color="primary">
        <IoNotificationsSharp className="text-gray-900 dark:text-gray-100 text-[18px]" />
      </Badge>
    </IconButton>

<IconButton>
      <FaQuestion className="text-gray-900 dark:text-gray-100 text-[18px] hidden md:block" />
    </IconButton>


    <IconButton>
      <RiCustomerService2Fill className="text-gray-900 dark:text-gray-100 text-[18px] hidden md:block" />
    </IconButton>

   
  </Box>
  <Link to={'/sign_in'} style={{textDecoration:'none'}}>
  <IconButton>
      <IoMdLogIn className="text-gray-900 dark:text-gray-100" />
    </IconButton>
  </Link>
   
</Toolbar>

      </AppBar>
    </Box>
  );
}

export default Header