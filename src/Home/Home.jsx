import React, { useContext, useEffect, useRef, useState } from 'react';
import "./home.css"
import Banner from './Banner';
import Loading from '../Loading';
import { Parallax } from "react-parallax";
import { AuthContext } from '../authoProvider/AuthProvider';
import HotProducts from './HotProducts';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import BannerNewBikerDiscount from './BannerNewBikerDiscount';
import CategoriesShow from './CategoriesShow';
import Recommended from './Recommended';
import ProductsUmayLIke from './ProductsUmayLIke';
import SelectBike from './SelectBike';


AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const Home = () => {
    const image1 = "b.png";
    const image2 = "loveBikes.png"
    const image3 = "b.png"
    const { mobile } = useContext(AuthContext)

    return (
        !mobile ? <>
            <div data-aos="zoom-in" data-aos-delay="250" id='home' className='h-[80vh] relative'>
                <Parallax
                    className='absolute top-0 left-0 parallax z-10'
                    bgImage={image1} strength={400}>
                    <div>
                        <div ><Banner /></div>
                    </div>
                </Parallax>
            </div>
            <div data-aos="fade-up" className='flex justify-center relative mt-[-120px]'>
                <HotProducts />
            </div>
            <div>
                <BannerNewBikerDiscount />
            </div>
            <div>
                <CategoriesShow />
            </div>
            <div>
                <h2 className='heading'>Recommended For You</h2>
                <Parallax className='rounded-[10px] h-[40vh] ' bgImage={image2} strength={500}>
                    <Recommended heading={""} />
                </Parallax>
            </div>
            <div>
                <h2 className='heading'>Products You May Like</h2>
                <Parallax className='rounded-[10px] h-[40vh] ' bgImage={image3} strength={500}>
                    <ProductsUmayLIke heading={""} />
                </Parallax>
            </div>
            <div className='flex justify-center font-semibold'>
                <SelectBike/>
            </div>
            <div>
                <h2>Available At Your Local Store</h2>
                <div>
                    
                </div>
            </div>

        </> :

















            <>
                {/* mobile responsive from here */}
                <div id='home' className='mobileDivva relative'>
                    <div
                        className=''>
                        <div ><Banner /></div>
                    </div>
                </div>
                <div className='mt-[-150px]'>
                    <div className='text-center font-bold text-[1.1em]'>
                        <h1>Trending Bestover Deals & Best Sellers</h1>
                    </div>
                    <div>
                    </div>
                </div>
            </>
    );
};

export default Home;