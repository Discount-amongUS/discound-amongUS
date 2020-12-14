import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import "./DiscountCheck.css";
import * as API from '../../../util/api';


export class DiscountCheck extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            errors: [],
        };
    }

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email } = this.state;
        var newState = Object.assign({},this.state);
        newState.errors = [];

        if (email === "") {
            newState.errors.push("Please Enter Email");
        }
        if (newState.errors.length === 0) {
            //backend starts here
            console.log(newState);
            API.findEmployee(email).then((result) => {
                if (result.status === 200) {
                    if (result.data.success === true) {
                        console.log(result.data);
                        // this.setState({
                        //     works: 
                        // })
                    }
                    else {
                        let dangerAlert = document.getElementById("discount");
                        dangerAlert.style.display = "block";
                    }
                }
            }).catch((error) => {
                console.log(error);
            })
            
        }

        this.setState(newState)
    };



    render() {

        return (
            <div className="view">
                <div className="discount-check">
                    <Alert variant='danger' className="login-alert" id="discount">
                        Email not found!
                    </Alert>
                    <h1 className="au-header">Discount Check</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" className="form-control" placeholder="Enter Email" onChange={this.handleChange("email")} />
                        </div>

                        <Button className="au-btn" variant="dark" size="lg" type="submit">
                            Check
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default DiscountCheck