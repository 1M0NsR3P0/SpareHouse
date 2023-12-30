import React from 'react';
import { Parallax } from 'react-parallax';


const Recommended = () => {
    const image1 = "loveBikes.png"
    
    return (
        <div className='h-[50vh] rounded-[10px] w-full mt-10 text-center flex justify-center items-center'>
            <Parallax
                    className='rounded-[10px] h-[50vh] w-[85vw]'
                    bgImage={image1} strength={1000}>
                    <div>
                        <div >Recommended for you</div>
                    </div>
                </Parallax>
        </div>
    );
};

export default Recommended;