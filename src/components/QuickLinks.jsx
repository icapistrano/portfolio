import React from 'react'
import { ButtonLink } from './ButtonLink'

export const QuickLinks = ({links}) => {
    return (
        <div>
            {
                links.map((item, i) => 
                <div key={i} className='margin-btm-10'>
                    <ButtonLink external={true} url={item.url} text={item.text}></ButtonLink>
                </div>
                )
            }
        </div>
    )
}
