import React from 'react';

const MenuContainer = () => {
    return (
        <section id="menu" className="w-full my-6">
            <div className='w-full flex flex-col items-center justify-center'>
                <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-green-600 to-green-800 transition-all ease-in-out duration-100 mr-auto'>
                    Our Hot Drink
                </p>
            </div>
        </section>
    );
};

export default MenuContainer;