import Dashboard from './component/dashboard'
import Header from './component/header'
import SideBar from './component/SideBar'

const Allpage = () => {
  return (
    <div className='flex-1  relative'>
     <Header/>
      <div id='content' className='  ms-3 rounded-3 p-3  mt-[80px] bg-gray-200/50 dark:bg-gray-600/50'>
       <Dashboard/>
      </div>
    </div>
  )
}

export default Allpage