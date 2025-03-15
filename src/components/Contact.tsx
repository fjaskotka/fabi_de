import React from 'react'
import {
    FaLinkedin,
    FaInstagram} from 'react-icons/fa'

const Contact = () => {
  return (
    <div id='contact' className='w-full py-16 text-white px-10 bg-gradient-to-r from-cyan-700 to-blue-900 '>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-4 py-2'>It's a great time to get in touch!</h1>
                <p>Find me on LinkedIn or follow me on Instagram</p>
            </div>
            <div className='flex mx-auto my-6 gap-8'>
                <a className='hover:scale-105 duration-300' href='https://www.linkedin.com/in/jaskotka/'><FaLinkedin size={100}/></a>
                <a className='hover:scale-105 duration-300' href='https://www.instagram.com/fabian_jas/'><FaInstagram size={100}/></a>
            </div>
            
        </div>

    </div>
  )
}

export default Contact