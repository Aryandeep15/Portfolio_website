import React from 'react';
import { Profile} from '../assets';
import {FaUserAlt} from "react-icons/fa";
import {BsWhatsapp} from "react-icons/bs"
import { MdOutlineAlternateEmail } from 'react-icons/md';


const About = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row px-8 
       md:px-10 gap-10 lg:gap-20 lg:py-20'>

        <div className='w-full md:h-[290px] lg:w-1/3 flex flex-col
            items-center border border-gray-500 dark:bg-transparent rounded-md'>
                
                <img alt='' src={Profile}
                className='h-[290px] pb-8 rounded-md ease-in-out duration-300 hover:scale-125'/>
        </div>

        <div className='w-full flex flex-col'>
            <p className='text-3xl font-bold text-black dark:text-white'> About Me</p>
            <p className='text-lg text-black dark:text-gray-400 leading-10'>Full Stack Web Developer with ability to learn and collaborate in rapidly changing environments and compositions. Worked through learning javascripts, nodejs, ReactJs, NextJs. Eager to tackle web dev design challenges to achieve learning impacts on user experience.</p>

            <div className='mt-5 2xl:mt-10 flex flex-wrap gap-5'>
                <p className='flex gap-3 items-center justify-center
                rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
                   <FaUserAlt size={18}/> Aryandeep
                </p>
                <p className='flex gap-3 items-center justify-center
                rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
                   <MdOutlineAlternateEmail size={18}/> aryandeep779@gmail.com
                </p>
                <a href="https://wa.me/+916202438184 " className="flex gap-3 items-center justify-center
                rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
                   <BsWhatsapp size={18}/> +91 6202438184
                </a>
            </div>
        </div>

    </div>
  )
}

export default About