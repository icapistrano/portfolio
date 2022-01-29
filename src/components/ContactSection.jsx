import React from 'react'
import PeaceImg from "../assets/peace.png";

export const ContactSection = () => {
    return (
        <div id="contact-section" className='page'>
            <div className='inner-container top-border'>
                <h3 className="margin-btm-20">Come say hello via email or reach out on social media<span><img id="peace-img" src={PeaceImg} alt="" /></span></h3>
                
                <div className='social-icon-container'>
                    <a href="mailto:icapistrano97@outlook.com">
                        <i className="fa fa-regular fa-envelope" aria-hidden="true"></i>
                    </a>
                    <a href="https://github.com/icapistrano">
                        <i className="fa fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/icapistrano97">
                        <i className="fa fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/icapistrano_/">
                        <i className="fa fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
