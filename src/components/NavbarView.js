import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { auth } from "../firebase";
import "./css/navbar.css";

import { UserContext } from "./UserContext";

function NavbarView() {
  const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);

  async function handleLogout() {
    auth
      .signOut()
      .then(() => {
        console.log("Signed out");
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
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
            {isLoggedIn ? (
              <div className="container">
                <Nav.Link className="text-white mr-4" href="/account">
                  Hello, {isLoggedIn.displayName}
                </Nav.Link>
                <button
                  style={{ border: "none" }}
                  className="text-white bg-dark mr-4"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="container">
                <Nav.Link className="text-white" href="/login">
                  Login
                </Nav.Link>
                <Nav.Link className="text-white" href="/register">
                  Register
                </Nav.Link>
              </div>
            )}
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
