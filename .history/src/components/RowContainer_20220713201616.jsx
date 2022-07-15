import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import {motion} from 'framer-motion';

const RowContainer = ({flag, data}) => {
    return (
        <div className={`w-full my-12 flex ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
            {data && data.map((item) => (
                <div key={item.id} className='w-300 md:w-340  h-auto bg-cardOverlay rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg'>
                <div className='w-full flex items-center justify-between'>
                    <motion.img whileHover={{scale:1.2}} className='w-40 -mt-8 drop-shadow-2xl' alt="addtocart" src='http://localhost:3000/static/media/bacxiu.4e050beccc5ca9bcfce2.png'/>
                    <motion.div whileTap={{scale: 0.75}} className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md">
                        <MdShoppingBasket className='text-white'/>
                    </motion.div>
                </div>
                <div className='w-full flex flex-col items-end justify-end'>
                    <p className='text-textColor font-semibold text-base md:text-lg'>Cafe Den</p>
                    <p className='mt-1 text-sm text-gray-500'>54 Calories</p>
                    <div className='flex items-center gap-8'>
                        <p className='text-lg text-headingColor font-semibold'>20.000 <span className='text-sm text-red-500'>VND</span></p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
};

export default RowContainer;