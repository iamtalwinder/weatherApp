import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

const Search = (props) => {
	let [text, changeText] = useState("");

	let { data, setData, setLoading, loading } = props;

	useEffect(() => {
		const id = setInterval(() => {
			if (loading) {
				axios
					.get(
						`http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=52764d28783ae26fe0c6cf3f6b6ae6fc`
					)
					.then(({ data }) => {
						console.log(data);
						setData({
							error: false,
							data: true,
							locationName: data.name,
							mainWeather: data.weather[0].main,
							pressure: data.main.pressure,
							humidity: data.main.humidity,
							temp: Math.round(((data.main.temp - 273.15) * 9) / 5 + 32),
							tempUnit: "F",
							wind: Math.round(data.wind.speed),
							windUnit: "mph",
							icon: data.weather[0].icon,
						});
					})
					.catch((error) => {
						setData({ error: true });
					});
				setLoading(false);
			}
			clearInterval(id);
		}, 1000);
	}, [loading]);
	return (
		<div className="item searchBar">
			<input
				type="text"
				placeholder="Enter city name"
				value={text}
				onChange={(event) => {
					changeText(event.target.value);
				}}
			/>

			<i
				className="fa fa-search searchButton"
				onClick={() => setLoading(true)}
			/>
		</div>
	);
};

export default Search;
