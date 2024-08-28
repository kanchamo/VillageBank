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
    <div className='flex backdrop-blur-sm justify-between items-center h-24 max-w-[1240px] mx-auto p-4 text-white'>
        
        <h1 className='w-full text-3xl font-bold text-[#19c509]'>Village<span className='text-white'>Bank.</span></h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Home</li>
            <li className='p-4'>Home</li>
            <li className='p-4'>Home</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose className='text-4xl text-[#10a303]'/> : <AiOutlineMenu className='text-[#19c509] text-4xl'/> }
           
        </div>

        <div className={!nav ? 'fixed backdrop-blur-lg left-0 top-0 w-[60%] h-full border-r-gray100 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full pt-7 pl-3 text-3xl font-bold text-[#10a303]'>Village<span className='text-[#818080]'>Bank.</span></h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b'>Home</li>
                <li className='p-4 border-b'>Home</li>
                <li className='p-4 border-b'>Home</li>
                <li className='p-4'>Home</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar