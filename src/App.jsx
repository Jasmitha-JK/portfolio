import "./App.scss";
import Jas from "./components/jas/Jas";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Test from "./Test";
const App = () => {
	return (
		<div>
			<section id="Homepage">
				<Navbar />
				<Jas />
			</section>
			<section id="Services">
				<Parallax type="services" />
			</section>
			<section>
				<Services />
			</section>
			<section id="Portfolio">
				<Parallax type="portfolio" />
			</section>
			<Portfolio />
			<section id="Contact">
				<Contact />
			</section>

			{/* <Test/> */}
		</div>
	);
};
export default App;
