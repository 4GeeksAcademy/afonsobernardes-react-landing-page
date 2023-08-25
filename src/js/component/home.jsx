import React from "react";

//include images into your bundle

import Card from "./card";
import Navbar from "./navbar";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar/>
		</div>
	);
};

export default Home;
