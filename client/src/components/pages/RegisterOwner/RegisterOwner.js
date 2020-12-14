import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import "./RegisterOwner.css";


export class RegisterOwner extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            password1: "",
            errors: [],
        };
    }

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, password1 } = this.state;
        var newState = Object.assign({}, this.state);
        newState.errors = [];
        if (username === "") {
            newState.errors.push("Please Enter a Username");
        }
        if (email === "") {
            newState.errors.push("Please Enter an Email");
        }
        if (password === "" || password1 === "") {
            newState.errors.push("Please Enter a Password in the Right Fields");
        }
        if (password !== password1) {
            newState.errors.push("Passwords Do Not Match");
        }
        if (newState.errors.length === 0) {
            //backend starts here
            console.log(newState);
        }

        this.setState(newState);
    };

    render() {
        return (
            <div className="view">
                <div className="owner-login">
                    <h1 className="au-header">Register as Owner</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username:</label>
                            <input type="id" className="form-control" placeholder="Enter Username" onChange={this.handleChange("username")} />
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
