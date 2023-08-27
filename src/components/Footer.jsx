import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <hr className='hidden dark:block'/>
        <div className='w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between'>
            <p className='text-lg text-white font-semibold'>
                Address XYZ ST 128, IN
            </p>

            <div className='flex flex-col md:flex-row text-md gap-5 md:gap-20 text-white'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
            </div>

            <div className='flex flex-col gap-5 text-md text-white'>
                <p>Myemail@gmail.com</p>
                <p>+91 6202438184</p>
            </div>
        </div>

        <div className='flex flex-col gap-10 items-center justify-center pb-20'>
            <p className='text-white font-semibold tracking-wider'>
                Social Media
            </p>
            
            <div className='flex gap-10 text-white text-2xl mb-10'>
                <BsInstagram className='hover:scale-125'/>
                <BsFacebook className='hover:scale-125'/>
                <BsLinkedin className='hover:scale-125'/>
            </div>
            

            <p className='text-gray-400 text-md tracking-wider'>@2023 Aryandeep</p>
            
        </div>
    </footer>
  )
}

export default Footer