import React, { useState } from "react";

import "./App.css";

function App() {
	let [data, setData] = useState({});
	let [loading, setLoading] = useState(false);

	return (
		<div className="container">
			<div className="item searchBar">
				<input type="text"></input>
				<i
					className="fa fa-search searchButton"
					onClick={() => alert("hello")}
				/>
			</div>
			<div style={{ width: "100%" }}></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
		</div>
	);
}

export default App;
