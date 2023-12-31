import React from 'react'
import {projects} from "../data"

const Work = () => {
  return (
    <div className='w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20'>
        <h4 className='text-3xl font-bold text-black dark:text-white mt-10'>Projects</h4>
        <div className='flex flex-wrap gap-10 lg:gao-20 justify-center'>
            {
              projects.map((p,index) => (
                <div key={index} className='w-[350px] h-[350px] shadow-xl cursor-pointer hover:scale-110 duration-300 rounded-md'>
                    <img src={p.img} alt="p.name" className='w-full h-[250px] object-cover rounded-md'/>
                    
                    <div className='w-full h-[100px] bg-white dark:bg-[#04133e]'>
                        <h4 className='text-2xl text-black dark:text-white font-semibold py-2 px-1'>{p.title}</h4>
                        <p className='text-sm text-orange-600 px-1 uppercase'>{p.cat}</p>
                    </div>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Work