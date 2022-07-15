import React, { useState } from 'react';
import {MdEmojiFoodBeverage} from 'react-icons/md';
import { categories } from '../utils/data';

const MenuContainer = () => {
    const [filter, setFilter] = useState('Cafe')

    return (
        <section id="menu" className="w-full my-6">
            <div className='w-full flex flex-col items-center justify-center'>
                <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-green-600 to-green-800 transition-all ease-in-out duration-100 mr-auto'>
                    Our Hot Drink
                </p>
                <div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none'>
                    {categories && categories.map((category) => 
                        <div key={category.id} className={`group ${filter === category.urlParamName ? "bg-cartNumbg" : "bg-card"} w-24 min-2-[94px] h-28 cursor-pointer rounded-lg drop-shadpw-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out hover:bg-red-600`}>
                        <div className={`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParamName ? "bg-white" : "bg-cartNumbg"}group-hover:bg-white flex items-center justify-center`}>
                            <MdEmojiFoodBeverage className={`${filter === category.urlParamName ? "" : ""}text-card group-hover:text-textColor text-lg`}/>
                        </div>
                        <p className="text-sm text-textColor group-hover:text-white">{category.name}</p>
                    </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MenuContainer;