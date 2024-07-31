import "./services.scss";
import { motion, stagger, inView } from "framer-motion";

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const Services = () => {
	return (
		<motion.div
			className="services"
			variants={variants}
			initial="initial"
			whileInView="animate"
		>
			<motion.div className="titleContainer" variants={variants}>
				<div className="title">
					<h1>
						<motion.b whileHover={{ color: "#2F795C" }}> Creative</motion.b>{" "}
						Ideas that your
					</h1>
				</div>

				<div className="title">
					<h1>
						 company 
						<motion.b whileHover={{ color: "#2F795C" }}> needs.</motion.b>
					</h1>
					{/* <button>STUFF I DO</button> */}
				</div>
			</motion.div>
			<motion.div className="listContainer" variants={variants}>
				<motion.div
					className="box"
					whileHover={{ background: "lightgray", color: "black" }}
				>
					<h2>Software Engineer</h2>
					<p>Possessing a strong foundation in computer science and programming, I excel in designing, developing, and testing robust applications. With problem-solving skills and a commitment to delivering high-quality code.</p>
					<button >Go</button>
				</motion.div>
				<motion.div
					className="box"
					whileHover={{ background: "lightgray", color: "black" }}
				>
					<h2>UI/UX development</h2>
					<p>intuitive and visually appealing digital products and services. understanding user needs, behaviors, and motivations to design interfaces that are both functional and enjoyable.</p>
					<button>Go</button>
				</motion.div>

				<motion.div
					className="box"
					whileHover={{ background: "lightgray", color: "black" }}
				>
					<h2>Front End developer</h2>
					<p>With a deep understanding of HTML, CSS, and JavaScript, and react framework, create intuitive interfaces that are visually appealing, responsive, and performant across various devices</p>
					<button>Go</button>
				</motion.div>


				<motion.div
					className="box"
					whileHover={{ background: "lightgray", color: "black" }}
				>
					<h2>ML Enthusiast</h2>
					<p>A passionate advocate for the potential of machine learning, constantly exploring cutting-edge algorithms and techniques.  I am driven to uncover hidden patterns and build intelligent systems.</p>
					<button>Go</button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Services;
