import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import {motion} from 'framer-motion';

const RowContainer = ({flag}) => {
    return (
        <div className={`w-full my-12 ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
            <div className='w-300 md:w-340  h-auto bg-cardOverlay rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg'>
                <div className='w-full flex items-center justify-between'>
                    <motion.img whileHover={{scale:1.2}} className='w-40 -mt-8 drop-shadow-2xl' alt="addtocart" src='http://localhost:3000/static/media/bacxiu.4e050beccc5ca9bcfce2.png'/>
                    <motion.div whileTap={{scale: 0.75}} className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md">
                        <MdShoppingBasket className='text-white'/>
                    </motion.div>
                </div>
                <div class>

                </div>
            </div>
        </div>
    );
};

export default RowContainer;