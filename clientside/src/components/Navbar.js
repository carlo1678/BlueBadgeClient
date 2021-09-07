import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Navbar className="navbar-primary" variant="dark">
        <Navbar.Brand className="homeTitle" href="/">
          <span className="commerce">Blue Badge Project</span>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="navlinks" to="/">
            Home
          </Link>
          <Link className="navlinks" to="/movies">
            Movies
          </Link>
          <Link className="navlinks" to="/games">
            Games
          </Link>
          <Link className="navlinks" to="/music">
            Music
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}
