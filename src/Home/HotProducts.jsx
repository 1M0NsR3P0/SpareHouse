import React, { useContext, useEffect, useRef, useState } from 'react';
import "./home.css"
import { AuthContext } from '../authoProvider/AuthProvider';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const HotProducts = () => {
    const [rated, setRated] = useState(3.5) //will set from database
    const scrollContainerRef = useRef(null)
    const [scrollAmount, setScrollAmount] = useState(0)
    const [isScrollEnd, setIsScrollEnd] = useState(false);;
    const [isInStart, setStart] = useState(false);;

    window.onload = () => {
        document.querySelector(".arrow-left").style.backgroundColor = "rgba(69, 146, 247, 0.191)";
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
        value: rated, //this is the rated value can make dynamic
        count: 5, // this is how many star there is to be rated
        edit: false, // cannot edit. use a onclick give review button TODO when server available
        color: "#7b7b7bcf",
        activeColor: "black",
        isHalf: true,
        a11y: true,

    };
    const { mobile } = useContext(AuthContext)
    return (
        !mobile ? <>
            <div className='w-[90vw]'>
                <button className='arrow arrow-right' onClick={increaseScroll}>{`>`}</button>
                <button className='arrow arrow-left' onClick={decreaseScroll}>{`<`}</button>
                <div className='hotItems flex overflow-x-auto w-full gap-4' ref={scrollContainerRef} onScroll={handleScrollControl}>
                    <div className='mt-[50px]  SquareCard-container'>
                        <div className='squareImg-container'><img src="./jacket.png" alt="" /></div>
                        <div className='SquareCard p-1 flex flex-col'>
                            <span className='font-semibold text-[#e9f1ff]'> first Heated Jacket For Long Ride</span>
                            <span className='font-bold text-[#e9f1ff]'>Price: <span className=''>20043 Tk</span></span>
                            <span className='font-bold text-[#7a8392]'>Price: <span className='line-through'>24043 Tk</span></span>
                            <div className='flex items-center gap-1'><span><ReactStars {...rate} onChange={(newValue) => { console.log(newValue) }} /></span> <a href='#'>FeedBack?</a ></div>
                            <div className='flex justify-between m-[2px]'>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>More</Link>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] SquareCard-container'>
                        <div className='squareImg-container'><img src="./pant.png" alt="" /></div>
                        <div className='SquareCard p-1 flex flex-col'>
                            <span className='font-semibold text-[#e9f1ff]'>Heated Jacket For Long Ride</span>
                            <span className='font-bold text-[#e9f1ff]'>Price: <span className=''>20043 Tk</span></span>
                            <span className='font-bold text-[#7a8392]'>Price: <span className='line-through'>24043 Tk</span></span>
                            <div className='flex items-center gap-1'><span><ReactStars {...rate} onChange={(newValue) => { console.log(newValue) }} /></span> <a href='#'>FeedBack?</a ></div>
                                                        <div className='flex justify-between m-[2px]'>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>More</Link>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] SquareCard-container'>
                        <div className='squareImg-container'><img src="./globes.png" alt="" /></div>
                        <div className='SquareCard p-1 flex flex-col'>
                            <span className='font-semibold text-[#e9f1ff]'>Heated Jacket For Long Ride</span>
                            <span className='font-bold text-[#e9f1ff]'>Price: <span className=''>20043 Tk</span></span>
                            <span className='font-bold text-[#7a8392]'>Price: <span className='line-through'>24043 Tk</span></span>
                            <div className='flex items-center gap-1'><span><ReactStars {...rate} onChange={(newValue) => { console.log(newValue) }} /></span> <a href='#'>FeedBack?</a ></div>
                                                        <div className='flex justify-between m-[2px]'>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>More</Link>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] SquareCard-container'>
                        <div className='squareImg-container'><img src="./helmet.png" alt="" /></div>
                        <div className='SquareCard p-1 flex flex-col'>
                            <span className='font-semibold text-[#e9f1ff]'>Heated Jacket For Long Ride</span>
                            <span className='font-bold text-[#e9f1ff]'>Price: <span className=''>20043 Tk</span></span>
                            <span className='font-bold text-[#7a8392]'>Price: <span className='line-through'>24043 Tk</span></span>
                            <div className='flex items-center gap-1'><span><ReactStars {...rate} onChange={(newValue) => { console.log(newValue) }} /></span> <a href='#'>FeedBack?</a ></div>
                                                        <div className='flex justify-between m-[2px]'>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>More</Link>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] SquareCard-container'>
                        <div className='squareImg-container'><img src="./jacket.png" alt="" /></div>
                        <div className='SquareCard p-1 flex flex-col'>
                            <span className='font-semibold text-[#e9f1ff]'>Heated Jacket For Long Ride</span>
                            <span className='font-bold text-[#e9f1ff]'>Price: <span className=''>20043 Tk</span></span>
                            <span className='font-bold text-[#7a8392]'>Price: <span className='line-through'>24043 Tk</span></span>
                            <div className='flex items-center gap-1'><span><ReactStars {...rate} onChange={(newValue) => { console.log(newValue) }} /></span> <a href='#'>FeedBack?</a ></div>
                                                        <div className='flex justify-between m-[2px]'>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>More</Link>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] SquareCard-container'>
                        <div className='squareImg-container'><img src="./pant.png" alt="" /></div>
                        <div className='SquareCard p-1 flex flex-col'>
                            <span className='font-semibold text-[#e9f1ff]'>Heated Jacket For Long Ride</span>
                            <span className='font-bold text-[#e9f1ff]'>Price: <span className=''>20043 Tk</span></span>
                            <span className='font-bold text-[#7a8392]'>Price: <span className='line-through'>24043 Tk</span></span>
                            <div className='flex items-center gap-1'><span><ReactStars {...rate} onChange={(newValue) => { console.log(newValue) }} /></span> <a href='#'>FeedBack?</a ></div>
                                                        <div className='flex justify-between m-[2px]'>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>More</Link>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] SquareCard-container'>
                        <div className='squareImg-container'><img src="./globes.png" alt="" /></div>
                        <div className='SquareCard p-1 flex flex-col'>
                            <span className='font-semibold text-[#e9f1ff]'>Heated Jacket For Long Ride</span>
                            <span className='font-bold text-[#e9f1ff]'>Price: <span className=''>20043 Tk</span></span>
                            <span className='font-bold text-[#7a8392]'>Price: <span className='line-through'>24043 Tk</span></span>
                            <div className='flex items-center gap-1'><span><ReactStars {...rate} onChange={(newValue) => { console.log(newValue) }} /></span> <a href='#'>FeedBack?</a ></div>
                                                        <div className='flex justify-between m-[2px]'>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>More</Link>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] SquareCard-container'>
                        <div className='squareImg-container'><img src="./helmet.png" alt="" /></div>
                        <div className='SquareCard p-1 flex flex-col'>
                            <span className='font-semibold text-[#e9f1ff]'>Heated Jacket For Long Ride</span>
                            <span className='font-bold text-[#e9f1ff]'>Price: <span className=''>20043 Tk</span></span>
                            <span className='font-bold text-[#7a8392]'>Price: <span className='line-through'>24043 Tk</span></span>
                            <div className='flex items-center gap-1'><span><ReactStars {...rate} onChange={(newValue) => { console.log(newValue) }} /></span> <a href='#'>FeedBack?</a ></div>
                                                        <div className='flex justify-between m-[2px]'>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>More</Link>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] SquareCard-container'>
                        <div className='squareImg-container'><img src="./pant.png" alt="" /></div>
                        <div className='SquareCard p-1 flex flex-col'>
                            <span className='font-semibold text-[#e9f1ff]'>Heated Jacket For Long Ride</span>
                            <span className='font-bold text-[#e9f1ff]'>Price: <span className=''>20043 Tk</span></span>
                            <span className='font-bold text-[#7a8392]'>Price: <span className='line-through'>24043 Tk</span></span>
                            <div className='flex items-center gap-1'><span><ReactStars {...rate} onChange={(newValue) => { console.log(newValue) }} /></span> <a href='#'>FeedBack?</a ></div>
                                                        <div className='flex justify-between m-[2px]'>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>More</Link>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] SquareCard-container'>
                        <div className='squareImg-container'><img src="./globes.png" alt="" /></div>
                        <div className='SquareCard p-1 flex flex-col'>
                            <span className='font-semibold text-[#e9f1ff]'>Heated Jacket For Long Ride</span>
                            <span className='font-bold text-[#e9f1ff]'>Price: <span className=''>20043 Tk</span></span>
                            <span className='font-bold text-[#7a8392]'>Price: <span className='line-through'>24043 Tk</span></span>
                            <div className='flex items-center gap-1'><span><ReactStars {...rate} onChange={(newValue) => { console.log(newValue) }} /></span> <a href='#'>FeedBack?</a ></div>
                                                        <div className='flex justify-between m-[2px]'>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>More</Link>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] SquareCard-container'>
                        <div className='squareImg-container'><img src="./helmet.png" alt="" /></div>
                        <div className='SquareCard p-1 flex flex-col'>
                            <span className='font-semibold text-[#e9f1ff]'>Heated Jacket For Long Ride</span>
                            <span className='font-bold text-[#e9f1ff]'>Price: <span className=''>20043 Tk</span></span>
                            <span className='font-bold text-[#7a8392]'>Price: <span className='line-through'>24043 Tk</span></span>
                            <div className='flex items-center gap-1'><span><ReactStars {...rate} onChange={(newValue) => { console.log(newValue) }} /></span> <a href='#'>FeedBack?</a ></div>
                                                        <div className='flex justify-between m-[2px]'>
                                <Link className='bg-[#0099ff76] cursor-pointer p-1 rounded-md active:p-[5px]'>More</Link>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] SquareCard-container'>
                        <div className='squareImg-container'><img src="./jacket.png" alt="" /></div>
                        <div className='SquareCard p-1 flex flex-col'>
                            <span className='font-semibold text-[#e9f1ff]'>Heated Jacket For Long Ride</span>
                            <span className='font-bold text-[#e9f1ff]'>Price: <span className=''>20043 Tk</span></span>
                            <span className='font-bold text-[#7a8392]'>Price: <span className='line-through'>24043 Tk</span></span>
                            <div className='flex items-center gap-1'><span><ReactStars {...rate} onChange={(newValue) => { console.log(newValue) }} /></span> <a href='#'>FeedBack?</a ></div>
                                                        <div className='flex justify-between m-[2px]'>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>More</Link>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] SquareCard-container'>
                        <div className='squareImg-container'><img src="./pant.png" alt="" /></div>
                        <div className='SquareCard p-1 flex flex-col'>
                            <span className='font-semibold text-[#e9f1ff]'>Heated Jacket For Long Ride</span>
                            <span className='font-bold text-[#e9f1ff]'>Price: <span className=''>20043 Tk</span></span>
                            <span className='font-bold text-[#7a8392]'>Price: <span className='line-through'>24043 Tk</span></span>
                            <div className='flex items-center gap-1'><span><ReactStars {...rate} onChange={(newValue) => { console.log(newValue) }} /></span> <a href='#'>FeedBack?</a ></div>
                                                        <div className='flex justify-between m-[2px]'>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>More</Link>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] SquareCard-container'>
                        <div className='squareImg-container'><img src="./globes.png" alt="" /></div>
                        <div className='SquareCard p-1 flex flex-col'>
                            <span className='font-semibold text-[#e9f1ff]'>Heated Jacket For Long Ride</span>
                            <span className='font-bold text-[#e9f1ff]'>Price: <span className=''>20043 Tk</span></span>
                            <span className='font-bold text-[#7a8392]'>Price: <span className='line-through'>24043 Tk</span></span>
                            <div className='flex items-center gap-1'><span><ReactStars {...rate} onChange={(newValue) => { console.log(newValue) }} /></span> <a href='#'>FeedBack?</a ></div>
                                                        <div className='flex justify-between m-[2px]'>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>More</Link>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] SquareCard-container'>
                        <div className='squareImg-container'><img src="./helmet.png" alt="" /></div>
                        <div className='SquareCard p-1 flex flex-col'>
                            <span className='font-semibold text-[#e9f1ff]'>Heated Jacket For Long Ride</span>
                            <span className='font-bold text-[#e9f1ff]'>Price: <span className=''>20043 Tk</span></span>
                            <span className='font-bold text-[#7a8392]'>Price: <span className='line-through'>24043 Tk</span></span>
                            <div className='flex items-center gap-1'><span><ReactStars {...rate} onChange={(newValue) => { console.log(newValue) }} /></span> <a href='#'>FeedBack?</a ></div>
                                                        <div className='flex justify-between m-[2px]'>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>More</Link>
                                <Link to={`product/:id`} className='bg-[#1267f173] text-[white] font-semibold cursor-pointer p-1 rounded-md active:p-[5px]'>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center m-3'><button>Shop Now</button></div>
            </div>
        </>









            : <>comming soon...</>
    );
};

export default HotProducts;