import React, { useContext, useEffect, useRef, useState } from 'react';
import "./storeproducts.css"
import { AuthContext } from '../authoProvider/AuthProvider';

const StoreProducts = ({heading}) => {
    const scrollContainerRef4 = useRef(null)
    const [scrollAmount4, setScrollAmount4] = useState(0)
    const [isScrollEnd4, setIsScrollEnd4] = useState(false);;
    const [isInStart4, setStart4] = useState(false);

    window.onload = () => {
        document.querySelector(".ArrwLeft").style.backgroundColor = "rgba(69, 146, 247, 0.191)"
    }
    useEffect(() => {
        // Set an initial scroll value when the component mounts
        if (scrollContainerRef4.current) {
            scrollContainerRef4.current.scrollLeft = 0;
        }
    }, []); // Only runs once when the component mounts

    const handleScrollContro4 = () => {
        if (scrollContainerRef4.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef4.current;
            setScrollAmount4(scrollLeft);
            const isEnd = scrollLeft >= scrollWidth - clientWidth;
            const isStart = scrollLeft === 0;
            setIsScrollEnd4(isEnd);
            setStart4(isStart);
        }
    }
    useEffect(() => {
        if (isInStart4) {
            document.querySelector(".ArrwLeft").style.backgroundColor = "rgba(69, 146, 247, 0.191)"
        }
        else if (!isInStart4) {
            document.querySelector(".ArrwLeft").style.backgroundColor = "rgb(69, 146, 247)"
        }

        if (!isScrollEnd4) {
            document.querySelector(".ArrwRight").style.backgroundColor = "rgb(69, 146, 247)"
        }
        else if (isScrollEnd4) {
            document.querySelector(".ArrwRight").style.backgroundColor = "rgba(69, 146, 247, 0.191)"
        }
    }, [scrollAmount4, isScrollEnd4, isInStart4])

    const increaseScroll4 = () => {
        scrollContainerRef4.current.scrollTo({
            left: scrollContainerRef4.current.scrollLeft + 450,
            behavior: 'smooth',
        });
    }
    const decreaseScroll4 = () => {
        scrollContainerRef4.current.scrollTo({
            left: scrollContainerRef4.current.scrollLeft - 450,
            behavior: 'smooth',
        });
    }
    const { mobile } = useContext(AuthContext)
    return (
        <div className='relative'>
            <h1 className='heading'>{heading?heading:""}</h1>
            <div className='cardContainer'>
                <button className='Arrws ArrwRight' onClick={increaseScroll4}>{`>`}</button>
                <button className='Arrws ArrwLeft' onClick={decreaseScroll4}>{`<`}</button>
                <div className='recommended flex overflow-x-auto w-full gap-4' ref={scrollContainerRef4} onScroll={handleScrollContro4}>
                    <div className='card cardBg'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The first of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card cardBg'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card cardBg'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card cardBg'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card cardBg'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card cardBg'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card cardBg'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card cardBg'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card cardBg'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card cardBg'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card cardBg'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card cardBg'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card cardBg'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The last of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreProducts;