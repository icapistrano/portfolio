import React from 'react';

import { InteractiveShuffleboardThumbnail } from './thumbnails/InteractiveShuffleboardThumbnail';
import { ImagePixelArtConverter } from './thumbnails/ImagePixelArtConverterThumbnail';
import { WaamPrintingThumbnail } from './thumbnails/WaamPrintingThumbnail';
import { ScoopEndEffectorThumbnail } from './thumbnails/ScoopEndEffectorThumbnail';
import { RobotAirHockeyThumbnail } from './thumbnails/RobotAirHockeyThumbnail';
import { LabvieweRobotSimulatorThumbnail } from './thumbnails/LabvieweRobotSimulatorThumbnail';
import { RobotPenDrawsThumbnail } from './thumbnails/RobotPenDrawsThumbnail';

export const ProjectsPage = () => {
    return (
        <div id="projects-page-section" className='project-page page'>
            <div className='inner-container '>
                <h1 className='margin-btm-30'>Projects throughout my life</h1>

                <div className='projects-container'>
                    <InteractiveShuffleboardThumbnail></InteractiveShuffleboardThumbnail>
                    <ImagePixelArtConverter></ImagePixelArtConverter>
                    <WaamPrintingThumbnail></WaamPrintingThumbnail>
                    <ScoopEndEffectorThumbnail></ScoopEndEffectorThumbnail>
                    <RobotAirHockeyThumbnail></RobotAirHockeyThumbnail>
                    <LabvieweRobotSimulatorThumbnail></LabvieweRobotSimulatorThumbnail>
                    <RobotPenDrawsThumbnail></RobotPenDrawsThumbnail>
                </div>
            </div>
        </div>
    )
}
