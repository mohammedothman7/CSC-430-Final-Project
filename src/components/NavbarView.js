import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./css/navbar.css";

function NavbarView() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark h-20">
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
      </nav> */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="text-white" href="/">
          Sneaker & Apparel Co.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="text-white" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="/sneakers">
              Sneakers
            </Nav.Link>
            <Nav.Link className="text-white" href="/clothing">
              Clothing
            </Nav.Link>
            <Nav.Link className="text-white" href="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-white justify-content-end" href="/cart">
              <i className="fas fa-shopping-cart fa-2x my-2 my-sm-0 text-white"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarView;
