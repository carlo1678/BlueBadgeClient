import "./App.css";
import Games from "./components/Games";
import MoviesSearch from "./components/MoviesSearch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/games">
            <Games />
          </Route>
          <Route exact path="/movies">
            <MoviesSearch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
