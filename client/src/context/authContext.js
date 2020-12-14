import React, { Component, createContext} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
export const AuthContext = createContext();


// export const AuthProvider = AuthContext.Provider
class AuthProvider extends Component {
  state = {
    userID: null,
    isAuthenicated: false,
  };
  
  componentDidMount() {
    this.checkTokenExpired()
  }

  // if the variable existingToken returns true then its proof that the user is Authenicated
  // we can pass this function in privateRoute.jsx to make sure certain routes are protected.
  checkTokenExist = () => {
    const existingToken = JSON.parse(localStorage.getItem("jwtToken"));
    if (existingToken) {
      this.setAuthToken(existingToken);
      return true;
    } else {
      this.setAuthToken(false);
      return false;
    }
  };

  // put the jwtToken and its info into localStorage
  setTokens = (data) => {
    localStorage.setItem("jwtToken", JSON.stringify(data));
  };

  // Set the Authorization header
  setAuthToken = (token) => {
    if (token) {
      // Apply authorization token to every request if logged in
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      // Delete auth header
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  setUser = (decoded) => {
    this.setState((prevState) => {
      return { userID: decoded.sub, isAuthenicated: true };
    });
  };

  LogoutUser = () => {
    localStorage.removeItem("jwtToken");
    this.setAuthToken(false);
    this.setState((prevState) => {
      return { userID: null, isAuthenicated: false };
    });
    window.location.href = "./";
  };

  // Check for token to keep user logged in
  checkTokenExpired = () => {
    // console.log('Calling Token is Expired function!')
    if (localStorage.getItem("jwtToken")) {
      const token = localStorage.getItem("jwtToken");
      this.setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      this.setUser(decoded);
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        this.LogoutUser();
      }
    }
  };

  render() {
    const { children } = this.props;
    const { userID, isAuthenicated } = this.state;
    const {
      setUser,
      setTokens,
      checkTokenExist,
      setAuthToken,
      LogoutUser,
      checkTokenExpired,
    } = this;

    return (
      <AuthContext.Provider
        value={{
          userID,
          isAuthenicated,
          setUser,
          setTokens,
          checkTokenExist,
          setAuthToken,
          LogoutUser,
          checkTokenExpired,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;
export default AuthContext;
export { AuthProvider, AuthConsumer }
