import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import "./AddRemoveUser.css";


export class AddRemoveUser extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            bln: "",
            errors: [],
        };
    }

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    handleAdd = (e) => {
        e.preventDefault();
        const { email, firstName, lastName, bln } = this.state;
        var newState = Object.assign({}, this.state);
        newState.errors = [];
        if (email === "") {
            newState.errors.push("Please Enter Email");
        }
        if (firstName === "") {
            newState.errors.push("Please Enter First Name");
        }
        if (lastName === "") {
            newState.errors.push("Please Enter Last Name");
        }
        if (bln === "") {
            newState.errors.push("Please Enter Business License Number");
        }
        if (newState.errors.length === 0) {
            //backend starts here
            console.log(newState);


            this.props.history.push("/confirmed-business");
        }
        this.setState(newState);
    }

    handleRemove = (e) => {
        e.preventDefault();
        const { email, firstName, lastName, bln } = this.state;
        var newState = Object.assign({}, this.state);
        newState.errors = [];

        if (email === "") {
            newState.errors.push("Please Enter Email");
        }
        if (firstName === "") {
            newState.errors.push("Please Enter First Name");
        }
        if (lastName === "") {
            newState.errors.push("Please Enter Last Name");
        }
        if (bln === "") {
            newState.errors.push("Please Enter Business License Number");
        }
        if (newState.errors.length === 0) {
            //backend starts here
            console.log(newState);

            alert("User Has Been Removed!");
        }
        this.setState(newState);
    }

    render() {
        return (
            <div className="view">
                <div className="owner-login">
                    <h1 className="au-header">Add/Remove Business</h1>
                    <form>
                        <div className="form-group">
                            <label>User's Email:</label>
                            <input type="text" className="form-control" placeholder="Enter User's Email" onChange={this.handleChange("email")}/>
                        </div>

                        <div className="form-group">
                            <label>First Name:</label>
                            <input type="text" className="form-control" placeholder="User First Name" onChange={this.handleChange("firstName")}/>
                        </div>

                        <div className="form-group">
                            <label>Last Name:</label>
                            <input type="text" className="form-control" placeholder="User Last Name" onChange={this.handleChange("lastName")}/>
                        </div>

                        <div className="form-group">
                            <label>Business License No.</label>
                            <input type="text" className="form-control" placeholder="Enter BLN" onChange={this.handleChange("bln")}/>
                        </div>

                        <Row className="au-row au-row-addremove">
                            <Button variant="dark" size="lg" onClick={this.handleAdd}>
                                Add
                                </Button>

                            <Button variant="dark" size="lg" onClick={this.handleRemove}>
                                Remove
                                </Button>
                        </Row>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddRemoveUser
