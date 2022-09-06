import React from 'react';
import CartWidgets from '../CartWidgets/CartWidgets';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Navbar
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
              </button>
            </Link>
          
          <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <Link to="/" className="nav-link active">
              <li className="nav-item">
                Home
                  <span className="visually-hidden">(current)</span>
              </li>
            </Link>

            <Link to="/categoria/vegano" className="nav-link">
              <li className="nav-item">
                Veganos
              </li>
            </Link>

            <Link to="/categoria/noVegano" className="nav-link">
              <li className="nav-item">
                No veganos
              </li>
            </Link>

            <Link to="/" className="nav-link">
              <li className="nav-item">
                About
              </li> 
            </Link>

          </ul>
            <CartWidgets/>
          </div>
          </div>
          </nav>
        </div>
    );
}

export default NavBar;
