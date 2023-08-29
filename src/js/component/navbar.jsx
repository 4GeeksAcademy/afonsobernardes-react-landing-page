import React from "react";

const Navbar = () => {
	return (
        <nav className="navbar navbar-expand-lg bg-dark py-3">
            <div className="container d-flex justify-content-between w-60">
                
                <a className="navbar-brand fs-3 text-white" href="#">Start Bootstrap</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-light navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-5">
                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        <a className="nav-link text-white" href="#">About</a>
                        <a className="nav-link text-white" href="#">Services</a>
                        <a className="nav-link text-white" href="#">Contact</a>
                    </div>
                </div>            
            </div>
        </nav>
	);
};

export default Navbar;