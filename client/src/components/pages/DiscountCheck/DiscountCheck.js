import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import "./DiscountCheck.css";


export class DiscountCheck extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            businessName: "",
            errors: [],
        };
    }

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, businessName } = this.state;
        var newState = Object.assign({},this.state);
        newState.errors = [];

        if (email === "") {
            newState.errors.push("Please Enter Email");
        }
        if (businessName === "") {
            newState.errors.push("Please Enter Busniess Name");
        }
        if (newState.errors.length === 0) {
            //backend starts here
            console.log(newState);
            
        }

        this.setState(newState)
    };



    render() {
        return (
            <div className="view">
                <div className="discount-check">
                    <h1 className="au-header">Discount Check</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" className="form-control" placeholder="Enter Email" onChange={this.handleChange("email")} />
                        </div>

                        <div className="form-group">
                            <label>Store Name:</label>
                            <input type="name" className="form-control" placeholder="Enter Stroe's Name" onChange={this.handleChange("businessName")} />
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