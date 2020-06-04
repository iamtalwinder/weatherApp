import React, { useState } from "react";
import Search from "../src/components/search/Search";

import "./App.css";

function App() {
	let [data, setData] = useState({});
	let [loading, setLoading] = useState(false);

	return (
		<div className="container">
			<Search loading={loading} setLoading={setLoading} setData={setData} />

			{data.hasOwnProperty("message") && (
				<div>
					<p>No City Found</p>
				</div>
			)}

			{data.hasOwnProperty("weather") && (
				<div className="data">
					<img
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
						alt="Weather Icon"
					/>
					<p className="temp">{Math.round(data.main.temp - 273.15)}</p>
					<div>
						<span>{data.weather[0].description}</span>
					</div>
				</div>
			)}

			{loading && <p>loading...</p>}
		</div>
	);
}

export default App;
