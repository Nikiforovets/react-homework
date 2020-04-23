import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../people-page";
import PersonPage from "../person-page";
import PlanetPage from "../planet-page";
import StarsipPage from "../starship-page";
import StarsipPersonalPage from "../starship-personal-page";
import { SwapiServiceProvider, SwapiServiceConsumer } from "../../cotext";

import { withComponentError } from "../../hocs";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./app.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    isLoggedIn: false
  };

  render() {
    return withComponentError(
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <div>
            <Header />
            <RandomPlanet />
            <Switch>
              <Route path="/" render={() => <h1>Welcome</h1>} exact />
              <Route path="/people" component={PeoplePage} exact />
              <Route path="/people/:id" component={PersonPage} />
              <Route path="/planets/:id?" component={PlanetPage} />
              <Route path="/starships" component={StarsipPage} exact />
              <Route path="/starships/:id" component={StarsipPersonalPage} />
              <Route render={() => <h1>Page not fond</h1>} />
            </Switch>
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}

export default App;
