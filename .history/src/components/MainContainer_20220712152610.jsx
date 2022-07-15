import React from 'react';
import delivery from '../assets/imgs/delivery.png';

const MainContainer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='py-2 flex-1 flex-col items-start md:items-center justify-center'>
                <div>
                    <p>Bike Delivery</p>
                    <div className='w-10 h-10 bg-white rounded-full overflow-hidden'>
                        <img src={delivery} className="w-full h-full object"/>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default MainContainer;