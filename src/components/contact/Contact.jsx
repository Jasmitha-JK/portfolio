import { useRef, useState } from "react";
import "./contact.scss";
import { animate, motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

const variants = {
	initial: {
		y: 500,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		},
	},
};

const Contact = () => {
	const ref = useRef();

	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_czwpooc", "template_icatrdg", ref.current, {
				publicKey: "lHBQHoxvsurLsuAmJ",
			})
			.then(
				() => {
					setSuccess(true);
				},
				(error) => {
                    console.log('FAILED...', error.text);
					setError(true);
				}
			);
	};
	return (
		<motion.div
			className="contact"
			variants={variants}
			initial="initial"
			whileInView="animate"
		>
			<motion.div className="textContainer" variants={variants}>
				<motion.h1 variants={variants}> wanna work together ? 🐋</motion.h1>
				<motion.div className="item" variants={variants}>
					<h2>Mail</h2>
					<span>jashjk82@gmail.com</span>
				</motion.div>
				<motion.div className="item" variants={variants}>
					<h2>Address</h2>
					<span>Bangalore, India</span>
				</motion.div>
				<motion.div className="item" variants={variants}>
					<h2>Phone</h2>
					<span>8073422691</span>
				</motion.div>
			</motion.div>
			{/* <div className="formContainer">
				<form ref={ref} onSubmit={sendEmail}>
					<input type="text" required placeholder="Name" name="name"/>
					<input type="email" required placeholder="E-mail" name="email"/>
					<textarea rows={8} placeholder="message" name="message"/>
					<button>Submit</button>
					{error &&  "Error"}
					{success &&  "Success"}

				</form>
			</div> */}
		</motion.div>
	);
};

export default Contact;
