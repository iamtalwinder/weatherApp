import React, { useState } from "react";
import Search from "./components/search/Search";
import "./App.css";

function App() {
	let [data, setData] = useState({});
	let [loading, setLoading] = useState(false);

	return (
		<div className="container">
			<Search setData={setData} loading={loading} setLoading={setLoading} />
			<div style={{ width: "100%" }}></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
		</div>
	);
}

export default App;
