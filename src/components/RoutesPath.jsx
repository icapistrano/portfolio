import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { ScoopEndEffectorPage } from "./projects/ScoopEndEffectorPage";
import { LabviewRobotSimulatorPage } from "./projects/LabviewRobotSimulatorPage";
import { RobotPenDraws } from "./projects/RobotPenDraws";
import { WaamPrintingPage } from "./projects/WaamPrintingPage";
import { PixelArtPage } from "./projects/PixelArtPage";
import { RobotAirHockeyPage } from "./projects/RobotAirHockeyPage"
import { InteractiveShuffleboardPage } from "./projects/InteractiveShuffleboardPage"

import { LandingPage } from "./LandingPage";
import { ProjectsPage } from "./ProjectsPage";

import { useTransition, animated } from 'react-spring';


export const RoutesPath = () => {
    const { pathname } = useLocation()
	const transitions = useTransition(pathname, {
        from:{opacity:0, transform: 'scale(1.1)'},
        enter:{opacity:1, transform: 'scale(1)'},
        leave:{opacity:0, transform: 'scale(0.9)', display:'none'},
        config:{duration:500}
    })

    return transitions((props, item) => (
        <animated.div style={props}>
          <Routes location={item}>
                <Route exact path="/" element={<LandingPage/>}></Route>
                <Route exact path="/projects" element={<ProjectsPage/>}></Route>
                <Route exact path="/projects/interactive-shuffleboard" element={<InteractiveShuffleboardPage/>}></Route>
                <Route exact path="/projects/image-to-pixel-art" element={<PixelArtPage/>}></Route>
                <Route exact path="/projects/robot-air-hockey" element={<RobotAirHockeyPage/>}></Route>
                <Route exact path="/projects/scoop-end-effector" element={<ScoopEndEffectorPage/>}></Route>
                <Route exact path="/projects/labview-robot-simulator" element={<LabviewRobotSimulatorPage/>}></Route>
                <Route exact path="/projects/robot-draws-with-pen" element={<RobotPenDraws/>}></Route>
                <Route exact path="/projects/waam-printing" element={<WaamPrintingPage/>}></Route>
          </Routes>
        </animated.div>
      ))
}
