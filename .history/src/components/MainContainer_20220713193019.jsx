import React from 'react';
import HomeContainer from './HomeContainer';

const MainContainer = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <HomeContainer/>
            <section className="w-full my-6">
                <div className='w-full flex items-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2'>

                </div>
            </section>
        </div>
    );
};

export default MainContainer;