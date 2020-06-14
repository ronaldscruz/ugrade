import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from "./pages/SignUp";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="signup" component={SignUp} />
      </Switch>
    </Router>
  );
}
