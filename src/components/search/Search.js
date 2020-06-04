import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

const Search = (props) => {
	let [text, changeText] = useState("");

	let { setData, setLoading, loading } = props;

	useEffect(() => {
		const id = setInterval(() => {
			if (loading) {
				axios
					.get(
						`http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=52764d28783ae26fe0c6cf3f6b6ae6fc`
					)
					.then((response) => {
						console.log(response);
						setData(response.data);
					})
					.catch((error) => {
						setData(error);
					});
				setLoading(false);
			}
			clearInterval(id);
		}, 3000);
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
