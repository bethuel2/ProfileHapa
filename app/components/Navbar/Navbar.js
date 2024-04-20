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
      <div className='flex md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
        </button>
      </div>
      <ul className={`flex ${isOpen ? 'flex' : 'hidden'} mb-3 mr-7 md:flex md:flex-row gap-2 md:gap-4 justify-end md: md:mr-0`}>
        <li> <Link href='#home' className='text-white hover:text-green-500'>Home</Link></li>
        <li><Link href='#about us'className='text-white hover:text-green-500'> About Us</Link></li>
        <li> <Link href='#our team'className='text-white hover:text-green-500'>Our Team</Link></li>
        <li><Link href='#get involved'className='text-white hover:text-green-500'> Get Involved</Link></li>
        <li><Link href='#contact us'className='text-white hover:text-green-500'>Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export { Navbar };