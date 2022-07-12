import React from 'react';
import {motion} from "framer-motion";
import {MdCoffee} from 'react-icons/md';
import {MdCoffeeMaker} from 'react-icons/md';
//import Logo from '../assets/imgs/logo-dendo-cocaybua.png';
import Avata from '../assets/imgs/avatar.png';

const Header = () => {
    return (
        <header className='fixed z-50 w-screen p-6 px-16'>
            {/* desktop */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <div className='flex items-center gap-2'>
                    {/* <img src={Logo} className="w-16 object-cover" alt="Logo nef"/> */}
                    <MdCoffee className='w-16 object-cover cursor-pointer text-6xl hover:text-cartNumBg'></MdCoffee>
                    <motion.p  className='text-headingColor text-xl font-bold'>DD Cup & Tea</motion.p>
                </div>
                <div className='flex items-center gap-8'> {/* bo ra ngoai div nay thi no se nam giua */}
                    <ul className="flex items-center gap-8 ">
                        <li className='text-base text-textColor hover:text-cartNumBg duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                        <li className='text-base text-textColor hover:text-cartNumBg duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                        <li className='text-base text-textColor hover:text-cartNumBg duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                    </ul>
                    <div className='relative flex items-center justify-center'>
                        <MdCoffeeMaker className='text-textColor text-2xl ml-8 cursor-pointer'></MdCoffeeMaker>
                        <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>2</p>
                        </div>
                    </div>
                    <motion.img whileTap={{scale: 0.6}} className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl' src={Avata} alt="avata nguoi dung" />
                </div>
            </div>
            {/* mobile */}
            <div className='flex md:hidden w-full h-full'></div>
        </header>
    );
};

export default Header;