import React, { useContext, useEffect, useRef, useState } from 'react';
import "./productYouMayLIke.css"
import { AuthContext } from '../authoProvider/AuthProvider';

const ProductsUmayLIke = ({heading}) => {
    
    const [rated, setRated] = useState(3.5) //will set from database
    const scrollContainerRef3 = useRef(null)
    const [scrollAmount, setScrollAmount] = useState(0)
    const [isScrollEnd, setIsScrollEnd] = useState(false);;
    const [isInStart, setStart] = useState(false);;

    window.onload = () => {
        document.querySelector(".ArrowLeft").style.backgroundColor = "rgba(69, 146, 247, 0.191)"
    }
    useEffect(() => {
        // Set an initial scroll value when the component mounts
        if (scrollContainerRef3.current) {
            scrollContainerRef3.current.scrollLeft = 0;
        }
    }, []); // Only runs once when the component mounts

    const handleScrollControl = () => {
        if (scrollContainerRef3.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef3.current;
            setScrollAmount(scrollLeft);
            const isEnd = scrollLeft >= scrollWidth - clientWidth;
            const isStart = scrollLeft === 0;
            setIsScrollEnd(isEnd);
            setStart(isStart);
        }
    }
    useEffect(() => {
        if (isInStart) {
            document.querySelector(".ArrowLeft").style.backgroundColor = "rgba(69, 146, 247, 0.191)"
        }
        else if (!isInStart) {
            document.querySelector(".ArrowLeft").style.backgroundColor = "rgb(69, 146, 247)"
        }

        if (!isScrollEnd) {
            document.querySelector(".ArrowRight").style.backgroundColor = "rgb(69, 146, 247)"
        }
        else if (isScrollEnd) {
            document.querySelector(".ArrowRight").style.backgroundColor = "rgba(69, 146, 247, 0.191)"
        }
    }, [scrollAmount, isScrollEnd, isInStart])

    const increaseScroll3 = () => {
        scrollContainerRef3.current.scrollTo({
            left: scrollContainerRef3.current.scrollLeft + 450,
            behavior: 'smooth',
        });
    }
    const decreaseScroll3 = () => {
        scrollContainerRef3.current.scrollTo({
            left: scrollContainerRef3.current.scrollLeft - 450,
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
                <button className='Arrows ArrowRight' onClick={increaseScroll3}>{`>`}</button>
                <button className='Arrows ArrowLeft' onClick={decreaseScroll3}>{`<`}</button>
                <div className='recommended flex overflow-x-auto w-full gap-4' ref={scrollContainerRef3} onScroll={handleScrollControl}>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The first of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The name of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                    <div className='card'>
                        <div className='cardImgContainer'><img className='' src="recommended1.jpg" alt="" /></div>
                        <div>Price: <span>985Tk</span>- <span>1850Tk</span></div>
                        <div className='name'>The last of the product lorem vaia ipsum via doolor via tarpor abar lorem via</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsUmayLIke;