import React, { useState } from 'react';

import { useTransition, animated } from 'react-spring';

export const Slideshow = ({ elements }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const plusSlides = (move) => {
        let newslideIndex = slideIndex + move;

        if (newslideIndex >= elements.length) {
            newslideIndex = 0;

        } else if (newslideIndex < 0) {
            newslideIndex = elements.length - 1;
        }
        setSlideIndex(newslideIndex);
    }

    const goDirectSlide = (move) => {
        setSlideIndex(move);
    }

    const transition = useTransition(slideIndex, {
        from:{opacity:0, transform: 'scale(2)', position:'relative', height:'fit-content'},
        enter:{opacity:1, transform: 'scale(1)'},
        leave:{opacity:0, position:'absolute'},
    })

    return (
        <div>
            <div className='slideshow-container margin-btm-10'>

                {transition((style, index) => 
                    <animated.div style={style}>
                        {elements[index]}
                    </animated.div>
                )}

                <div className='arrow-container left-arrow-container' onClick={() => plusSlides(-1)}>
                    <a className="prev slideshow-arrow" href=''>&#10508;</a>
                </div>

                <div className='arrow-container right-arrow-container' onClick={() => plusSlides(1)}>
                    <a className="prev slideshow-arrow" href=''>&#10509;</a>
                </div>
            </div>
            <div className='slideshow-slide-indicator-container margin-btm-30'>
                <div>
                    {
                        elements.map((e, i) => 
                            <div 
                                key={i} 
                                className={`slideshow-slide-indicator  + ${i === slideIndex ? 'on-slide-indicator' : 'off-slide-indicator'}`}
                                onClick={() => goDirectSlide(i)}>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>

    )
}
