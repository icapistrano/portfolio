import React from 'react'

import robotAirHocketImg from "../../assets/projects/air-hockey-robot/thumbnail.png";
import { ProjectThumbnail } from '../ProjectThumbnail'

export const RobotAirHockeyThumbnail = () => {
    return (
        <div>
            <ProjectThumbnail 
                name={"Robot plays air-hockey"}
                summary={"Air-hockey with a robot using puck detection and ROS"}
                img={robotAirHocketImg}
                url="robot-air-hockey">
            </ProjectThumbnail>
        </div>
    )
}
