import React from 'react'
import { FaLinkedin, FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    const navbarHeight = 64;

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const topOffset = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topOffset - navbarHeight,
                behavior: 'smooth',
            });
        }
    }

    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-7 text-gray-300'>
            <div className='mx-auto'>
                {/* Optional SVG logo */}
                <svg className='flex fill-white h-12' id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 835.96 117.65">
                    {/* SVG Path Definitions */}
                </svg>
            </div>
            <div className='flex justify-center space-x-6'>
                {/* Social Media Icons */}
                <FaLinkedin size={30} className="text-white hover:text-blue-500" />
                <FaGithubSquare size={30} className="text-white hover:text-gray-500" />
                <FaInstagram size={30} className="text-white hover:text-pink-500" />
            </div>
            <div className='flex justify-center text-sm'>
                <p>&copy; 2025 Fabian Jaskotka. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;