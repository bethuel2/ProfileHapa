// ./app/components/Navbar/Navbar.js

"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-black w-full p-2 md:p-1'>
      <div className='flex flex-col items-left md: md:mr-0'> 
      
        <p className='  text-white text-2xl hover:text-green-500'> Welcome to Horn Of Africa Peace Ambasadors</p>
      </div>
        <ul className='flex flex-col md:flex-row gap-2 md:gap-4 justify-end md: md:mr-0'>
            <li> <Link href='#home' className='text-white hover:text-green-500'> <FaHome size={30} className= "text-white" />Home</Link></li>
            <li><Link href='#about us'className='text-white hover:text-green-500'> <FaInfo size={30} className= " text-white" />About Us</Link></li>
            <li> <Link href='#our team'className='text-white hover:text-green-500'><GiTeamIdea size={30} className= " text-white" />Our Team</Link></li>
            <li><Link href='#get involved'className='text-white hover:text-green-500'> <FaHandshakeAngle size={30} className= " text-white"  />Get Involved</Link></li>
            
            <li><Link href='#contact us'className='text-white hover:text-green-500'> <FaPhoneVolume  size={30} className= " text-white"/>Contact Us</Link></li>
            
        </ul>
    </nav>
  )
}

export default Navbar
