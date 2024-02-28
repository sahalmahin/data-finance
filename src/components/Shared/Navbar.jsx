import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className='hidden md:flex gap-5 cursor-pointer'>
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="analytics" smooth={true} duration={500}>Company</Link></li>
                <li><Link to="resources" smooth={true} duration={500}>Resources</Link></li>
                <li><Link to="footer" smooth={true} duration={500}>About</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
                <ul className='uppercase p-4'>
                    <Link to="Home" smooth={true} duration={500}>Home</Link>
                    <Link to="Company" smooth={true} duration={500}>Company</Link>
                    <Link to="Resources" smooth={true} duration={500}>Resources</Link>
                    <Link to="About" smooth={true} duration={500}>About</Link>
                    <Link to="Contact" smooth={true} duration={500}>Contact</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;