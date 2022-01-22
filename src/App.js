import "./app.css"

import React from "react";
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import { Topbar } from "./components/Topbar";
import { ContactSection } from "./components/ContactSection";
import { RoutesPath }  from './components/RoutesPath'

function App() {
	return (
		<BrowserRouter >
			<ScrollToTop/>
			<div className="app">
				<Topbar ></Topbar>

				<RoutesPath></RoutesPath>
				
				<ContactSection></ContactSection>
			</div>
		</BrowserRouter>
  );
}

export default App;
