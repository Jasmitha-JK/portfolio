import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
	return (
		<div className="nav">
			<Sidebar/>
			<div className="wrapper">
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					jasmitha
				</motion.span>
				<div className="social">
					<a href="https://www.instagram.com/">
						<img src="/instagram.png" height={50} alt="" />
					</a>
					<a href="https://www.linkedin.com/in/jasmitha-jk-73b35423a/">
						<img src="/linkedin.png" height={50} alt="" />
					</a>
					<a href="https://github.com/Jasmitha-JK">
						<img src="/github.png" height={50} alt="" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
