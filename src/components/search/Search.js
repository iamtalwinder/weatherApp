import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

const Search = (props) => {
	let [text, changeText] = useState("");

	let { setData, setLoading, loading } = props;

	useEffect(() => {
		if (loading) {
			axios
				.get(
					`http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=52764d28783ae26fe0c6cf3f6b6ae6fc`
				)
				.then((response) => {
					setData(response.data);
				})
				.catch((error) => {
					setData(error);
				});
			setLoading(false);
		}
	}, [loading]);
	return (
		<div className="item searchBox">
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
