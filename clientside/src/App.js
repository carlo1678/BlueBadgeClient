import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Auth from "./components/Auth";

function App() {
  const [sessionToken, setSessionToken] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <div>
        <NavBar clearToken={clearToken} sessionToken={sessionToken} />
        {/* <LandingPage /> */}
      </div>
    ) : (
      <Auth updateToken={updateToken} />
    );
  };
  return <div className="App">{protectedViews()}</div>;
}

export default App;
