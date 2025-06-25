import React, { useContext, useEffect, useState } from 'react'
import { api } from '../../template/layout'
import { Link } from 'react-router-dom'
import { FormControlLabel, Switch, TextField } from '@mui/material'
import { FaHome } from 'react-icons/fa'

const Sigin_Up = () => {
    const context = useContext(api)
    const [fname, setfname] = useState('')
    const [email, setemail] = useState('')
    const [error, seterror] = useState('')
    const [password, setpassword] = useState('')

    const signin = (t) => {


        if (fname.length && email.length && password.length) {
            seterror('')
        } else {
            seterror('missing data')

        }
    }
    useEffect(() => {
        context.setnamepage('signup')
    }, [context.location])
    const style_input = {
        input: {
            color: 'white'
        },
        '& label': {
            color: 'gray', // اللون الافتراضي للـ label
        },
        // الحدود العادية (عندما لا يكون هناك تركيز)
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderWidth: '2px',
                borderRadius: '30px',
                color: 'white',
                borderColor: 'rgb(148, 145, 145)', // اللون الافتراضي
            },
            '&:hover fieldset': {
                borderColor: 'rgb(207, 206, 206)', // عند المرور بالماوس
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(255, 255, 255)', // عند التركيز
                borderWidth: '2px',   // يمكنك تغيير السماكة أيضًا
            },
        }


    }
    return (
        <div className='h-[100vh] w-full ' style={{ background: 'linear-gradient(rgb(12, 2, 9),rgb(12, 0, 7))' }}>
            <div className='h-full w-[90%]  mx-auto flex flex-col items-center md:items-start gap-4 md:flex-row'>
                <div className='w-[50%]  hidden md:block'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <button className='bg-zinc-700 hover:bg-zinc-900 border-1 flex h-[40px] px-4 gap-2 items-center leading-none  rounded-full text-zinc-200 font-bold'><FaHome className='text-[18px] text-white' /> go to home</button>
                    </Link>
                </div>
                <div className='w-[90%] md:w-[50%]'>
                    <h4 className='text-zinc-200 mx-auto'>Register with</h4>
                    <div id='auth' className='my-5 flex gap-3 justify-center'>
                        <button className='px-2 py-1 border-2 border-zinc-500 hover:border-zinc-200  rounded-2 text-zinc-500 hover:text-zinc-200 duration-[0.2s] font-bold text-sm'>goggle</button>
                        <button className='px-2 py-1 border-2 border-zinc-500 hover:border-zinc-200  rounded-2 text-zinc-500 hover:text-zinc-200 duration-[0.2s] font-bold text-sm'>face book</button>

                        <button className='px-2 py-1 border-2 border-zinc-500 hover:border-zinc-200  rounded-2 text-zinc-500 hover:text-zinc-200 duration-[0.2s] font-bold text-sm'>github</button>
                    </div>
                    <p className='text-zinc-400  flex justify-center font-bold text-lg'>or</p>
                    <form className='w-full flex flex-col gap-4'>
                        <TextField fullWidth label=" Full Name" sx={style_input} id="fullWidth" onChange={(e) => setfname(e.target.value)} />
                        <TextField fullWidth label="Email" sx={style_input} id="fullWidth" onChange={(e) => setemail(e.target.value)} />
                        <TextField fullWidth label="Password" sx={style_input} id="fullWidth" onChange={(e) => setpassword(e.target.value)} />

                        <FormControlLabel
                            control={<Switch defaultChecked />}
                            label="Remeber Me"
                            sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.8rem', color: 'rgb(238, 238, 238)' } }}
                        />
                        {error.length ? <p className='text-red-500 font-bold'>{error}</p> : null}
                        <div className='w-full flex flex-col justify-center items-center gap-3'>
                            <button onClick={(t) => {
                                t.preventDefault()
                                signin()
                            }} className='bg-zinc-800 hover:bg-zinc-900 text-white w-[50%] py-2 rounded-full border-1 border-gray-600 hover:border-gray-200 scale-x-100 duration-[0.5s] hover:scale-x-125 mx-auto'>Sign Up</button>
                            <p className='text-sm text-gray-300 flex gap-1'>have an account?<Link to={'/sigin_in'} className='font-bold text-zinc-300 hover:text-zinc-100'>Sign in</Link></p>
                        </div>
                    </form>
                </div>

            </div>


        </div>
    )
}

export default Sigin_Up