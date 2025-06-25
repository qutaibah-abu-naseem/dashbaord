import React, { createContext, useEffect, useState } from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from '../component/pages/dashboard';
import Table from '../component/pages/Tables';
import Rtl from '../component/pages/rtl';
import Billing from '../component/pages/billing';
import Profile from '../component/pages/profile';
import SignIn from '../component/pages/signin';
import Sigin_Up from '../component/pages/signup';
export const api = createContext(null)
const Layout = () => {
    const [isDarkMode, setisDarkMode] = useState(false)
    const [showside, setshowside] = useState(false)
    const [namepage,setnamepage]=useState('dashbaord')
    const [currentPage, setcurrentPage] = useState('/')
    const [hideHeader, sethideheader] = useState(true)
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/sign_in' || location.pathname === '/sign_up') {
            sethideheader(false)
        } else {
            sethideheader(true)

        }

        setcurrentPage(location.pathname)
    }, [location.pathname])
    const value = {
        isDarkMode,
        setisDarkMode,
        showside,
        setshowside,
        currentPage,
        setcurrentPage,
        location,
        setnamepage
    }
    return (
        <api.Provider value={value}>
            <div id={namepage} className={isDarkMode ? 'dark bg-black' : ' '} style={{ display: 'flex', flexDirection: 'column', gap: 3, minHeight: 'screen' }}>
                {hideHeader && <Header /> }
                <div id='content' className='flex-1 sm:p-4 w-[95%] sm:w-[90%] mx-auto mt-[100px]  rounded-tl-lg rounded-br-lg' style={{ overflowY: 'auto' }}>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/tables' element={<Table />} />
                        <Route path='/billing' element={<Billing />} />
                        <Route path='/rtl' element={<Rtl />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/sign_in' element={<SignIn />} />
                         <Route path='/sign_up' element={<Sigin_Up />} />

                    </Routes>
                </div>
                <Footer />

            </div>
        </api.Provider>
    )
}

export default Layout