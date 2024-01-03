import React, { useContext, useEffect, useRef, useState } from 'react';
import "./recommended.css"
import { AuthContext } from '../authoProvider/AuthProvider';


const Recommended = ({heading}) => {

    const [rated, setRated] = useState(3.5) //will set from database
    const scrollContainerRef1 = useRef(null)
    const [scrollAmount1, setScrollAmount1] = useState(0)
    const [isScrollEnd1, setIsScrollEnd1] = useState(false);;
    const [isInStart1, setStart1] = useState(false);;

    window.onload = () => {
        document.querySelector(".arrowLeft").style.backgroundColor = "rgba(69, 146, 247, 0.191)";
    }
    useEffect(() => {
        // Set an initial scroll value when the component mounts
        if (scrollContainerRef1.current) {
            scrollContainerRef1.current.scrollLeft = 0;
        }
    }, []); // Only runs once when the component mounts
    
    const handleScrollControl1 = () => {
        if (scrollContainerRef1.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef1.current;
            setScrollAmount1(scrollLeft);
            const isEnd = scrollLeft >= scrollWidth - clientWidth;
            const isStart = scrollLeft === 0;
            setIsScrollEnd1(isEnd);
            setStart1(isStart);
        }
    }
    useEffect(() => {
        if (isInStart1) {
            document.querySelector(".arrowLeft").style.backgroundColor = "rgba(69, 146, 247, 0.191)"
        }
        else if (!isInStart1) {
            document.querySelector(".arrowLeft").style.backgroundColor = "rgb(69, 146, 247)"
        }

        if (!isScrollEnd1) {
            document.querySelector(".arrowRight").style.backgroundColor = "rgb(69, 146, 247)"
        }
        else if (isScrollEnd1) {
            document.querySelector(".arrowRight").style.backgroundColor = "rgba(69, 146, 247, 0.191)"
        }
    }, [scrollAmount1, isScrollEnd1, isInStart1])

    const increaseScroll1 = () => {
        scrollContainerRef1.current.scrollTo({
            left: scrollContainerRef1.current.scrollLeft + 450,
            behavior: 'smooth',
        });
    }
    const decreaseScroll1 = () => {
        scrollContainerRef1.current.scrollTo({
            left: scrollContainerRef1.current.scrollLeft - 450,
            behavior: 'smooth',
        });
    }

    const rate = {
        size: 20,
        value: rated,
        count: 5,
        edit: false,
        color: "#7b7b7bcf",
        activeColor: "black",
        isHalf: true,
        a11y: true,

    };
    const { mobile } = useContext(AuthContext)
    return (
        <div>
            <h1 className='heading'>{heading?heading:""}</h1>
            <div className='cardContainer'>
                <button className='Arrow arrowRight' onClick={increaseScroll1}>{`>`}</button>
                <button className='Arrow arrowLeft' onClick={decreaseScroll1}>{`<`}</button>
                <div className='recommended flex overflow-x-auto w-full gap-4' ref={scrollContainerRef1} onScroll={handleScrollControl1}>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div className='price'>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The first of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div className='price'>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div className='price'>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div className='price'>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div className='price'>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div className='price'>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div className='price'>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div className='price'>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div className='price'>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div className='price'>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div className='price'>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div className='price'>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div className='price'>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The last of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommended;