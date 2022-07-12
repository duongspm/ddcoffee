import React from 'react';
import Logo from '../assets/imgs/logo-dendo-cocaybua.png';
import {MdCoffee} from 'react-icons/md'

const Header = () => {
    return (
        <header className='fixed z-50 w-screen p-6 px-16'>
            {/* desktop */}
            <div className='hidden md:flex w-full h-full'>
                <div className='flex items-center gap-2'>
                    <img src={Logo} className="w-16 object-cover" alt="Logo nef"/>
                    <p className='text-headingColor text-xl font-bold'>DD Cup & Tea</p>
                </div>
                <ul className="flex items-center gap-8 ml-auto">
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                </ul>
                <div className='relative flex items-center justify-center'>
                    <MdCoffee className='text-textColor text-2xl ml-8 cursor-pointer'></MdCoffee>
                    <div className='w-5 h-10 rounded-full bg-cartNumBg'>
                        <p className='text-sm text-white font-semibold'>2</p>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className='flex md:hidden w-full h-full'></div>
        </header>
    );
};

export default Header;