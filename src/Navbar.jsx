import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react';
import Logo from './assets/logo.png'
const Navbar = () => {
    const [isNavOpen, setIsNavopen]  = useState(false)
    const [scrolling, setScrolling]  = useState(false)

    const stckNav = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
            setIsNavopen(false)
        }
        else {
            setScrolling(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', stckNav)

        return () => {
            window.removeEventListener('scroll', stckNav)
        }
    }, [])
  return (
    <header className={`sticky top-0 w-full z-30 ${scrolling && 'bg-black/30 backdrop-blur-xl'}`}>
        <nav className='w-[1100px] max-w-[90%] h-[80px] flex justify-between items-center mx-auto'>
            <a href="#" className='h-full text-2xl font-bold italic'>
                <img src={Logo} alt="logo" className='h-full aspect-square object-contain bg-purple-200/50'/>
            </a>
            <div className={`flex items-center gap-8 md:fixed top-[80px] md:flex-col md:items-start md:bg-[#19181a] md:border-t-[1px] md:border-b-[1px] border-white/20 md:w-full md:p-[5%] duration-300 ease-in-out ${isNavOpen? 'md:left-0': 'md:left-[-100%]'}`}>
                <ul className='flex gap-8 md:flex-col'>
                    <li className='font-normal relative before:absolute before:bottom-[-5px] rounded-lg before:w-0 before:h-[2px] before:bg-purple-500 before:hover:w-full duration-300'><a href="#">Home</a></li>
                    <li className='font-normal relative before:absolute before:bottom-[-5px] rounded-lg before:w-0 before:h-[2px] before:bg-purple-500 before:hover:w-full duration-300'><a href="#">Training</a></li>
                    <li className='font-normal relative before:absolute before:bottom-[-5px] rounded-lg before:w-0 before:h-[2px] before:bg-purple-500 before:hover:w-full duration-300'><a href="#">Testimonials</a></li>
                    <li className='font-normal relative before:absolute before:bottom-[-5px] rounded-lg before:w-0 before:h-[2px] before:bg-purple-500 before:hover:w-full duration-300'><a href="#">Membership</a></li>
                </ul>

                <button className='px-7 py-3 bg-purple-500 text-base font-semibold hover:bg-purple-600 duration-300'>Get In Touch</button>
            </div>

            <button onClick={() => setIsNavopen(!isNavOpen)} className='active:text-purple-500 hidden md:block cursor-pointer'>
                {isNavOpen? <X size={30}/>: <Menu size={30}/>}
            </button>
        </nav>
    </header>
  )
}

export default Navbar
