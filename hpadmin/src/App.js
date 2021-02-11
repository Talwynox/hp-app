import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import EncounterList from "./components/encounters";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          Homebrewer's Tools: Fountain
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/encounters"} className="nav-link">
              Encounters
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
          <Switch>
            <Route exact path="/encounters" component={EncounterList}/>
          </Switch>
        </div>
    </div>
  );
}

export default App;
