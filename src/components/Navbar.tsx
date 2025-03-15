import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = ()  => {
    const [nav, setNav] = useState(false)
    const navbarHeight = 64;

    const handleNav = () => { 
        setNav(!nav)
    };

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const topOffset = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topOffset - navbarHeight,
                behavior: 'smooth',
            });
        //   section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleButtonClick = (sectionId) => {
        handleNav();
        handleScroll(sectionId);
    };

    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const updateScrollState = () => {
          if (window.scrollY > 20) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

        };
    
        window.addEventListener('scroll', updateScrollState);
        return () => window.removeEventListener('scroll', updateScrollState);
      }, []);
    


    return (
        <div className={`fixed top-0 left-0 w-full text-white z-50 transition-colors ${isScrolled ? 'bg-[#001000]/95' : 'bg-transparent'}`}> 
            <div className={`flex justify-between items-center max-w-[1240px] mx-auto px-4  ${isScrolled ? 'h-16' : 'h-24'}`}>
                {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Fabian Jaskotka</h1> */}
                <button onClick={() => handleScroll('home')}>
                    <svg className={`${isScrolled ? 'h-8' : 'h-12'}`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 603.5 686.5">
                    <defs>
                        {/* <style>
                        .cls-1 {
                            fill: #fff;
                            stroke: #869f5c;
                            stroke-miterlimit: 10;
                            stroke-width: 43px;
                        }
                        </style> */}
                    </defs>
                    <path className='cls-1' stroke="#FFF" strokeWidth="30" fill='none' d="M21.5,686.5V21.5h560c0,155.34.5,328.16.5,483.5-.47,115.13-93,165-179.44,156.46-38.71-3.83-70.31-23.99-77.24-29.1-67.32-49.57-87.32-98.36-91.32-110.36"/>
                    <line stroke="#FFF" strokeWidth="30" class="cls-1" x1="25" y1="312.5" x2="359" y2="313"/>
                    </svg>
                </button>
                <ul className='hidden md:flex mx-right'>
                    <li className='p-4'><button onClick={() => handleScroll('home')}>Home</button></li>
                    <li className='p-4'><button onClick={() => handleScroll('career')}>Professional</button></li>
                    <li className='p-4'><button onClick={() => handleScroll('academic')}>Academic</button></li>
                    <li className='p-4'><button onClick={() => handleScroll('flyfabi')}>Leisure</button></li>
                    <li className='p-4'><button onClick={() => handleScroll('contact')}>Contact</button></li>

                </ul>
            
                <div onClick={handleNav} className='block z-50 md:hidden'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>
            </div>
                <div className={nav ? 'fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#000300]/95 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                {/* <h1 className='w-full text-3xl font-bold text-primary py-5 px-5'>Fabian Jaskotka</h1> */}
                <svg className='h-12 my-5 mx-5' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 603.5 686.5">
                    <path className='cls-1' stroke="#FFF" strokeWidth="30" fill='none' d="M21.5,686.5V21.5h560c0,155.34.5,328.16.5,483.5-.47,115.13-93,165-179.44,156.46-38.71-3.83-70.31-23.99-77.24-29.1-67.32-49.57-87.32-98.36-91.32-110.36"/>
                    <line stroke="#FFF" strokeWidth="30" class="cls-1" x1="25" y1="312.5" x2="359" y2="313"/>
                    </svg>
                
                
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'><button onClick={() => handleButtonClick('home')}>Home</button></li>
                    <li className='p-4 border-b border-gray-600'><button onClick={() => handleButtonClick('career')}>Professional</button></li>
                    <li className='p-4 border-b border-gray-600'><button onClick={() => handleButtonClick('academic')}>Academic</button></li>
                    <li className='p-4 border-b border-gray-600'><button onClick={() => handleButtonClick('flyfabi')}>Leisure</button></li>
                    <li className='p-4'><button onClick={() => handleButtonClick('contact')}>Contact</button></li>
                </ul>
                </div>
            
        </div>
    )
}

export default Navbar;