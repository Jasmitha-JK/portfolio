import "./parallax.scss";
import React from "react";

const Parallax = ({ type }) => {
	return (
		<div
			className="parallax"
			style={{
				background:
					type === "services"
						? "linear-gradient(180deg, rgb(21, 21, 21), rgb(9, 24, 23))"
						: "linear-gradient(180deg, rgb(21, 21, 21), rgb(15, 43, 41))",
			}}
		>
			<h1>{type === "services" ? "What I Do" : "What I Did"}</h1>
			<div className="minecraft"></div>
		</div>
	);
};

export default Parallax;
