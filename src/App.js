import React, { useState } from "react";
import Search from "./components/search/Search";
import Loader from "./components/loader/Loader";
import "./App.css";

function App() {
	let [data, setData] = useState({});
	let [loading, setLoading] = useState(false);

	return (
		<React.Fragment>
			<div className="container">
				<Search setData={setData} loading={loading} setLoading={setLoading} />
				<div style={{ width: "100%" }}></div>
				<div className="item">
					{data.hasOwnProperty("message") && data.message}
					{data.hasOwnProperty("weather") && data.weather[0].main}
				</div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
			</div>
			{loading && <Loader />}
		</React.Fragment>
	);
}

export default App;
