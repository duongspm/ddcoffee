import React from 'react';
import delivery from '../assets/imgs/delivery.png';
import HeroBg from '../assets/imgs/heroBg.png';
import heroData from '../utils/data'

const HomeContainer = () => {
    return (
        <section id="home" className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
            <div className='py-2 flex flex-1 flex-col items-start  justify-center gap-8'>
                <div className='flex items-center gap-2 justify-center'>
                    <p className='text-base text-orange-500 font-semibold bg-orange-100 px-4 py-1 rounded-full'>Bike Delivery</p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={delivery} className="w-full h-full object-contain" alt="deli"/>
                    </div>
                </div>
                <p className='text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem]'>The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span></p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam, magni tempore distinctio accusantium alias similique suscipit numquam est, quidem iusto molestiae omnis qui repellendus nam. Numquam ab voluptatem qui.</p>
                <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out md:w-auto'>Order Now</button>
            </div>
            <div className='py-2 flex-1 flex items-center relative'>
                <img src={HeroBg} className="ml-auto h-420 w-full lg:w-auto lg:h-650" alt="hero-bg"/>

                <div className='w-full h-full absolute flex items-center justify-center top-0 left-0 py-4 gap-4 flex-wrap'>
                    {heroData && heroData.map(n => (
                        <div key={n.id} className='w-190 bg-cardOverlay backdrop-blur-md p-4 rounded-3xl flex flex-col items-center justify-center lg:w-190 drop-shadow-lg'>
                        <img src={n.imageSrc} className='w-40 -mt-20' alt='i1'/>
                        <p className='text-xl font-semibold text-textColor mt-6'>{n.name}</p>
                        <p className='text-sm font-semibold text-lighttextGray my-3'>{n.decp}</p>
                        <p className='text-sm font-semibold text-headingColor'>{n.price} <span className='text-xs text-red-600'>VNĐ</span></p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeContainer;