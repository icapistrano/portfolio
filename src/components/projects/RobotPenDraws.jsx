import React from 'react'

import flower04Img from "../../assets/projects/robot-pen-draws/flower04.png"
import flower04Vid from "../../assets/projects/robot-pen-draws/flower04.mp4"
import flower04Poster from "../../assets/projects/robot-pen-draws/flower04-poster.jpg"

import flower0875Img from "../../assets/projects/robot-pen-draws/flower0875.png"
import flower0875Vid from "../../assets/projects/robot-pen-draws/flower0875.mp4"
import flower0875Poster from "../../assets/projects/robot-pen-draws/flower0875-poster.jpg"

import { Slideshow } from '../Slideshow';
import { QuickLinks } from '../QuickLinks'


export const RobotPenDraws = () => {
    return (
        <div>
            <div className='project-page page'>
                <div className='inner-container'>
                    <h2 className='margin-btm-10'>Robot draws with pen</h2>
                    <p className='margin-btm-30'>
                        As part of my university module, I programmed an ABB robot to write letters
                        by manually jogging the robot into positions for forward kinematics and implemented 
                        an algorithm to draw flower patterns in polar
                        coordinates for inverse kinematics.
                    </p>

                    <Slideshow
                        elements={
                            [   
                                <video src={flower04Vid} controls muted poster={flower04Poster}></video>,
                                <img src={flower04Img} alt="flower drawn by robot" />,
                                <video src={flower0875Vid} controls muted poster={flower0875Poster}></video>,
                                <img src={flower0875Img} alt="flower drawn by robot" />
                            ]
                        }
                    ></Slideshow>

                    <QuickLinks
                        links={[
                            {url:"https://www.youtube.com/watch?v=tV435rW81Bs&t=105s", text:"watch full video"}
                        ]}
                    ></QuickLinks>
                </div>
            </div>
        </div>
    )
}
