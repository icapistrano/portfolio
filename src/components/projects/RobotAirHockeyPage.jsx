import React from 'react'
import demo from "../../assets/projects/air-hockey-robot/demo.mp4"

import { QuickLinks } from '../QuickLinks'

export const RobotAirHockeyPage = () => {
    return (
        <div>
            <div className='project-page page'>
                <div className='inner-container'>
                    <h2 className='margin-btm-10'>Robot plays air hockey</h2>
                    <p className='margin-btm-10'>
                        As a final year project at Middlesex University, I developed an autonomous air hockey 
                        system with a robot for playing against a human player.
                    </p>

                    <p className='margin-btm-30'>
                        This project consisted of computer vision for detecting pucks in real-time, linear
                        regression for predicting puck locations and ROS packages like MoveIt! for motion
                        control and ROS-Industrial for programming an industrial robot with Python.
                    </p>

                    <div className='slideshow-container margin-btm-30'>
                        <video src={demo} controls muted></video>
                    </div>
            
                    <QuickLinks
                        links={[
                            {url:"https://github.com/icapistrano/airhockey_with_ABB", text:"check out repo"},
                            {url:"https://icapistrano97.blogspot.com/", text:"view project blog"},

                        ]}
                    ></QuickLinks>
                </div>
            </div>
        </div>
    )
}

