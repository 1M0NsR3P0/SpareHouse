import React, { useEffect, useState } from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    useEffect(() => {
        const popUpHandler = (e) => {
            if (e.target) {
                setMenuOpen(false)
                setCategoryOpen(false)
                setProfileOpen(false)
            }
        }
        window.addEventListener("mousedown", popUpHandler)
    }, [])
    return (
        <div className='navbar flex gap-0 md:gap-5 justify-evenly h-[90px] items-center bg-[#2c73c9] fixed z-10 w-[100vw]'>
            <div className='logo-container'>
                <Link to={"/"} className='logo flex md:flex-row flex-col gap-[1px] justify-start items-center'>
                    <img src="./svg_spare_house_logo.svg" alt="logo" className='w-[90px] h-[90px]' />
                    <span className='hidden md:block text-blue-200 font-bold text-[1.5rem]'>Spare Hosue</span>
                </Link>
            </div>
            <div className='serach-container flex gap-5 justify-center items-center'>
                <div className='flex gap-5'>
                    <button className='w-[64px] md:text-[1rem] text-[0.6rem] md:w-[150px]'><a href="#shopByVhicle">Shop By Vhicle</a></button>
                    <span className='flex gap-5 justify-center items-center relative'>
                        <input type="text" name='search' placeholder='Search Product' id='search' className='search md:w-[320px] w-[120px]' />
                        <span className='w-[24px] hidden md:block h-[24px] absolute right-2 cursor-pointer'><img src="./search.svg" alt="search_logo" /></span>
                    </span>
                </div>
            </div>
            <div className='other-container hidden gap-1 justify-center items-center md:flex cursor-pointer'>
                <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center ' >
                        <Link to={"contact"} className='font-bold'>Find Us</Link>
                        <img src="./location.png" alt="location-icon" className='location-icon w-[30px] h-[30px]' />
                    </div>
                    <div>
                        <span className='text-[32px]' onClick={()=>{setProfileOpen(!profileOpen)}}>&#x1F464;
                        </span>
                        <table className={`select-none ${profileOpen ? 'block' : 'hidden'} z-50 absolute top-[90px] bg-[#7caaf9ac]  menus cursor-pointer w-fit h-fit overflow-hidden`}>
                            <tbody>
                                <tr className='menu'><td className='text-[black]'><a href='#'>&#x1F464; Profile</a></td></tr>
                                <tr className='menu'><td className='text-[black]'><a href='#'><span className=''>&#x1F6D2;</span> Cart</a></td></tr>
                                <tr className='menu'><td className='text-[black] flex'><img src="./location.png" alt="location-icon" className='location-icon w-[30px] h-[30px]' />Find Us</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <Link to={'cart'} className='text-[32px]'>&#x1F6D2;
                    </Link>
                </div>
            </div>

            <div className='mr-0 flex gap-2 select-none cursor-pointer '>
                <div className='category-container select-none cursor-pointer bg-[#073b77] text-white p-1 rounded-md' onClick={() => { setCategoryOpen(!categoryOpen) }}>Categories
                </div>
                <button onClick={() => { setMenuOpen(!menuOpen) }} className='pl-3 pr-3 block md:hidden'>&#x2630;</button>
            </div>

            <table className={`select-none ${menuOpen ? 'block' : 'hidden'} z-50 absolute top-[90px] right-0 bg-[#7caaf9ac] w-fit h-fit overflow-hidden menus cursor-pointer`}>
                <tbody>
                    <tr className='menu'><td className='text-[black]'><a href='#'>&#x1F464; Profile</a></td></tr>
                    <tr className='menu'><td className='text-[black]'><a href='#'><span className=''>&#x1F6D2;</span> Cart</a></td></tr>
                    <tr className='menu'><td className='text-[black] flex'><img src="./location.png" alt="location-icon" className='location-icon w-[30px] h-[30px]' />Find Us</td></tr>
                </tbody>
            </table>
            <table className={`select-none ${categoryOpen ? 'block' : 'hidden'} z-50 category absolute top-[90px] right-0 bg-[#7caaf9ac] h-fit w-fit overflow-hidden cursor-pointer `}>
                <tbody>
                    <tr className='menu'><td className='text-[black]'><a href='#'>Helmets</a></td></tr>
                    <tr className='menu'><td className='text-[black]'><a href='#'>Riding Gear</a></td></tr>
                    <tr className='menu'><td className='text-[black] flex'>Accessories</td></tr>
                    <tr className='menu'><td className='text-[black] flex'>Parts</td></tr>
                    <tr className='menu'><td className='text-[black] flex'>Tires</td></tr>
                    <tr className='menu'><td className='text-[black] flex'>NetWorking & Connectivities</td></tr>
                </tbody>
            </table>
        </div>
    );
};

export default Navbar;