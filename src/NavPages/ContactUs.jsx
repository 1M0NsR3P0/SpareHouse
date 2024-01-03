import React from 'react';
import Location from './Location';

const ContactUs = () => {
    return (
        <div>
            <Location />
            <div className='font-semibold flex gap-10'>
                <h1>Adress: Khagrachari Road, Zhankar, Nazirhat, Fatikchaari, Chittagong, Bangladesh. <br /> Co-Ordinate: (22.636646, 91.798693)</h1>
                <span className='flex flex-col'>
                    Phone: 01862701997, 01628399124
                    <span>Closed: Every Friday</span>
                </span>

            </div>
        </div>
    );
};

export default ContactUs;