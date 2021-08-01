import {
  HashRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import React from "react";
import CalendarPage from "./pages/CalendarPage";
import MapPage from "./pages/MapPage";
import DataPage from "./pages/DataPage";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/map" component={MapPage} />
          <Route exact path="/user-data" component={DataPage} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
