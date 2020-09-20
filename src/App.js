import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import UserProfile from "./components/UserProfile";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/profile" component={Profile} />
        <Route path="/userProfile" component={UserProfile} />
        <Route path="/post" component={Post} />
      </Switch>
    </Router>
  );
}

export default App;
