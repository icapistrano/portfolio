import React from 'react'

import robotPenDrawsImg from "../../assets/projects/robot-pen-draws/thumbnail.png";
import { ProjectThumbnail } from '../ProjectThumbnail'

export const RobotPenDrawsThumbnail = () => {
    return (
        <div>
            <ProjectThumbnail 
                name={"Robot draws with pen"}
                summary={"Programming robot to write letters and draw flower patterns"}
                img={robotPenDrawsImg}
                url="robot-draws-with-pen">
            </ProjectThumbnail>
        </div>
    )
}
