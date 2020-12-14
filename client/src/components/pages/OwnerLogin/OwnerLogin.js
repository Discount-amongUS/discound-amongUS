import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import jwt_decode from "jwt-decode";

import "./OwnerLogin.css";
import * as API from '../../../util/api';

import { AuthContext } from "../../../context/authContext";

export class OwnerLogin extends Component {
    static contextType = AuthContext;

    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            apiError: "",
            errors: [],
        };
    }

    handleChange = (input) => (e) => {
        this.setState({[input]: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        var newState = Object.assign({}, this.state);
        newState.errors = [];
        if (email === "") {
            newState.errors.push("Please Enter Email. ");
        }
        if (password === "") {
            newState.errors.push("Please Enter a Password.");
        }

        console.log(newState);

        if(newState.errors.length === 0) {
            API.loginUser(newState).then((result) => {
                if (result.status === 200) {
                    if (result.data.success === true) {
                        const { setUser, setTokens, setAuthToken, userID } = this.context;
                        const { token } = result.data;
                        const decoded = jwt_decode(token)
                        console.log(decoded);
                        setTokens(token);
                        setAuthToken(token);
                        setUser(decoded);
                        this.props.history.push('/menu');
                    }
                    else {
                        let dangerAlert = document.getElementById("login");
                        dangerAlert.style.display = "block";
                        this.setState({
                            errors: result.data.msg
                        })
                    }
                }
            }).catch((error) => {
                console.log(error)
            });
        }
        else {
            let dangerAlert = document.getElementById("login");
            dangerAlert.style.display = "block";
        }
        this.setState(newState);
    };


    render() {
        const { errors, apiError } = this.state;

        return (
            <div className="view">
                <div className="owner-login">
                    <Alert variant='danger' className="login-alert" id="login">
                        { errors.length === 0? apiError: errors }
                    </Alert>
                    <h1 className="auheader">Owner Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" className="form-control" placeholder="Enter Email" onChange={this.handleChange("email")} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={this.handleChange("password")} />
                        </div>

                        <Button className="au-btn" variant="dark" size="lg" type="submit" >
                                Sign in
                            </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default OwnerLogin
