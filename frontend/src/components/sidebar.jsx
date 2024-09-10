/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { UserButton } from '@clerk/clerk-react'
import {AiOutlineMenu,AiFillAppstore,AiFillHome,AiFillPhone} from 'react-icons/ai'
import { MdNotifications } from "react-icons/md";
import Homebody from './Homebody'
import Groups from './Groups'

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [activeComponent, setActiveComponent] = useState('home')

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  const showGroups = () => {
    setActiveComponent('groups')
  }

  const showHome = () => {
    setActiveComponent('home')
  }

  return (
    <>
      <aside className={`bg-[#0707078a] p-2 flex flex-col fixed h-screen text-white ${isExpanded ? 'w-60' : 'w-16'} transition-all duration-300`}>
        <div>
          <div className='flex items-center justify-between'>
            <UserButton appearance={{ elements: { userButtonAvatarBox: { width: isExpanded ? '40px' : '24px', height: isExpanded ? '40px' : '24px' } } }} />
            {isExpanded && <h2 className='text-[#0a6d1f] font-bold text-2xl ml-2'>Village<span className='text-white'>Bank</span></h2>}
            <AiOutlineMenu className={`cursor-pointer text-3xl  ${isExpanded ? 'ml-auto' : '20px'}`} onClick={toggleSidebar}/>
          </div>       
        </div>
        <ul className='mt-3 pl-1 font-normal'>
          <li className="mb-2 p-2">
            <a href="#" className='flex items-center text-sm' onClick={showHome}>
              <AiFillHome className="mr-2 text-3xl hover:text-[#089b28]"/>
              {isExpanded && <span className='text-2xl hover:text-[#089b28]'>Home</span>}
            </a>
          </li>
          <li className="mb-2 p-2">
            <a href="#" className='flex items-center text-sm' onClick={showGroups}>
              <AiFillAppstore className="mr-2 text-3xl hover:text-[#089b28]"/>
              {isExpanded && <span className='text-2xl hover:text-[#089b28]'>Dashboard</span>}
            </a>
          </li>
          <li className="mb-2 p-2">
            <a href="#" className='flex items-center text-sm'>
              <MdNotifications className="mr-2 text-3xl hover:text-[#089b28]"/>
              {isExpanded && <span className='text-2xl hover:text-[#089b28]'>Notifications</span>}
            </a>
          </li>
          <li className="mb-2 p-2">
            <a href="#" className='flex items-center text-sm'>
              <AiFillPhone className="mr-2 text-3xl hover:text-[#089b28]"/>
              {isExpanded && <span className='text-2xl hover:text-[#089b28]'>Contact</span>}
            </a>
          </li>
        </ul>
      </aside>
      {activeComponent === 'home' && (
        <>
          <Homebody isSidebarExpanded={isExpanded} />
          <Groups isSidebarExpanded={isExpanded} />
        </>
      )}
      {activeComponent === 'groups' && <Groups isSidebarExpanded={isExpanded} />}
    </>
  )
}

export default Sidebar