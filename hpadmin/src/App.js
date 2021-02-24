import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import EncounterList from "./components/encounters/list";
import EncounterDetails from './components/encounters/detail';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-brand">
          Homebrewer's Tools: Fountain
        </div>
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
            <Route path="/encounters/:name" component={EncounterDetails}/>
          </Switch>
        </div>
    </div>
  );
}

export default App;
