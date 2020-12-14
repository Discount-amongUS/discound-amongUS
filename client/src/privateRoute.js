import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./context/authContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { checkTokenExist }  = useContext(AuthContext);
  // In the future when we need more properties from the React Context , we can just use
  // Javascript destructing to get it. 
  return (
    <Route
      {...rest}
      render={(props) =>
        checkTokenExist() ? (
          <Component {...props} />
        ) : (
            <Redirect to="/owner-login" />
        )
      }
    />
  );
}

export default PrivateRoute;