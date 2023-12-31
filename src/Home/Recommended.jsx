import React, { useContext, useEffect, useRef, useState } from 'react';
import "./recommended.css"
import { AuthContext } from '../authoProvider/AuthProvider';
import ReactStars from "react-rating-stars-component";
import { Parallax } from 'react-parallax';


const Recommended = () => {
    const image1 = "loveBikes.png"
    const [rated, setRated] = useState(3.5) //will set from database
    const scrollContainerRef = useRef(null)
    const [scrollAmount, setScrollAmount] = useState(0)
    const [isScrollEnd, setIsScrollEnd] = useState(false);;
    const [isInStart, setStart] = useState(false);;

    window.onload = () => {
        document.querySelector(".arrow-left").style.backgroundColor = "rgba(69, 146, 247, 0.191)"
    }
    useEffect(() => {
        // Set an initial scroll value when the component mounts
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = 0;
        }
    }, []); // Only runs once when the component mounts

    const handleScrollControl = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setScrollAmount(scrollLeft);
            const isEnd = scrollLeft >= scrollWidth - clientWidth;
            const isStart = scrollLeft === 0;
            setIsScrollEnd(isEnd);
            setStart(isStart);
        }
    }
    useEffect(() => {
        if (isInStart) {
            document.querySelector(".arrow-left").style.backgroundColor = "rgba(69, 146, 247, 0.191)"
        }
        else if (!isInStart) {
            document.querySelector(".arrow-left").style.backgroundColor = "rgb(69, 146, 247)"
        }

        if (!isScrollEnd) {
            document.querySelector(".arrow-right").style.backgroundColor = "rgb(69, 146, 247)"
        }
        else if (isScrollEnd) {
            document.querySelector(".arrow-right").style.backgroundColor = "rgba(69, 146, 247, 0.191)"
        }
    }, [scrollAmount, isScrollEnd, isInStart])

    const increaseScroll = () => {
        scrollContainerRef.current.scrollTo({
            left: scrollContainerRef.current.scrollLeft + 450,
            behavior: 'smooth',
        });
    }
    const decreaseScroll = () => {
        scrollContainerRef.current.scrollTo({
            left: scrollContainerRef.current.scrollLeft - 450,
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
        <div className='h-[250vh] flex-col gap-5 rounded-[10px] w-full mt-10 flex'>
            <div >Recommended for you</div>
            <Parallax className='rounded-[10px] h-[250vh] w-[85vw]' bgImage={image1} strength={1000}>
                <button className='arrow arrow-right' onClick={increaseScroll}>{`>`}</button>
                <button className='arrow arrow-left' onClick={decreaseScroll}>{`<`}</button>
                <div className='hotItems flex overflow-x-auto justify-center items-center w-[85vw] gap-4' ref={scrollContainerRef} onScroll={handleScrollControl}>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> first Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                    <div className='reccomendedCard-container'>
                        <div className='h-[188px] w-[188px] mb-[10px]'><img className='w-full h-full rounded-[10px]' src="recommended1.jpg" alt="recommended pics" /></div>
                        <div><span className='text-[#1e2870] font-bold text-[1.1rem]'> Arai XD-4 Helmet.</span></div>
                        <div className='text-[#1e2870] text-[1.1rem] font-bold' >
                            Price:
                            <span>
                                <span> 348Tk</span>
                                -
                                <span>350Tk</span>
                            </span>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Recommended;