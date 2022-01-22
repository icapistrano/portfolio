import React from 'react';
import { Slideshow } from '../Slideshow';

import planetOdysseyVid from "../../assets/projects/interactive-shuffleboard/planet-odyssey.mp4";
import towerStackVid from "../../assets/projects/interactive-shuffleboard/towerstack.mp4";
import fieldRaidVid from "../../assets/projects/interactive-shuffleboard/fieldraid.mp4";

import planetOdysseyPoster from "../../assets/projects/interactive-shuffleboard/planet-odyssey-poster.jpg";
import towerStackPoster from "../../assets/projects/interactive-shuffleboard/towerstack-poster.jpg";
import fieldRaidPoster from "../../assets/projects/interactive-shuffleboard/fieldraid-poster.jpg";

 

export const InteractiveShuffleboardPage = () => {
    return (
        <div>
            <div className='project-page page'>
                <div className='inner-container'>
                    <h2 className='margin-btm-10'>Interactive Shuffleboard</h2>
                    <p className='margin-btm-10'>
                        A futuristic version of traditional shuffleboard with real-time puck detection, automated scoring and 
                        animations to provide an interactive experience and expand game logic.
                    </p>
                    <p className='margin-btm-30'>
                        The software is built on Electron with the front end written in vanilla Javascript and Three.js for
                        the fancy 3D animations. OpenCV python is used to detect and localise pucks using a single camera.
                    </p>

                    <Slideshow
                        elements={[   
                                <video src={planetOdysseyVid} controls muted poster={planetOdysseyPoster}></video>,
                                <video src={towerStackVid} controls muted poster={towerStackPoster}></video>,
                                <video src={fieldRaidVid}  controls muted poster={fieldRaidPoster}></video>
                            ]}
                    ></Slideshow>
                </div>
            </div>
        </div>
    )
}
