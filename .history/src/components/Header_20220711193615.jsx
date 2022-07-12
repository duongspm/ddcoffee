import React from 'react';
import Logo from '../assets/imgs/logo-dendo-cocaybua.png';

const Header = () => {
    return (
        <header className='fixed z-50 w-screen p-6 px-16'>
            {/* desktop */}
            <div className='hidden md:flex w-full h-full'>
                <div className='flex items-center gap-2'>
                    <img src={Logo} className="w-16 object-cover" alt="Logo nef"/>
                    <p className='text-headingColor text-xl font-bold'>DD Cup & Tea</p>
                </div>
                <ul className="flex items-center gap-8 ml-a">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About Us</li>
                </ul>
            </div>
            {/* mobile */}
            <div className='flex md:hidden w-full h-full'></div>
        </header>
    );
};

export default Header;