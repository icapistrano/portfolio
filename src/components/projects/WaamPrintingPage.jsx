import React from 'react'

import steeloImg from "../../assets/projects/waam-printing/steelo.png";
import circleImg from "../../assets/projects/waam-printing/circle.png";
import rectangleImg from "../../assets/projects/waam-printing/rectangle.png";

import { QuickLinks } from '../QuickLinks';
import { Slideshow } from '../Slideshow';

export const WaamPrintingPage = () => {
    return (
        <div>
            <div className='project-page page'>
                <div className='inner-container'>
                    <h2 className='margin-btm-10'>WAAM 3D printing</h2>
                    <p className='margin-btm-30'>
                        During my internship at Steelo, I worked on an R&D project to explore Wire Arc Additive Manufacturing (WAAM) to 
                        3D print geometries in metal using a weld torch and an industrial robot.
                    </p>
                    
                    <Slideshow elements={[   
                                <img src={steeloImg} alt="company name printed in metal"/>,
                                <img src={circleImg} alt="circular geometry printed in metal"/>,
                                <img src={rectangleImg} alt="rectangular geometry printed in metal"/>]}
                    ></Slideshow>

                    <QuickLinks links={[
                            {url:"https://github.com/icapistrano/WAAM_with_ABB", text:"check out repo"}]}
                    ></QuickLinks>
                </div>
            </div>
        </div>
    )
}
