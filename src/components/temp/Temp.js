import React, { useEffect } from "react";
import "./Temp.css";

const Temp = (props) => {
	useEffect(() => {
		if (props.data.tempUnit === "C") {
			document.getElementById("celsius").style.color = "blue";
		} else {
			document.getElementById("fahrenheit").style.color = "blue";
		}
	}, []);
	const convertToCelsius = () => {
		if (props.data.tempUnit === "C") return;
		let newTemp = Math.round(((props.data.temp - 32) * 5) / 9);
		let newWind = Math.round(props.data.wind * 1.60934);

		document.getElementById("celsius").style.color = "blue";
		document.getElementById("fahrenheit").style.color = "#878787";
		props.setData({
			...props.data,
			temp: newTemp,
			tempUnit: "C",
			wind: newWind,
			windUnit: "km/h",
		});
	};

	const convertToFahrenheit = () => {
		if (props.data.tempUnit === "F") return;
		let newTemp = Math.round((props.data.temp * 9) / 5 + 32);
		let newWind = Math.round(props.data.wind / 1.60934);

		document.getElementById("fahrenheit").style.color = "blue";
		document.getElementById("celsius").style.color = "#878787";
		props.setData({
			...props.data,
			temp: newTemp,
			tempUnit: "F",
			wind: newWind,
			windUnit: "mph",
		});
	};

	return (
		<p className="temp">
			{props.data.temp}
			<sup>
				<span id="celsius" onClick={convertToCelsius}>
					<sup> o</sup>C{" "}
				</span>
				<span className="divider">|</span>
				<span id="fahrenheit" onClick={convertToFahrenheit}>
					<sup> o</sup>F{" "}
				</span>
			</sup>
		</p>
	);
};

export default Temp;
