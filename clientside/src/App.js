import "./App.css";
import Games from "./components/Games";
import MoviesSearch from "./components/MoviesSearch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MusicSearch from "./components/MusicSearch";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/home">
            <LandingPage />
          </Route>
          <Route exact path="/games">
            <Games />
          </Route>
          <Route exact path="/movies">
            <MoviesSearch />
          </Route>
          <Route exact path="/music">
            <MusicSearch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
