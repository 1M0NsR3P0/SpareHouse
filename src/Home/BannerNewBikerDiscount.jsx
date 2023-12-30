import React from 'react';

const BannerNewBikerDiscount = () => {
    return (
        <div className='h-[107px] w-full text-center flex justify-center mb-[30px] '>
            <a href="#" className=' bg-[rgb(3,53,122)] h-[107px] w-[90%] items-center flex justify-between gap-1'>
                <span className='flex items-center border-r border-[#3554c5] bg-[#95c5ff] p-2 w-[90px] h-full  font-bold'>In-Store Only</span>
                <span className='font-bold text-white text-[2.8rem] flex flex-col'>New Rider With New Bike <span className='text-[yellow] text-[1.5rem] tracking-[15px]'>DISCOUNT</span></span>
                <span className='font-bold text-white text-[1.3rem] flex flex-col'>
                    <span className='tracking-[2px]'>
                        <span className='text-[yellow]'>20% Off </span>
                        Any Single Item <sup>*</sup>
                    </span>
                    <span className='text-[0.6rem] tracking-wider'><sup>*  </sup>Exclusion Apply.</span></span>
                <span className='flex items-center justify-center text-5xl text-[#8ebdff] bg-[#2c61de] h-full w-[60px]'>&gt;</span>
            </a>
        </div>
    );
};

export default BannerNewBikerDiscount;