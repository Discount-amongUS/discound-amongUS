import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import "./OwnerLogin.css";


export class OwnerLogin extends Component {

    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            errors: [],
        };
    }

    handleChange = (input) => (e) => {
        this.setState({[input]: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {username, password} = this.state;
        var newState = Object.assign({}, this.state);
        newState.errors = [];
        if (username === "") {
            newState.errors.push("Please Enter Username");
        }
        if (password === "") {
            newState.errors.push("Please Enter a Password");
        }

        console.log(newState);

        if(newState.errors.length === 0) {
            //backend here
        }
        this.setState(newState);
    };


    render() {
        return (
            <div className="view">
                <div className="owner-login">
                    <h1 className="auheader">Owner Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username:</label>
                            <input type="id" className="form-control" placeholder="Enter ID" onChange={this.handleChange("username")} />
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
