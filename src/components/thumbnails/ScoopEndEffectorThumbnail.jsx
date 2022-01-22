import React from 'react'

import scoopEndEffectorImg from "../../assets/projects/scoop-end-effector/thumbnail.png";
import { ProjectThumbnail } from '../ProjectThumbnail'

export const ScoopEndEffectorThumbnail = () => {
    return (
        <div>
            <ProjectThumbnail 
                name={"Scoop end-effector"}
                summary={"3D printing a UR10 robot end-effector for start up video"}
                img={scoopEndEffectorImg}
                url="scoop-end-effector">
            </ProjectThumbnail>
        </div>
    )
}
