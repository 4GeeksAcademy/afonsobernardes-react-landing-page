import React from "react";

//include images into your bundle

import Card from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />

			<div className="container d-flex w-50 pt-5">
				<Jumbotron />
			</div>
			
		</div>
	);
};

export default Home;
