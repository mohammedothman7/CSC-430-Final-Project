import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark h-20">
        <Link
          to="/"
          className="navbar-brand mb-1 mr-5"
          style={{ fontFamily: "Roboto Mono, monospace" }}
        >
          Sneakers & Apparels Co.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mr-auto"
            style={{ fontFamily: "Roboto Mono, monospace" }}
          >
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/sneakers" className="nav-link">
                Sneakers
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/clothing" className="nav-link">
                Clothing
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>

          <Link to="/cart" className="nav-link">
            <i className="fas fa-shopping-cart fa-2x my-2 my-sm-0 text-white"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
