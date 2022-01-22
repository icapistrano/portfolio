import React from 'react'

export const ContactLink = ({imgSrc, urlLink}) => {
    return (
        <div className='contact-link-container'>
            <a href={urlLink} target="_blank" rel="noopener noreferrer">
                <img src={imgSrc} />
            </a>
        </div>
    )
}
