import React from 'react'

import waamPrintingImg from "../../assets/projects/waam-printing/thumbnail.png";
import { ProjectThumbnail } from '../ProjectThumbnail';


export const WaamPrintingThumbnail = () => {
    return (
        <div>
             <ProjectThumbnail 
                name={"Robot 3D prints in metal"}
                summary={"3D printing geometries using WAAM technology with an ABB robot"}
                img={waamPrintingImg}
                url="waam-printing">
            </ProjectThumbnail>
        </div>
    )
}
