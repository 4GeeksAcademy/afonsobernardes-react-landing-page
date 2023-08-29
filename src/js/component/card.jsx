import React from "react";

const Card = ( {text, imageURL} ) => {
	return (
		<div className="card h-100">
			<img src={imageURL} className="card-img-top img-fluid" alt="..."/>
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{text}</p>                
            </div>

            <div class="card-footer bg-light text-center">
                  <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
		</div>
	);
};

export default Card;