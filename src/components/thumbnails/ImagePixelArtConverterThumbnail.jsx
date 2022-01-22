import React from 'react'

import imagePixelArtImg from "../../assets/projects/image-pixel-art/thumbnail.png";
import { ProjectThumbnail } from '../ProjectThumbnail'


export const ImagePixelArtConverter = () => {
    return (
        <div>
            <ProjectThumbnail 
                name={"Image to pixel art converter"}
                summary={"Convert images into pixel art using colour quantization"}
                img={imagePixelArtImg}
                url="image-to-pixel-art">
            </ProjectThumbnail>
        </div>
    )
}
