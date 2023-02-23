import { Fragment } from "react";
import { Header, Footer, Contacts, Products, Testimonials } from "./components";

export default function App() {
	return (
		<Fragment>
			<Header />
			<Products />
			<Testimonials />
			<Contacts />
			<Footer />
		</Fragment>
	);
}
