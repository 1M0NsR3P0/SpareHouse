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
import StoreProducts from './StoreProducts';


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
            <div id='shopByVhicle'>
                <h2 className='heading'>Products You May Like</h2>
                <Parallax className='rounded-[10px] h-[40vh] ' bgImage={image3} strength={500}>
                    <ProductsUmayLIke heading={""} />
                </Parallax>
            </div>
            <div className='flex justify-center font-semibold my-5'>
                <SelectBike />
            </div>
            <div className='mt-[35px]'>
                <h2 className='text-center text-[#18327b] font-semibold text-[1.2rem]'>Available At Your Local Store</h2>
                <div className=''>
                    <StoreProducts heading={""} />
                </div>
            </div>
            <div>
                <div className='flex justify-center'>
                    <h2 className='text-[1.3rem] text-[#19577d] font-semibold p-5 pb-15 border-b-[2px] border-[#2b60a9] w-[90%]'>Motorcycle Parts & Gear</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='w-[90%] font-semibold leading-[32px]'>
                        There's more than one way to find the right motorcycle gear for your next ride — and Cycle Gear offers both. With over 160 storefronts across the US plus a robust digital catalog to shop online, we meet the needs of all motorcyclists. Whether you're the in-store browser who wants to learn more about parts for sale or the web shopper who knows exactly what they want, we've helped champion a DIY attitude since 1974. <br /> <br />

                        Cycle Gear is the leading local retailer for motorcycling must-haves. If you're looking for gear, parts and accessories near you, our knowledgeable staff are never far from home. We're happy to put that personal touch on shopping and the value-conscious gear we carry makes it easy to try on and test the latest apparel and parts for sale. This means cutting-edge offerings from well-established brands in the dirt and street sectors. Pick up performance-oriented riding gear for yourself or for family members today! It turns every trip to our gear stores near you into a fun adventure for all who tag along.
                        <br /> <br />
                        Our website is also home to a huge selection of motorcycle parts available online. Take your time as you find the exact OEM or aftermarket item needed to fit your bike and riding style — and explore anything else in our pressure-free environment that you may find worthy of a purchase. Buying motorcycle parts online is the best way to keep your bike running without having to spend precious free time making in-store stops. It's all about the parts and gear you need and picking them up the way you want to. Our diverse staff of dedicated riders are never more than a few mouse clicks or a phone call away!
                    </p>
                </div>
            </div>
            <div className='pt-5'>
                <div className='py-2 text-[1.4rem] font-semibold text-[#c4e8ff] bg-[#224091] flex gap-5 justify-center'><h2> We're always looking to get better for our customers. Tell us what you like, what's missing, or what's broken</h2><button>Feedback?</button></div>
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