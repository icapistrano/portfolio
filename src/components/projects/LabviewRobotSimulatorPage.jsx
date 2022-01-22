import React from 'react';
import demo from "../../assets/projects/labview-robot-sim/demo.mp4";

export const LabviewRobotSimulatorPage = () => {
    return (
        <div>
            <div className='project-page page'>
                <div className='inner-container'>
                    <h2 className='margin-btm-10'>Labview simulation</h2>
                    <p className='margin-btm-30'>
                        As part of my university module, I modelled a robot manipulator in Labiew for showcasing forward 
                        and inverse kinematics by having the robot to move at specific point in space and simulate pick 
                        and place movement.
                    </p>

                    <div className='slideshow-container'>
                        <video src={demo} controls muted></video>
                    </div>
                </div>
            </div>
        </div>
    )
}
