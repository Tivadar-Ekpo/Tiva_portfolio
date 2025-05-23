import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen 
    flex flex-col items-center justify-center gap-4'>
        <div className='mt-10'>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32 ' />
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
            Hi! I'm Tivadar Ekpo<Image src={assets.hand_icon} alt='' className='w-6'/>
        </h3>
        <h2 className='text-3xl sm:text-6xl lg:text-[66px]'>
            UI,Mobile Dev resides in Nigeria.
        </h2>
        <p className='max-w-2xl mx-auto'>
            I am a fullstack developer, specializing in UI/UX design 
            and Mobile dev, with 3 years with various firms and establishments.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href='#contact' className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2
            dark:bg-transparent '>
                Contact Me
                <Image src={ assets.right_arrow_white} alt='' className='w-4'/>
            </a>
            <a href='/Tivadar-Ekpo-Resume.pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 
            bg-white dark:text-black'>
                My Resume
                <Image src={assets.download_icon} alt='' className='w-4'/>
            </a>
        </div>
    </div>
  )
}

export default Header