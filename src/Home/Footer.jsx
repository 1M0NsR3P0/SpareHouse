import React from 'react';

const Footer = () => {
    return (
        <div className='w-full bg-[#001F3F] py-5 gap-5 flex flex-col md:flex-row items-center justify-evenly text-[#eef5fe] font-[500] text-[1.1rem] font-mono'>
            <div>
                
                <div className='pb-4'>
                    <h1>Payment Methods</h1> <hr />
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <img className='h-[28px] w-[38px] rounded-md' src="mastercard.png" alt="Mastercard" />
                        <img className='h-[28px] w-[38px] rounded-md' src="paypal.png" alt="Paypal" />
                        <img className='h-[28px] w-[38px] rounded-md' src="visa.png" alt="Visa" />
                        <img className='h-[28px] w-[38px] rounded-md' src="bkash.png" alt="Bkash" />
                        <img className='h-[28px] w-[38px] rounded-md' src="nagad.png" alt="Nagad" />
                    </div>
                </div>
            </div>
            <div>
                <div className='text-[white] font-bold text-[1.5rem] mb-2'>
                    <h1>Quick Links</h1> <hr />
                </div>
                <div className='flex items-start justify-between h-[180px] w-[400px]'>
                    <ul className=''>
                        <li><a href="#">Trace Order</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Aboust Us</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Gift Cards</a></li>
                    </ul>
                    <ul>
                    <li><a href="#">Bulk Order</a></li>
                        <li><a href="#">Payment Info</a></li>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Terms Of Services</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;