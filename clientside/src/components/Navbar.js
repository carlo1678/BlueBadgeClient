import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Signup from "./Signup";
import Login from "./Login";
import MusicSearch from "./MusicSearch";
import Games from "./Games";
import MoviesSearch from "./MoviesSearch";
import GamesSearch from "./GamesSearch";
import Favorites from "./Favorites";

export default function NavBar(props) {
  console.log(props.sessionToken)
  return (
    <div>
      <Navbar className="navbar-primary" variant="dark">
        <Navbar.Brand className="homeTitle" href="/">
          <span className="commerce">Choice Media</span>
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
          <Link className="favorites" to="/favorites">
            Favorites
          </Link>
          {props.sessionToken && (
            <button onClick={props.clearToken} className="logoutButton" id='logoutButton'>
              Logout
            </button>
          )}
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/games">
          <GamesSearch sessionToken={props.sessionToken} />
        </Route>
        <Route exact path="/movies">
          <MoviesSearch sessionToken={props.sessionToken} />
        </Route>
        <Route exact path="/music">
          <MusicSearch sessionToken={props.sessionToken} />
        </Route>
        <Route exact path='/favorites'>
          <Favorites sessionToken={props.sessionToken} />
        </Route>
      </Switch>
    </div>
  );
}
