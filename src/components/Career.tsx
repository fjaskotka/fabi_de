import React from 'react'
import apple from '../assets/apple.webp'

const Career = () => {
  return (
    <div id='career' className='w-full bg-white'>
        <div className='max-w-[1240px] mx-auto p-3 md:p-6'>
        <div className='w-full bg-white shadow-2xl grid md:grid-cols-2 rounded-lg'>
            <div className='col-span-1'>
                 <img className='w-full md:mx-right mx-auto rounded-t-lg md:rounded-none md:rounded-l-lg ' src={apple.src} alt='/'></img>
            </div>
            <div className='col-span-1 p-6'>
                <div>
                    <h1 className='text-primary lg:text-4xl text-3xl font-light py-2 mx-auto text-center m-4 my-auto mb-8'>Professional Experience</h1>
                    <div className='m-5 grid grid-cols-6 text-left'>
                            <div className='col-span-1'>
                                <p className='font-bold'>Date</p>
                            </div>
                            <div className='col-span-2'>
                                <p className='font-bold'>Company</p>
                            </div>
                            <div className='col-span-3'>
                                <p className='font-bold'>Role</p>
                            </div>
                        </div>
                    
                    <div className='shadow-xl rounded-lg p-5 bg-white hover:scale-105 duration-300 my-2 '>
                        <div className='grid grid-cols-6 gap-1'>
                            <div className='col-span-1'>
                                <p className='font-normal '>2024-Current</p>
                            </div>
                            <div className='font-light col-span-2'>
                                <p>Apple, Inc.</p>
                            </div>
                            <div className='font-light col-span-3'>
                                <p>Senior Engineering Program Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-lg p-5 bg-white hover:scale-105 duration-300 my-2 '>
                        <div className='grid grid-cols-6 gap-1'>
                            <div className='col-span-1'>
                                <p className='font-normal '>2021-2024</p>
                            </div>
                            <div className='font-light col-span-2'>
                                <p>Apple, Inc.</p>
                            </div>
                            <div className='font-light col-span-3'>
                                <p>Senior Evaluation Product Lead</p>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-lg p-5 bg-white hover:scale-105 duration-300 my-2'>
                        <div className='grid grid-cols-6 gap-1'>
                            <div className='col-span-1'>
                                <p className='font-normal '>2019-2021</p>
                            </div>
                            <div className='font-light col-span-2'>
                                <p>Isardigital GmbH</p>
                            </div>
                            <div className='font-light col-span-3'>
                                <p>Product & Sales Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-lg p-5 bg-white hover:scale-105 duration-300'>
                        <div className='grid grid-cols-6 gap-1'>
                            <div className='col-span-1'>
                                <p className='font-normal '>2018-2021</p>
                            </div>
                            <div className='font-light col-span-2'>
                                <p>Fabian Jaskotka</p>
                            </div>
                            <div className='font-light col-span-3'>
                                <p>Founder & Webdeveloper</p>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-lg p-5 bg-white hover:scale-105 duration-300 my-2'>
                        <div className='grid grid-cols-6 gap-1'>
                            <div className='col-span-1'>
                                <p className='font-normal '>2016-2019</p>
                            </div>
                            <div className='font-light col-span-2'>
                                <p>Mercedes-Benz AG</p>
                            </div>
                            <div className='font-light col-span-3'>
                                <p>Corporate Student</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Career