/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import safe from '../safe.avif'
import { SignUpButton } from '@clerk/clerk-react';

const About = () => {
  return (
    <div className='w-full bg-[#dee0de75] px-4 py-8'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center'>
            <img className='w-[400px] h-[300px] mx-auto rounded-xl object-cover' src={safe} alt='/' />
            <div className='flex flex-col justify-center space-y-3'>
                <p className='text-[#238023] text-4xl font-bold uppercase'>VILLAGE BANKING</p>
                <h1 className='md:text-4xl sm:text-2xl text-xl font-bold'>Financing at it's finest</h1>
                <p className='text-sm text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Laborum voluptatem quidem assumenda at 
                    amet inventore rerum labore neque, laboriosam earum.
                </p>
                <SignUpButton>
                    <button className='bg-[#020202] text-[#19c509] hover:bg-[#029a24] hover:text-white w-[150px] rounded-md font-medium py-2 transition-colors duration-300'>Get Started</button>
                </SignUpButton>
            </div>
        </div>
    </div>
  )
}

export default About
