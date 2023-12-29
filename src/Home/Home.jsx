import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import "./home.css"
import Banner from './Banner';
import Loading from '../Loading';
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import { AuthContext } from '../authoProvider/AuthProvider';




const Home = () => {
    const image1 = "b.png";
    const { mobile } = useContext(AuthContext)

    return (
        !mobile ? <>
            <div id='home' className=''>
                <Parallax
                    className='parallax'
                    bgImage={image1} strength={500}>
                    <div>
                        <div ><Banner /></div>
                    </div>
                </Parallax>
            </div>
        </> :
            <>
            {/* mobile responsive from here */}
                <div>
                    <Banner/>
                </div>
            </>
    );
};

export default Home;