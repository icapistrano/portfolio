import React from 'react';
import pixelatorImg from "../../assets/projects/image-pixel-art/pixelator-webpage.png";
import { QuickLinks } from '../QuickLinks';


export const PixelArtPage = () => {
    return (
        <div>
            <div className='project-page page'>
                <div className='inner-container'>
                    <h2 className='margin-btm-10'>Image to pixel art converter</h2>
                    <p className='margin-btm-30'>
                        Pixelates an image using OpenCV python with k-means clustering for colour quantization.
                    </p>

                    <div className='slideshow-container margin-btm-30'>
                        <img src={pixelatorImg} alt="pixel art project demo"/>
                    </div>

                    <QuickLinks
                        links={[
                            {url:"https://icapistrano.github.io/image-to-pixel-art/", text:"open demo"},
                            {url:"https://github.com/icapistrano/image-to-pixel-art", text:"check out repo"}
                        ]}
                    ></QuickLinks>

                </div>
            </div>
        </div>
    )
}
