import React from 'react'

import interactiveShuffleboardImg from "../../assets/projects/interactive-shuffleboard/thumbnail.png";
import { ProjectThumbnail } from '../ProjectThumbnail';

export const InteractiveShuffleboardThumbnail = () => {
    return (
        <div>
            <ProjectThumbnail
                name={"Interactive Shuffleboard"}
                summary={"Shuffleboard with real-time puck detection and game animation"}
                img={interactiveShuffleboardImg}
                url="interactive-shuffleboard">
            </ProjectThumbnail>
        </div>
    )
}
