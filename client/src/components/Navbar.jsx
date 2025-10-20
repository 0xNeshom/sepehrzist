import React, { use, useState } from 'react'
import {assets} from 'assets/assets'
import { Link, useLocation } from 'react-router-dom'
import { menulinks } from '../assets/assets'

const Navbar = () => {

const location = useLocation()
const[open,setOpen] = useState(false)

  return (
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24
    xl:px-32 py-4 text-gray-600 border-b border-bordercolor relative transition-all
    ${location.pathname === "/" && "bg-ligh"}`}>

        <link to='/'>
          <img src= {assets.logo} alt="logo" className="h-8"/> 
        </link>
        <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-bordercolor 
        right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all 
        duration-300 z-50 ${location.pathname === "/" ? "bg-ligh" : "bg-white"} ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}>
            {menulinks.map((link,index)=>(
              <link key={index} to={link.path}>
              {link.Name}
              </link>
            ))}
            <div className='hiddien lg:flex items-center text-sm gap-2 border
            bprder-bordercolor px-3 rounded-full max-w-56'>
              <input type="text" className="py-1.5 max-w-full bg-transparent
              outline-none placeholder:bg-gray-500" placeholder="search products"/>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
