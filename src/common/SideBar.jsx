import React, { useContext } from 'react';
import { api } from '../template/layout';
import { Box, Button, Drawer, IconButton, ListItemButton } from '@mui/material';
import { AiFillTool } from "react-icons/ai";
import MenuIcon from '@mui/icons-material/Menu';
import { LuChartNoAxesColumn } from "react-icons/lu";
import { LuPanelLeftClose } from "react-icons/lu";
import { IoWallet } from "react-icons/io5";
import { FaFile, FaHome, FaUser } from 'react-icons/fa';
import { BsRocket } from 'react-icons/bs';
import { GrLanguage } from 'react-icons/gr';
import { MdDarkMode } from 'react-icons/md';
import { CiDark } from 'react-icons/ci';
import { NavLink, Link } from 'react-router-dom';
const SideBar = () => {
  const context = useContext(api)
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const links = [
    {
      icon: <FaHome />,
      title: 'Dashboard',
      path: '/'
    },
    {
      icon: <LuChartNoAxesColumn />,
      title: 'Tables',
      path: '/tables'
    },
    {
      icon: <IoWallet />,
      title: 'Billing',
      path: '/billing'
    },
    {
      icon: <AiFillTool />,
      title: 'RTL',
      path: '/rtl'
    },
  ]
  const acountlinks = [
    {
      icon: <FaUser />,
      title: 'Profile',
      path: '/profile'
    },
    {
      icon: <FaFile />,
      title: 'Sign In',
      path: '/sign_in'
    },
    {
      icon: <BsRocket />,
      title: 'Sign Up',
      path: '/sign_up'
    },
  ]

  const nowpage = context.currentPage
  const list = (<Box sx={{ height: '100vh', position: { xs: 'absolute', sm: 'relative' }, zIndex: '31' }} className='bg-zinc-100 dark:bg-neutral-400 md:w-[250px]'>
    <div className='w-[100%] h-[100vh] bg-zinc-100 dark:bg-neutral-400 flex flex-col gap-3  rounded-end-2' >
      <IconButton onClick={() => context.setshowside(false)} sx={{ position: 'absolute', right: 0, m: 1, display: { xs: 'block', sm: 'none' } }}><LuPanelLeftClose /></IconButton>
      <div className='flex flex-col gap-2 pt-5'>
        <h4 className='ms-3 text-[16px] lg:text-[18px]' style={{ fontWeight: '500' }}>Links</h4>
        {
          links.map(ele => (
            <NavLink to={ele.path} style={{ fontWeight: nowpage === ele.path ? "bold" : '', textDecoration: 'none' }} onClick={() => context.setcurrentPage(ele.path)}>
              <ListItemButton sx={{ display: 'flex', gap: 4, alignItems: 'center', color: 'rgb(71, 70, 70)', fontSize: '18px', '&:hover': { color: 'rgb(7, 7, 7)' } }}>

                <div className='w-[20px] lg:w-[25px] h-[20px] lg:h-[25px] text-sm lg:text-lg bg-zinc-600 rounded-2 flex items-center justify-center text-zinc-100'
                  style={{ backgroundColor: nowpage === ele.path ? 'rgb(0, 0, 0)' : 'rgb(65, 63, 63)' }}
                >{ele.icon}</div>
                <span className=' text-sm lg:text-[16px]' style={{ color: nowpage === ele.path ? 'rgb(0, 0, 0)' : '' }}>{ele.title}</span>

              </ListItemButton>
            </NavLink>
          ))
        }
      </div>

      <div className='flex flex-col gap-2 pt-3'>
        <p className='ms-3 text-[16px] lg:text-[18px]' style={{ fontWeight: '500' }}>Acount pages</p>
        {
          acountlinks.map(ele => (
            <Link to={ele.path} style={{ fontWeight: nowpage === ele.path ? "bold" : '', textDecoration: 'none' }} onClick={() => context.setcurrentPage(ele.path)}>
              <ListItemButton sx={{ display: 'flex', gap: 4, alignItems: 'center', color: 'rgb(71, 70, 70)', fontSize: '18px', '&:hover': { color: 'rgb(7, 7, 7)' } }}>
                <div className='w-[20px] lg:w-[25px] h-[20px] lg:h-[25px] text-sm lg:text-lg bg-zinc-600 rounded-2 flex items-center justify-center text-zinc-100' style={{ backgroundColor: nowpage === ele.path ? 'rgb(0, 0, 0)' : 'rgb(65, 63, 63)' }}>{ele.icon}</div>
                <span className=' text-sm lg:text-[16px]' style={{ color: nowpage === ele.path ? 'rgb(0, 0, 0)' : '' }}>{ele.title}</span>
              </ListItemButton>
            </Link>
          ))
        }
      </div>
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between', alignItems: 'center', width: '50%', mx: 1 }}>
        <IconButton onClick={() => context.setisDarkMode(prev => !prev)}>
          {context.isDarkMode ? (
            <MdDarkMode className="text-gray-900 dark:text-gray-100 text-[25px]" />
          ) : (
            <CiDark className="text-gray-900 dark:text-gray-100 text-[25px]" />
          )}
        </IconButton>



        <IconButton>
          <GrLanguage className="text-gray-900 dark:text-gray-100 text-[18px]" />
        </IconButton>


      </Box>

    </div>
  </Box >)
  return (
    <>
      <Button onClick={toggleDrawer(true)}> <MenuIcon className='text-gray-900 dark:text-gray-100' /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </>

  );

}
export default SideBar
