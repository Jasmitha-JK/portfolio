import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
	{
		id: 1,
		title: " Visual Code Analyser",
		img: "./vca.png",
		desc: "Visualizes python code structure using PLY to parse code into building blocks and D3.js to create interactive visualizations to understand code logic.",
	},
	{
		id: 2,
		title: "Tour booking app",
		img: "./tour.png",
		desc: " Using React js framework, built a simple web app which can book your tickets. Pretty simple but only the frontend is complete",
	},
	{
		id: 3,
		title: "Neural network from scratch",
		img: "./dr.png",
		desc: "Without using existing frameworks like Tensorflow, used Numpy and Pandas core libraries for constructing handwritten digit recognition.",
	},
	{
		id: 4,
		title: "Disaster relief webapp",
		img: "",
		desc: "collects information like flood maps from satellites and uses smarts like image recognition to figure out where help is most needed. Then, it suggests how to send resources efficiently.",
	},
	{
		id: 5,
		title: "a tribute to my beloved",
		img: "./",
		desc: "in progress of making an app that represents Balaji and his values. Everyone should know him",
	},
	{
		id: 6,
		title: "Music app",
		img: "",
		desc: "bro fucking leave me alone and give me enough time to cook.",
	},
	{
		id: 7,
		title: "flutter based app",
		img: "",
		desc: "collects information like flood maps from satellites and uses smarts like image recognition to figure out where help is most needed. Then, it suggests how to send resources efficiently.",
	},
];

const Single = ({ item }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		// offset: ["start start", "end start"],
		
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
	return (
		<section >
			<div className="container">
				<div className="wrapper">
					<div className="imagec" ref={ref}>
						<img src={item.img} alt="" width={719} height={330}/>
					</div>
					<motion.div className="textContainer" style={{y}} >
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						{/* <button>see demo</button> */}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const Portfolio = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});
	return (
		<div className="portfolio" ref={ref}>
			<div className="progress">
				<h1>Featured Works</h1>
				<motion.div style={{ scaleX }} className="progress-bar"></motion.div>
			</div>
			{items.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};

export default Portfolio;
