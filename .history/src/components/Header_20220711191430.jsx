import React from 'react';

const Header = () => {
    return (
        <div className='fixed z-50 w-screen bg-slate-300 p-6 px-16'>
            {/* desktop */}
            <div className='hidden md:flex w-fu'></div>
            {/* mobile */}
            <div className='flex md:hidden'></div>
        </div>
    );
};

export default Header;