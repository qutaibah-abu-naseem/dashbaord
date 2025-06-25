import { Container, Switch, TextField } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import { api } from '../../template/layout';
import { FaHome } from 'react-icons/fa';
const SignIn = () => {
    const context = useContext(api)
    useEffect(() => {
        context.setnamepage('signin')
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
        <div className='h-[100vh] w-full' style={{ background: 'linear-gradient(rgb(12, 2, 9),rgb(12, 0, 7))' }}>
            <div className='h-full w-[90%] mx-auto flex flex-col items-center md:items-start gap-4 md:flex-row'>
                <div className='w-[50%]  hidden md:block'>
                    <Link to='/' style={{textDecoration:'none'}}>
                        <button className='bg-zinc-700 hover:bg-zinc-900 border-1 flex h-[40px] px-4 gap-2 items-center leading-none  rounded-full text-zinc-200 font-bold'><FaHome className='text-[18px] text-white' /> go to home</button>
                    </Link>
                </div>
                <div className='w-[90%] md:w-[50%]'>
                    <h3 className='text-zinc-200'>Nice to see you!</h3>
                    <p className='text-zinc-400'>enter your email and  password to sign in</p>
                    <form className='w-full flex flex-col gap-4'>
                        <TextField fullWidth label="Email" sx={style_input} id="fullWidth" />
                        <TextField fullWidth label="Password" sx={style_input} id="fullWidth" />

                        <FormControlLabel
                            control={<Switch defaultChecked />}
                            label="Remeber Me"
                            sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.8rem', color: 'rgb(238, 238, 238)' } }}
                        />
                        <div className='w-full flex flex-col justify-center items-center gap-3'>
                            <button className='bg-zinc-800 hover:bg-zinc-900 text-white w-[50%] py-2 rounded-full border-1 border-gray-600 hover:border-gray-200 scale-x-100 duration-[0.5s] hover:scale-x-125 mx-auto'>Sign In</button>
                            <p className='text-sm text-gray-300 flex gap-1'>don't have an account?<Link to={'/sign_up'} className='font-bold text-zinc-300 hover:text-zinc-100'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>

            </div>


        </div>
    )
}

export default SignIn