import React, { useContext } from 'react';
import { AuthContext } from '../authoProvider/AuthProvider';

const CategoriesShow = () => {
    const {mobile} = useContext(AuthContext)
    return (
        !mobile?<>
        <div className='flex justify-center items-center mt-10'>
            <div className='grid grid-cols-5 justify-center items-center gap-x-[70px] gap-y-10'>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file4.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Clearance</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file8.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>helmet</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file7.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Riding Gear</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file9.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Accessiries</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file1.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Parts</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file9.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Accessiries</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file1.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Parts</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file6.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Tires</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file2.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Connectivities</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file5.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Outlet: Open Box</h3>
                </div>
            </div>
        </div>
        </div>
        </>
        
        :
        
   
        
        <>
        <div className='flex justify-center items-center mt-10'>
            <div className='grid grid-row-1 justify-center items-center gap-x-[70px] gap-y-10'>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file4.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Clearance</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file8.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>helmet</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file7.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Riding Gear</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file9.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Accessiries</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file1.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Parts</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file9.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Accessiries</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file1.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Parts</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file6.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Tires</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file2.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Connectivities</h3>
                </div>
            </div>
            <div className='w-[200px] h-[150px] bg-balck flex flex-col justify-center items-center text-center bg-[white] text-[16px]'>
                <div className=''>
                    <img src="file5.avif" alt="" />
                </div>
                <div className=' text-[1.2rem] font-bold'>
                    <h3>Outlet: Open Box</h3>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default CategoriesShow;