import React, { Component,  } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import Home from "./components/pages/Home/Home";
import PrivateRoute from "./privateRoute";

export class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
