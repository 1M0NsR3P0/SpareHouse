import React, { useEffect, useState } from 'react';
import './loading.css'
const Loading = () => {

    return (
        <div className='h-[100vh] w-[100vw] bg-[#d5c8c83c] flex justify-center items-center z-[100] absolute top-0'>
            <div className='h-[100vh] w-[100vw] bg-transparent flex justify-center items-center'>
                <div className="container">
                    <span className="one">
                        <span className="round"></span>
                    </span>
                    <span id='spinnerLoader'></span>
                </div>
            </div>
        </div>
    );
};

export default Loading;