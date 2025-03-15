import React from 'react'
import plane from '../assets/flyfabi.webp'
import Button from '../components/Button' // If Button is a JS file, change it to Button.tsx if possible

const FlyFabi: React.FC = () => {
    return (
        <div id='flyfabi' className='w-full bg-gray-100 py-16 px-10'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
                <img src={plane.src} alt='plane' className='w-[500px] mx-auto my-4 rounded-lg shadow-xl' />
                <div className='flex flex-col max-w-[500px] '>
                    <p className='text-primary font-bold'>FLYING IS THE GREATEST WAY TO DISCOVER OUR PLANET</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>FLY WITH ME!</h1>
                    <p> If you ever wondered what it is like to sit in a comfortable cabin the size of a compact car and gaze down at the skylines and landscapes, this is your chance to find out. Currently flying in the Seattle, WA area.</p>
                    {/* If Button is a functional component, ensure its types are updated to TypeScript as well */}
                    {/* <Button className='bg-primary text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3' url='https://flyfabi.com' label='FlyFabi.com'/> */}
                </div>
            </div>
        </div>
    )
}

export default FlyFabi;