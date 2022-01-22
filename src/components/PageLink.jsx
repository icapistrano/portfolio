import React from 'react'
import { Link } from 'react-router-dom'

export const PageLink = ({url, text, externalLink=false}) => {
    return (
        <>
            { (externalLink) ?
                <a href={url} className='page-link-container'>
                    <h5>{text}</h5>
                    <span className='page-link-line'></span>
                </a>
            :
                <Link to={url} className='page-link-container'>  
                    <h5>{text}</h5>
                    <span className='page-link-line'></span>
                </Link>
            }
        </>
    )
}
