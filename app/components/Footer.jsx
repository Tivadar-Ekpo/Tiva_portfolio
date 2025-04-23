import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-5'>
        <div className='text-center'>
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Logo' className='W-36 mx-auto mb-1' />
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon : assets.mail_icon} alt=' ' className='w-6'/>
                ekpotivadar@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex  items-center justify-between  border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>
                Tivadar Ekpo. All rights reserved.
            </p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li>
                        <a target='_blank' href='https://github.com/Tivadar-Ekpo'>Github</a>
                    </li>
                    <li>
                        <a target='_blank' href='www.linkedin.com/in/tivadar-ekpo'>Linkedin</a>
                    </li>
                    <li>
                        <a target='_blank' href='https://x.com/Tidilexdivi'>Twitter</a>
                    </li>
                </ul>
        </div>
    </div>
  )
}

export default Footer