import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar bg-dark text-white">
      <div className="container">
        <Link to="/">
          <span className="navbar mb-0">MatchPet</span>
        </Link>
		<div>
			<p>Bienvenida,</p>
		</div>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-light"><i class="fas fa-sign-out-alt"></i></button>
          </Link>
        </div>
        
      </div>
    </nav>
  );
};
