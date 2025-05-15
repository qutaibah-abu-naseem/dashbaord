import React, { useContext } from 'react';
import { api } from '../App';
import { motion } from 'framer-motion'
const SideBar = () => {
  const context = useContext(api)


  return (
    <motion.div animate={{ width: context.showside ? '250px' : '50px' }}>
      <motion.div animate={{ width: context.showside ? '250px' : '50px' }} className='w-[250px] h-[100vh] bg-zinc-300 dark:bg-neutral-400 position-fixed rounded-end-2' >

      </motion.div>
    </motion.div>

  );

}
export default SideBar
