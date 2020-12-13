import React, { Component,  } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import Home from "./components/pages/Home/Home";
<<<<<<< HEAD
import PrivateRoute from "./privateRoute";
=======
import OwnerLogin from "./components/pages/OwnerLogin/OwnerLogin";
import Locations from "./components/pages/Locations/Locations";
import AddRemoveUser from "./components/pages/AddRemoveUser/AddRemoveUser";
import AddRemoveBusiness from "./components/pages/AddRemoveBusiness/AddRemoveBusiness";
import DiscountCheck from "./components/pages/DiscountCheck/DiscountCheck";
import Menu from "./components/pages/Menu/Menu"
import RegisterOwner from "./components/pages/RegisterOwner/RegisterOwner";
import ConfirmedBusiness from './components/pages/ConfirmedBusiness/ConfirmedBusiness';
import ConfirmedUser from './components/pages/ConfirmedUser/ConfirmedUser';
import ConfirmedDiscount from './components/pages/ConfirmedDiscount/ConfirmedDiscount';


>>>>>>> Frontend Page

export class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </AuthProvider>
=======

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/owner-login" component={OwnerLogin} />
          <Route exact path="/discount-check" component={DiscountCheck} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/addremove-user" component={AddRemoveUser} />
          <Route exact path="/addremove-business" component={AddRemoveBusiness} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/register-owner" component={RegisterOwner} />
          <Route exact path="/confirmed-business" component={ConfirmedBusiness} />
          <Route exact path="/confirmed-discount" component={ConfirmedDiscount} />
          <Route exact path="/confirmed-user" component={ConfirmedUser} />
        </Switch>
      </Router>

>>>>>>> Frontend Page
    );
  }
}

export default App;
