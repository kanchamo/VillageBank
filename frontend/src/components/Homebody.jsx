/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { useUser } from '@clerk/clerk-react'
import { IoAddOutline } from "react-icons/io5";


function Homebody({ isSidebarExpanded }) {
  return (
    <div className={`p-7 font-bold transition-all duration-300 ${isSidebarExpanded ? 'ml-60' : 'ml-16'}`}>
      <div className='flex items-center mb-9 text-4xl'>
        <h3 className='text-white'>Welcome to your <span className='text-[#07b324]'>Village</span>Bank</h3>
      </div>
      <div className="flex justify-between">
        <div className="card p-4 bg-[#038122]  text-white shadow-md rounded-lg">
          <div className='flex items-center'>
            <AiOutlineUsergroupAdd className="mr-2" />
            <h3>Balance</h3>
          </div>
        </div>
        <div className="card p-4 bg-[#038122]  text-white shadow-md rounded-lg">
          <div className='flex items-center'>
            <AiOutlineUsergroupAdd className="mr-2" />
            <h3>Group no.</h3>
          </div>
        </div>
        <div className="card p-4 bg-[#038122]  text-white shadow-md rounded-lg">
          <div className='flex items-center'>
            <IoAddOutline className="mr-2 text-[#fbfcfb]" />
            <h3>Add Money</h3>
          </div>
        </div>
        <div className="card p-4 bg-[#038122]  text-white shadow-md rounded-lg">
          <div className='flex items-center'>
            <AiOutlineUsergroupAdd className="mr-2" />
            <h3>Alerts</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

Homebody.propTypes = {
  isSidebarExpanded: PropTypes.bool.isRequired,
};

export default Homebody