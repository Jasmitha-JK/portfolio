import React from "react";
import "./jas.scss";
import { motion, animate } from "framer-motion";
import Services from "../services/Services";
import Contact from "../contact/Contact";
const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const sliderVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: "-550%",
		transition: {
			repeat: Infinity,
            repeatType:"loop",
			duration: 20,
		},
	},
};

const Jas = () => {
	return (
		<div className="jas">
			<div className="wrapper">
				<motion.div
					className="textContainer"
					variants={textVariants}
					initial="initial"
					animate="animate"
				>
					<motion.h2 variants={textVariants}>JASMITHA JK</motion.h2>
					<motion.h1 variants={textVariants}>
						Aspiring Software Engineer and UI/UX Designer
					</motion.h1>
					<motion.div variants={textVariants} className="buttons">
						<motion.button variants={textVariants} className="custom" onClick={Services}>
							Scroll down to see my latest works :)
						</motion.button>
						<motion.button variants={textVariants} onClick={Contact}>
							Contact me ^ ^
						</motion.button>
					</motion.div>
				</motion.div>
			</div>
			<motion.div
				className="slidingTextContainer"
				variants={sliderVariants}
				initial="initial"
				animate="animate"
			>
				Motivated Designer and looking forward to improve my skills :)
			</motion.div>
			<div className="imageContainer">
				<img src="/jashjk.png" height="700vh" alt="" />
			</div>
		</div>
	);
};

export default Jas;
