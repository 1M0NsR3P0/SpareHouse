import './banner.css'
import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { AuthContext } from '../authoProvider/AuthProvider';
const Banner = () => {
    const {mobile} = useContext(AuthContext)

    return (
        !mobile ? <>
            <div className='swiper-container m-0'>
                <Swiper
                    slidesPerView={1}
                    effect={'fade'}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Pagination, EffectFade, Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='SwiperSlide'>
                        <div className='bgImg-container'><img className='bgImg' src="bg1.png" alt="swiper image" /></div>
                        <div className='popImg-container'>
                            <img className='popImg' src="jacket.png" alt="swiper image" />
                            <img className='popImg popImg2' src="jacket.png" alt="swiper image" />
                            <img className='popImg popImg3' src="jacket.png" alt="swiper image" />
                        </div>
                        <button className='absolute top-[25%] left-[24.5%] px-[20px]'>Buy Now</button>
                    </SwiperSlide>
                    <SwiperSlide className='SwiperSlide'>
                        <div className='bgImg-container'><img className='bgImg' src="bg2.png" alt="swiper image" /></div>
                        <div className='popImg-container'>
                            <img className='popImg' src="pant.png" alt="swiper image" />
                            <img className='popImg popImg2' src="pant.png" alt="swiper image" />
                            <img className='popImg popImg3' src="pant.png" alt="swiper image" />
                        </div>
                        <button className='absolute top-[25%] left-[24.5%] px-[20px]'>Buy Now</button>
                    </SwiperSlide>
                    <SwiperSlide className='SwiperSlide'>
                        <div className='bgImg-container'><img className='bgImg' src="bg3.png" alt="swiper image" /></div>
                        <div className='popImg-container'>
                            <img className='popImg' src="globes.png" alt="swiper image" />
                            <img className='popImg popImg2' src="globes.png" alt="swiper image" />
                            <img className='popImg popImg3' src="globes.png" alt="swiper image" />
                        </div>
                        <button className='absolute top-[25%] left-[24.5%] px-[20px]'>Buy Now</button>
                    </SwiperSlide>
                    <SwiperSlide className='SwiperSlide'>
                        <div className='bgImg-container'><img className='bgImg' src="bg4.png" alt="swiper image" /></div>
                        <div className='popImg-container'>
                            <img className='popImg' src="helmet.png" alt="swiper image" />
                            <img className='popImg popImg2' src="helmet.png" alt="swiper image" />
                            <img className='popImg popImg3' src="helmet.png" alt="swiper image" />
                        </div>
                        <button className='absolute top-[25%] left-[24.5%] px-[20px]'>Buy Now</button>

                    </SwiperSlide>
                </Swiper>
            </div>
        </> :
            <>
                <div className='mt-[10px]'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    effect={'fade'}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={false}
                    modules={[Pagination, EffectFade, Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="bg1.png" className='w-full h-[300px]' alt="" />
                            <img src="jacket.png" alt="" className='absolute top-[10%] right-[-20px] w-[60%]' />
                            <button className='absolute top-[40%] left-[23%] '>Buy Now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="bg2.png" className='w-full h-[300px]' alt="" />
                            <img src="pant.png" alt="" className='absolute top-[10%] right-[-20px] w-[60%]' />
                            <button className='absolute top-[40%] left-[23%] '>Buy Now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="bg3.png" className='w-full h-[300px]' alt="" />
                            <img src="globes.png" alt="" className='absolute top-[10%] right-[-20px] w-[60%]' />
                            <button className='absolute top-[40%] left-[23%] '>Buy Now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="bg4.png" className='w-full h-[300px]' alt="" />
                            <img src="helmet.png" alt="" className='absolute top-[10%] right-[-20px] w-[60%]' />
                            <button className='absolute top-[40%] left-[23%] '>Buy Now</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>

            </>
    );
};

export default Banner;