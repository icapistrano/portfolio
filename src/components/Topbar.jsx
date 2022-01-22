import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


export const Topbar = () => {
    const { pathname } = useLocation();
    const [windowWidth, setWindowWidth] = useState(false);

    const homeUrl = "/";
    const projectsUrl = "/projects"

    const scrollToSection = (topOffset, path) => {

        if (path === pathname) {
            window.scrollTo({
                top: topOffset,
                left: 0,
                behavior: "smooth"
            })
        }
    }

    window.addEventListener('resize', () => {
        window.innerWidth < 500 ? setWindowWidth(true) : setWindowWidth(false);
    });

    return (
        <div id='topbar'>

            <ul id="topbar-inner-container">
                <li>
                    <div>
                        <Link to="/"  className="text-link"> 
                            <h3 id="logo" onClick={() => scrollToSection(0, homeUrl)}>
                                {windowWidth ? 'icapistrano' : 'Immanuel Capistrano'}
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
