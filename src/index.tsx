import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<div className="app-wrapper">
			<Header/>
			<Main/>
			<Footer/>
		</div>
	</React.StrictMode>
);