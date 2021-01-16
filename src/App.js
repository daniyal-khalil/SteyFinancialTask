import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Trade from "./components/Trade.js"
import Profile from "./components/Profile.js"

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/trade">
            <Trade/>
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Redirect from path="/" to= "/trade"/>
        </Switch>
      </div>
    </Router>
  );
}

