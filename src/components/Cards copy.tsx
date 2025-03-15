import React from 'react'
import Img from '../assets/img1.jpeg';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-2rem] bg-white' src={Img} alt='/'></img>
                <h2 className='text-2xl font-bold text-center py-8'>Single Seattle Flight</h2>
                <p className='text-center text-4xl font-bold'>$159</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Transportation to the Airport</p>
                    <p className='py-2 border-b mx-8'>45 mins Flight over Seattle</p>
                    <p className='py-2 border-b mx-8'>Headset and all other equipment included</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] mx-auto rounded-md font-medium my-6 px-6 py-3 text-black'>
                    Get Now
                </button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-2rem] bg-transparent' src={Img} alt='/'></img>
                <h2 className='text-2xl font-bold text-center py-8'>Single Long Distance Flight</h2>
                <p className='text-center text-4xl font-bold'>$294</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Transportation to the Airport</p>
                    <p className='py-2 border-b mx-8'>Flight to Friday Harbor, Chehalis or Bellingham</p>
                    <p className='py-2 border-b mx-8'>Headset and all other equipment included</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] mx-auto rounded-md font-medium my-6 px-6 py-3'>
                    Get Now
                </button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-2rem] bg-white' src={Img} alt='/'></img>
                <h2 className='text-2xl font-bold text-center py-8'>4 Hour Flight Time Package</h2>
                <p className='text-center text-4xl font-bold'>$459</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Transportation to the Airport</p>
                    <p className='py-2 border-b mx-8'>4 Hour Flight Time Package, You choose the destination</p>
                    <p className='py-2 border-b mx-8'>Headset and all other equipment included</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] mx-auto rounded-md font-medium my-6 px-6 py-3 text-black'>
                    Get Now
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Cards