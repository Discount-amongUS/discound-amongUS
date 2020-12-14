import React, { Component, } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import Home from "./components/pages/Home/Home";
import OwnerLogin from "./components/pages/OwnerLogin/OwnerLogin";
import Locations from "./components/pages/Locations/Locations";
import AddRemoveUser from "./components/pages/AddRemoveUser/AddRemoveUser";
import RemoveUser from "./components/pages/RemoveUser/RemoveUser";
import AddRemoveBusiness from "./components/pages/AddRemoveBusiness/AddRemoveBusiness";
import RemoveBusiness from "./components/pages/RemoveBusiness/RemoveBusiness";
import DiscountCheck from "./components/pages/DiscountCheck/DiscountCheck";
import Menu from "./components/pages/Menu/Menu"
import RegisterOwner from "./components/pages/RegisterOwner/RegisterOwner";
import ConfirmedBusiness from './components/pages/ConfirmedBusiness/ConfirmedBusiness';
import ConfirmedUser from './components/pages/ConfirmedUser/ConfirmedUser';
import ConfirmedDiscount from './components/pages/ConfirmedDiscount/ConfirmedDiscount';

import PrivateRoute from "./privateRoute";


export class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/owner-login" component={OwnerLogin} />
            <Route exact path="/discount-check" component={DiscountCheck} />
            <Route exact path="/register-owner" component={RegisterOwner} />
            <PrivateRoute exact path="/locations" component={Locations} />
            <PrivateRoute exact path="/add-user" component={AddRemoveUser} />
            <PrivateRoute exact path="/remove-user" component={RemoveUser} />
            <PrivateRoute exact path="/add-business" component={AddRemoveBusiness} />
            <PrivateRoute exact path="/remove-business" component={RemoveBusiness} />
            <PrivateRoute exact path="/menu" component={Menu} />
            <PrivateRoute exact path="/confirmed-business" component={ConfirmedBusiness} />
            <Route exact path="/confirmed-discount" component={ConfirmedDiscount} />
            <PrivateRoute exact path="/confirmed-user" component={ConfirmedUser} />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
