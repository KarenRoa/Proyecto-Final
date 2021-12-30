import React from "react";
import { Link } from "react-router-dom";
import perro from "../../img/perro2.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navb">
				<a className="navbar-brand" id="logo">
					<Link to="/" className="subrayado">
						<img src={perro} width="35" height="35" className="d-inline-block align-top" alt="" />
						<strong href="#" id="titulo">WALK-DOGS</strong>
					</Link>
				</a>

			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">INICIO</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">QUIENES SOMOS</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">CONTACTO</a>
					</li>
				</ul>
			</div>

			<div id="f-r">
				<Link to="/SignUp">
					<button type="button" className="btn btn-outline-light">INGRESAR</button>
				</Link>
			</div>
		</nav>

		/*<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>*/
	);
};
