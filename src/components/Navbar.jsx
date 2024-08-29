/* eslint-disable no-unused-vars */
import React, {useState}from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { SignInButton } from '@clerk/clerk-react'

const Navbar = () => {
    const [nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex backdrop-blur-sm justify-between items-center h-24 w-full mx-auto p-4 text-white'>
        
        <h1 className='w-full text-3xl font-bold text-[#19c509]'>Village<span className='text-white'>Bank.</span></h1>
        <div className='hidden md:block pt-5'>
            <SignInButton mode="modal">
                <button className='bg-[#070c06] text-[#00df9a] font-bold px-6 py-2 rounded-md hover:bg-[#128a07] transition duration-300'>
                    Login
                </button> 
            </SignInButton>
        </div>

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose className='text-4xl text-[#10a303]'/> : <AiOutlineMenu className='text-[#19c509] text-4xl'/> }
           
        </div>

        <div className={!nav ? 'fixed  left-0 top-0 w-[60%] h-full border-r-gray100 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full pt-7 pl-3 text-3xl font-bold text-[#10a303]'>Village<span className='text-[#818080]'>Bank.</span></h1>
            <div className='pl-3 mt-6'>
                <SignInButton mode="modal">
                    <button className='bg-[#070c06] text-[#00df9a] w-[150px] font-bold py-3 rounded-md hover:bg-[#128a07] transition duration-300'>
                        Login
                    </button>
                </SignInButton>
            </div>
        </div>

    </div>
  )
}

export default Navbar