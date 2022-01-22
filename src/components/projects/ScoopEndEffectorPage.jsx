import React, { useRef } from 'react'
import { Slideshow } from '../Slideshow';
import demo from "../../assets/projects/scoop-end-effector/grey-parrot-ai.mp4";
import demoPosterImg from "../../assets/projects/scoop-end-effector/demo-poster.jpg";
import closedImg from "../../assets/projects/scoop-end-effector/closed-view.JPG";
import explodedImg from "../../assets/projects/scoop-end-effector/exploded-view.JPG";

export const ScoopEndEffectorPage = () => {
    const slide1 = useRef(demo);

    return (
        <div>
            <div className='project-page page'>
                <div className='inner-container'>
                    <h2 className='margin-btm-10'>Scoop end-effector</h2>
                    <p className='margin-btm-30'>
                        I designed and 3D printed a UR10 robot end-effector using Solidworks for Grey Parrot AI's
                        marketing video of their automated waste management system.
                    </p>

                    <Slideshow
                        elements={[   
                                <video src={demo} controls muted poster={demoPosterImg}></video>,
                                <img src={closedImg} alt="3d rendering of scoop end effector" ref={slide1}/>,
                                <img src={explodedImg} alt="3d rendering of scoop end effector in collapsed view" />
                            ]}
                    ></Slideshow>
                </div>
            </div>
        </div>
    )
}
