/* eslint-disable no-unused-vars */
import React from 'react'
import TypingEffect from 'react-typing-effect';
import { SignUpButton } from '@clerk/clerk-react';

function SubBody() {
  return (
    <div className='text-white '>
      <div className=' mt-[-70px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#19c509] font-bold p-2 md:text-5xl sm:text-3xl'>GROWING AT YOUR OWN PACE</p>
        <h1 className='md:text-8xl sm:text-6xl text-4xl font-bold md:py-6'>Building your future</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>fast, flexible financing for</p>
            <TypingEffect
             className='md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2 text-[#19c509]'
               text={['you','your family']} 
               speed={140}
               eraseSpeed={140} 
               eraseDelay={1000}
               loop
            />
        </div>
        <button className='bg-[#1baf0d] w-[150px] hover:bg-[#029a24] rounded-lg font-medium my-6 mx-auto py-3'><SignUpButton/></button>
      </div>
    </div>
  );
}

export default SubBody