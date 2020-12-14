import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import "./RegisterOwner.css";
import * as API from '../../../util/api';
import { AuthContext } from "../../../context/authContext";


export class RegisterOwner extends Component {
    static contextType = AuthContext;
    
    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password1: "",
            apiError: "",
            errors: [],
        };
    }

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { first_name, last_name, email, password, password1 } = this.state;
        var newState = Object.assign({}, this.state);
        newState.errors = [];
        if (first_name === "") {
            newState.errors.push("Please Enter a First Name. ");
        }
        if (last_name === "") {
            newState.errors.push("Please Enter a Last Name. ");
        }
        if (email === "") {
            newState.errors.push("Please Enter an Email. ");
        }
        if (password === "" || password1 === "") {
            newState.errors.push("Please Enter a Password. ");
        }
        if (password !== password1) {
            newState.errors.push("Passwords Do Not Match. ");
        }
        if (newState.errors.length === 0) {
            //backend starts here
            API.registerUser(newState).then((result) => {
                console.log(result)
                if (result.status === 200) { 
                    console.log(result.data)
                    if(result.data.success === true) {
                        window.location.replace("/owner-login");
                    }
                    else {
                        let dangerAlert = document.getElementById("danger");
                        dangerAlert.style.display = "block";
                        this.setState({
                            apiError: result.data.msg
                        })
                    }
                }
            }).catch((error) => {
                console.log(error);
            })
        }
        else {
            let dangerAlert = document.getElementById("danger");
            dangerAlert.style.display = "block";
        }

        this.setState(newState);
    };

    render() {
        const { errors, apiError } = this.state;
        
        return (
            <div className="view">
                <div className="owner-login">
                <Alert variant='danger' className="register-alert" id="danger">
                    { errors.length === 0? apiError: errors }
                </Alert>
                    <h1 className="au-header mb-5">Register as Owner</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>First Name:</label>
                            <input type="id" className="form-control" placeholder="Enter First Name" onChange={this.handleChange("first_name")} />
                        </div>

                        <div className="form-group">
                            <label>Last Name:</label>
                            <input type="id" className="form-control" placeholder="Enter Last Name" onChange={this.handleChange("last_name")} />
                        </div>
                        
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter Email" onChange={this.handleChange("email")} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter Password" onChange={this.handleChange("password")} />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Enter Password" onChange={this.handleChange("password1")} />
                        </div>

                        <Button className="au-btn" variant="dark" size="lg" type="submit">
                                Register
                            </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterOwner
