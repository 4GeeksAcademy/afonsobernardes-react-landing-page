import React from "react";

//include images into your bundle

import Card from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0 mb-2">
			<Navbar />

			<div className="container d-flex w-60 pt-5">
				<Jumbotron />
			</div>

			<div className="container d-flex w-60 pt-5">
				<div className="row d-flex justify-content-between">
					<div className="col-sm-12 col-md-3 mt-2">
						<Card />
					</div>

					<div className="col-sm-12 col-md-3 mt-2">
						<Card />
					</div>

					<div className="col-sm-12 col-md-3 mt-2">
						<Card />
					</div>

					<div className="col-sm-12 col-md-3 mt-2">
						<Card />
					</div>
				</div>
			</div>
			
		</div>
	);
};

export default Home;
