import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import {motion} from 'framer-motion';

const RowContainer = ({flag, data}) => {
    return (
        <div className={`w-full my-12 ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
            
        </div>
    );
};

export default RowContainer;