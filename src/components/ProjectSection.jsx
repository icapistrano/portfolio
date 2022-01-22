import React from 'react'

import { PageLink } from './PageLink';

import { InteractiveShuffleboardThumbnail } from './thumbnails/InteractiveShuffleboardThumbnail';
import { RobotAirHockeyThumbnail } from './thumbnails/RobotAirHockeyThumbnail';
import { RobotPenDrawsThumbnail } from './thumbnails/RobotPenDrawsThumbnail';

export const ProjectSection = () => {
    const projectsPageUrl = "/projects";

    return (
        <div id='project-section' className="page">
            <div className='inner-container top-border'>
                <h2 className='margin-btm-20'>Featured Projects</h2>
                
                <div className='projects-container margin-btm-30'>
                    <InteractiveShuffleboardThumbnail></InteractiveShuffleboardThumbnail>
                    <RobotAirHockeyThumbnail></RobotAirHockeyThumbnail>
                    <RobotPenDrawsThumbnail></RobotPenDrawsThumbnail>
                </div>


                <h4 className='margin-btm-30'>
                    Check out more on the
                    <PageLink url={projectsPageUrl} text={'Projects'}></PageLink>
                    page
                </h4>

            </div>
        </div>
    )
}
