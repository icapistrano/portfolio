import React from 'react'

import labviewRobotImg from "../../assets/projects/labview-robot-sim/thumbnail.png";
import { ProjectThumbnail } from '../ProjectThumbnail'

export const LabvieweRobotSimulatorThumbnail = () => {
    return (
        <div>
            <ProjectThumbnail 
                name={"Robot in labview simulator"}
                summary={"Simulating pick and place with Labview for showcasing FK and IK"}
                img={labviewRobotImg}
                url="labview-robot-simulator">
            </ProjectThumbnail>
        </div>
    )
}
