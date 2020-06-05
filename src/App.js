import React, { useState } from "react";
import Search from "./components/search/Search";
import Loader from "./components/loader/Loader";
import Temp from "./components/temp/Temp";
import "./App.css";

function App() {
	let [data, setData] = useState({
		error: false,
		data: false,
		locationName: "",
		mainWeather: "",
		pressure: 0,
		humidity: 0,
		temp: 0,
		tempUnit: "",
		wind: 0,
		windUnit: "",
		icon: "",
	});
	let [loading, setLoading] = useState(false);

	return (
		<React.Fragment>
			<div className="container">
				<Search
					data={data}
					setData={setData}
					loading={loading}
					setLoading={setLoading}
				/>
				<div style={{ width: "100%" }}></div>
				<div className="error">{data.error && "Enter a valid city name"}</div>

				{data.data && (
					<div className="data">
						<div className="box1">
							<img
								src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
								alt="Weather Icon"
							/>
						</div>
						<div className="box2">
							<span className="cityName">{data.locationName}</span>
							<br />
							<span className="extraInfo">{data.mainWeather}</span>
						</div>
						<div style={{ width: "100%" }} />
						<div className="box3">
							<Temp data={data} setData={setData} />
						</div>
						<div className="box4">
							<span className="extraInfo">Pressure: {data.pressure}</span>
							<br />
							<span className="extraInfo">Humidity: {data.humidity}%</span>
							<br />
							<span className="extraInfo">
								Wind: {data.wind + " " + data.windUnit}
							</span>
						</div>
					</div>
				)}
			</div>
			{loading && <Loader />}
		</React.Fragment>
	);
}

export default App;
