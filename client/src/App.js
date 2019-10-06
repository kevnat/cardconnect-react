import React, { Component } from "react";
// eslint-disable-next-line
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Pay from "./pages/Pay";
import Report from "./pages/Report";
import Config from "./pages/Config";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Pay} />
            <Route path="/Pay" component={Pay} />
            <Route path="/Report" component={Report} />
            <Route path="/Config" component={Config} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
