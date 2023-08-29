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
						<Card text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Aliquet lectus proin nibh nisl condimentum id venenatis a."} imageURL={"https://picsum.photos/500/400"}/>
					</div>

					<div className="col-sm-12 col-md-3 mt-2">
						<Card text={"In est ante in nibh mauris. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Malesuada fames ac turpis egestas. Eget felis eget nunc lobortis mattis aliquam faucibus. Dui id ornare arcu odio ut sem nulla pharetra."} imageURL={"https://picsum.photos/500/400"}/>
					</div>

					<div className="col-sm-12 col-md-3 mt-2">
						<Card text={"Turpis nunc eget lorem dolor sed viverra. Nullam ac tortor vitae purus faucibus ornare suspendisse. Quam pellentesque nec nam aliquam. Augue ut lectus arcu bibendum at varius. Dignissim sodales ut eu sem integer vitae justo eget magna."} imageURL={"https://picsum.photos/500/400"}/>
					</div>

					<div className="col-sm-12 col-md-3 mt-2">
						<Card text={"Consequat id porta nibh venenatis cras sed felis eget. Egestas erat imperdiet sed euismod. Nunc sed id semper risus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc."} imageURL={"https://picsum.photos/500/400"}/>
					</div>
				</div>
			</div>
			
		</div>
	);
};

export default Home;
