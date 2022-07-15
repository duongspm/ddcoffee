import React from 'react';

const RowContainer = ({flag}) => {
    return (
        <div className={`w-full my-12 ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
            <div className='w-300 md:w-225 h-auto my-12 backdrop-blur-lg'>
                <div className=''>

                </div>
            </div>
        </div>
    );
};

export default RowContainer;