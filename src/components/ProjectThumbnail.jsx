import React from 'react'
import { ButtonLink } from './ButtonLink'


export const ProjectThumbnail = ({name, summary, img, url}) => {
    return (
        <div className='project-container'>
            <h3 className='margin-btm-10'>{name}</h3>            
            <img src={img} className='project-img margin-btm-10' alt='project thumbnails'></img>
            <p className='margin-btm-10'>
                {summary}
            </p>

            <ButtonLink url={'/projects/' + url} text={'view project'}></ButtonLink>
        </div>
    )
}
