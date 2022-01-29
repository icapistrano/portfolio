import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


export const Topbar = () => {
    const getIsMobile = () => window.innerWidth < 500;

    const { pathname } = useLocation();
    const [isMobile, setIsMobile] = useState(getIsMobile());

    const homeUrl = "/";
    const projectsUrl = "/projects"

    const scrollToSection = (topOffset, path) => {
        if (path === pathname) {
            window.scrollTo({top: topOffset, left: 0, behavior: "smooth"})
        }
    }

    useEffect(() => {
        const onResize = () => { setIsMobile(getIsMobile()) }

        window.addEventListener('resize', onResize);

        return (() => {
            window.removeEventListener('resize', onResize);
        })
        
    }, [])

    return (
        <div id='topbar'>

            <ul id="topbar-inner-container">
                <li>
                    <div>
                        <Link to="/"  className="text-link"> 
                            <h3 id="logo" onClick={() => scrollToSection(0, homeUrl)}>
                                {isMobile ? 'icapistrano' : 'Immanuel Capistrano'}
                            </h3>
                        </Link>
                    </div>
                </li>

                <li>
                    <div>
                        <Link to="/projects" className="text-link">
                            <h3 onClick={() => scrollToSection(0, projectsUrl)}>Projects</h3>
                        </Link>
                    </div>
                </li>

                <li>
                    <h3 onClick={() => scrollToSection(document.body.scrollHeight, pathname)}>Contact</h3>
                </li>

            </ul>


        </div>
    )
}
