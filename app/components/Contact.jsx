import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mjkynvqr"); 

    
  return (
    <div id='contact' className='w-full px-[12%] py-10 
    scroll-mt-20 bg-no-repeat'>
        <h4 className="text-center mb-2 text-lg ">Contact Me</h4>
      <h2 className="text-center text-5xl">Get In Touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
       I would love to hear from you, to keep in touch please use the form below.
      </p>
      <form onSubmit={handleSubmit} className='max-w-2xl mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
        <input 
          type='text' 
          name='name' 
          placeholder='Enter your name' 
          required 
          className='flex-1 p-3 outline-none border border-gray-400 rounded-md text-black bg-white dark:border-[0.spx] dark:bg-[#11001f] dark:text-white' 
        />
        <input 
          type='email' 
          name='email' 
          placeholder='Enter your E-mail' 
          required 
          className='flex-1 p-3 outline-none border border-gray-400 rounded-md text-black bg-whitedark:border-[0.spx] dark:bg-[#11001f] dark:text-white' 
        />
      </div>

      <textarea 
        name='message' 
        rows='6' 
        placeholder='Enter your message' 
        required 
        className='w-full p-4 outline-none border border-gray-400 rounded-md text-black bg-white mb-6 dark:border-[0.spx] dark:bg-[#11001f] dark:text-white'
      ></textarea>

      <button 
        type='submit'
        disabled={state.submitting}
        className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'
      >
        Submit Now
        <Image src={assets.right_arrow_white} alt='' className='w-4' />
      </button>

      {/* This stays on the same page and updates the message */}
      <p className='text-center mt-4 text-gray-500'>
  {state.submitting
    ? 'Sending... Please wait a moment.'
    : state.succeeded
    ? '✅ Your message has been sent!'
    : state.errors && state.errors.length > 0
    ? '❌ Oops! Something went wrong.'
    : ' '}
</p>

    </form>
    </div>
  )
}

export default Contact