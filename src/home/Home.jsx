/* eslint-disable no-unused-vars */
import React from 'react'
import { UserButton } from '@clerk/clerk-react'

function Home() {
  return (
    <div className='flex justify-between bg-white'>

      <div className='flex'>
        <nav className='bg-[#080709e0] text-[#f9faf9] font-bold fixed top-0 h-full md:w-[20%] sm:w-[25%] p-4'>
          <h1 className='text-[#25b41e] text-4xl sm:text-2xl'>Village<span className='text-white'>Bank.</span></h1>
          <ul className='p-2 pl-1'>
            <li className='p-2'>Home</li>
            <li className='p-2'>Home</li>
            <li className='p-2'>Home</li>
            <li className='p-2'>Home</li>
            <li className='p-2'><UserButton/></li>
          </ul>
        </nav>
      </div>

      <div className=''>
        <div>
          <h1>heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</h1>
        </div>
      </div>

    </div>
  )
}

export default Home