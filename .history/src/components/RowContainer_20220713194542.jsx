import React from 'react';

const RowContainer = ({flag}) => {
    return (
        <div className={`w-full my-12 ${flag ? "overflow-x-scrool" : "overflow-x-hidden"}`}>
            
        </div>
    );
};

export default RowContainer;