/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { BiUnderline } from 'react-icons/bi'

function Groups({ isSidebarExpanded }) {
  return (
    <div className={`p-7 justify-center font-bold transition-all duration-300 ${isSidebarExpanded ? 'ml-60' : 'ml-16'}`}>
        <div className={`p-7 flex justify-between font-bold transition-all duration-300 ${isSidebarExpanded ? 'ml-60' : 'ml-16'}`}>
            <div className='card m-2 flex items-center justify-center bg-[#ffffffa6] w-64 h-64 shadow-lg rounded-lg'>
                <div>
                    <h1 className="text-2xl underline">Group name</h1>
                </div>
            </div>
            <div className='card m-2 flex items-center justify-center bg-[#ffffff9d] w-64 h-64 shadow-lg rounded-lg'>
                <div>
                    <h1 className="text-2xl underline">Group name</h1>
                </div>
            </div>
            <div className='card m-2 flex items-center justify-center bg-[#ffffff98] w-64 h-64 shadow-lg rounded-lg'>
                <div>
                    <h1 className="text-2xl underline">Group name</h1>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-8">
            <button className="bg-[#038122] hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                MORE
            </button>
        </div>
    </div> 
  )
}

export default Groups