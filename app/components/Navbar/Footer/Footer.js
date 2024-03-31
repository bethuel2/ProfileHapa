import React from 'react'
import { FaFacebookSquare,FaInstagram, FaGithub,FaTwitter,FaDribbbleSquare,
} from "react-icons/fa";
import {  FaLinkedin } from "react-icons/fa6"
import { FaPhoneVolume, } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer class= "bg-gray-800 mt-6 text-white py-6">
      <section id='contact us'>
    <div className=" max-w-[1240px] mx-auto py-17 px-5 grid lg:grid-cols-3 gap-9 text-gray-100">
      <div>
        <h2 className="w-full text-2xl font-bold text-[#3de0ad]">About Us</h2>
        <p className='text-xl'>
        HAPA Cultivating peace, fostering tolerance, and promoting inclusivity for a prosperous and harmonious Horn of Africa.
        </p>
        <div className=" mt-28 flex  justify-between  md:w-[75%]my-6 ">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitter size={30} />
          <FaLinkedin size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex ml-28 ">
        <div>
          <h4 className=" text-green-500	py-4 font-semibold">Quick Links</h4>
          <ul>
            <li className="py-2 text-small">Home </li>
            <li className="py-2 text-small">About Us </li>
            <li className="py-2 text-small">Get Involved</li>
            <li className="py-2 text-small">Our Team </li>
            <li className="py-2 text-small">Contact Us </li>
          </ul>
        </div>
        <div className=''>
          <h4 className=" text-green-500	 ml-20 py-4 font-semibold">Contact us</h4>
          <ul className='ml-20'>
            <li className="py-2 text-small"><FaPhoneVolume  size={30} className= " text-xl text-white"/>+1(510)836-9098</li>
            <li className="py-2 text-small"> <MdEmail  size={30} className= " text-xl text-white"/>info@hapa-consultancy</li>
            
            
          </ul>
        </div>
        
        
      </div>
    </div>
    </section>
    </footer>
    
  )
}

export default Footer