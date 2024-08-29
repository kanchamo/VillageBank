/* eslint-disable no-unused-vars */
import React from 'react'

function footer() {
  return (
    <div className=' w-full py-16 text-white px-4'>
        <div className=' max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4 flex flex-col justify-center'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>Developed by <span className='text-[#00df9a]'>CARLOS ZULU</span></h1>
                <p className='text-white text-2xl font-bold'>Subscribe to our newsletter to stay updated with new updates</p>
            </div>
           <div className='my-4'>
             <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter email'/>
                <button className='bg-black hover:bg-[#036b1a] text-[#00df9a] rounded-md font-bold w-[200px] ml-4 my-6 px-6 py-3'>Subscribe</button>
             </div>
             <p className='text-[#00df9a] underline cursor-pointer'>Privacy Policy</p>
           </div>
      </div>
      
    </div>
  )
}

export default footer