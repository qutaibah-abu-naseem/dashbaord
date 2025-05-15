import React, { createContext, useEffect, useState } from 'react'
import Allpage from './allpage'
import Header from './component/header'
import SideBar from './component/SideBar'
export const api = createContext(null)
const App = () => {
    const [isDarkMode,setisDarkMode] = useState(false)
    const [showside,setshowside]=useState(false)
    useEffect(()=>{
        console.log(showside)
    },[showside])
    const value = {
        isDarkMode,
        setisDarkMode,
        showside,
        setshowside
    }
    return (
        <api.Provider  value={value}>
            <div className={isDarkMode ? 'dark bg-black' : ' '}>
                <div className='flex pe-2'>
                    <SideBar/>
                    <Allpage />
                </div>
                
            </div>
        </api.Provider>
    )
}

export default App