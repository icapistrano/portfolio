import React, { useRef, useState, useEffect } from 'react';
import waveImg from '../assets/wave.png'
import { PageLink } from './PageLink';

import dp0Img from "../assets/dp-0.png"
import dp1Img from "../assets/dp-1.png"
import dp2Img from "../assets/dp-2.png"
import dp3Img from "../assets/dp-3.png"
import dp4Img from "../assets/dp-4.png"
import dp5Img from "../assets/dp-5.png"
import dp6Img from "../assets/dp-6.png"
import dp7Img from "../assets/dp-7.png"
import dp8Img from "../assets/dp-8.png"
import dp9Img from "../assets/dp-9.png"
import dp10Img from "../assets/dp-10.png"
import dp11Img from "../assets/dp-11.png"

export const IntroductionSection = () => {
    const waveImgRef = useRef(null);
    const pieBorder = useRef(null);

    const [imgIndex, setImgIndex] = useState(0);
    const [dps, _] = useState([dp0Img, dp1Img, dp2Img, dp3Img, dp4Img, dp5Img, dp6Img, dp7Img, dp8Img, dp9Img, dp10Img, dp11Img])

    useEffect(() => {
        pieBorder.current.style.transform = `rotate(${imgIndex * 30}deg)`;
        setTimeout(() => {
            const index = (imgIndex < dps.length - 1) ? imgIndex + 1 : 0;
            setImgIndex(index);
        }, 1000);
    }, [imgIndex])


    return (
        <div>

            <div id="landing-page" className='page'>
                <div className='inner-container'>
                    <div id='dp-container'>
                        <img src={dps[imgIndex]} alt="pixelated gif" id='dp'/>
                        <div id="dp-pie" ref={pieBorder}></div>
                    </div>


                    <div id='landing-page-intro'>
                        <h1>Hey
                            <span><img id="wave" ref={waveImgRef} src={waveImg} alt="a waving emoji"/></span>
                        </h1>            
                        <p className='margin-btm-10'>I’m Immanuel - a software developer and tech enthusiast that enjoys building things with code.</p>
                        <p className='margin-btm-10'>Currently based in Kent, England creating social games and interactive experiences with a camera.</p>
                        <p className='margin-btm-10'>Interested in camera filters, web development and computer graphics.</p>
                   
                        <h4>
                            Find out more from my
                            <PageLink url="https://drive.google.com/file/d/1hXImpzd1Hmwzdkdl9hGjtSmBh2dMmb2o/view?usp=sharing" text={'resume'} externalLink={true}></PageLink>
                            .
                        </h4>
                    </div>
                </div>
            </div>


            

        </div>
    )
}
