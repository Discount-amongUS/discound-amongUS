import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import "./AddRemoveUser.css";
import Alert from 'react-bootstrap/Alert';

import * as API from '../../../util/api';
import { AuthContext } from "../../../context/authContext";

export class AddRemoveUser extends Component {
    static contextType = AuthContext;

    constructor() {
        super();
        this.state = {
            userID: null,
            email: "",
            first_name: "",
            last_name: "",
            businessID: "",
            apiErrors: "",
            errors: [],
        };
    };

    componentDidMount() {
        setTimeout(() =>{
            const { userID } = this.context;
            this.setState({
                userID: userID
            });
            console.log(userID);
        }, 10)
    };

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    handleAdd = (e) => {
        e.preventDefault();
        const { userID, email, first_name, last_name, businessID } = this.state;
        var newState = Object.assign({}, this.state);
        newState.errors = [];
        if (email === "") {
            newState.errors.push("Please Enter Email. ");
        }
        if (first_name === "") {
            newState.errors.push("Please Enter First Name. ");
        }
        if (last_name === "") {
            newState.errors.push("Please Enter Last Name. ");
        }
        if (businessID === "") {
            newState.errors.push("Please Enter Business License Number.");
        }
        if (newState.errors.length === 0) {
            //backend starts here
            console.log(newState);
            API.addEmployee(newState).then((result) => {
                if (result.status === 200) {
                    if (result.data.success === true) {
                        this.props.history.push("/confirmed-business");
                    }
                    else {
                        this.setState({
                            apiError: result.data.msg
                        })
                        let dangerAlert = document.getElementById("add-user");
                        dangerAlert.style.display = "block";
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        }
        else {
            let dangerAlert = document.getElementById("add-user");
            dangerAlert.style.display = "block";
        }
        this.setState(newState);
    }

    render() {
        const { errors, apiError } = this.state;

        return (
            <div className="view">
                <div className="owner-login">
                    <Alert variant='danger' className="login-alert" id="add-user">
                        { errors.length === 0? apiError: errors }
                    </Alert>
                    <h1 className="au-header">Add Employee</h1>
                    <form>
                        <div className="form-group">
                            <label>User's Email:</label>
                            <input type="email" className="form-control" placeholder="Enter User's Email" onChange={this.handleChange("email")}/>
                        </div>

                        <div className="form-group">
                            <label>First Name:</label>
                            <input type="text" className="form-control" placeholder="User First Name" onChange={this.handleChange("first_name")}/>
                        </div>

                        <div className="form-group">
                            <label>Last Name:</label>
                            <input type="text" className="form-control" placeholder="User Last Name" onChange={this.handleChange("last_name")}/>
                        </div>

                        <div className="form-group">
                            <label>Business License No.</label>
                            <input type="text" className="form-control" placeholder="Enter BLN" onChange={this.handleChange("businessID")}/>
                        </div>

                        <Row className="au-row au-row-addremove">
                            <Button variant="dark" size="lg" onClick={this.handleAdd}>
                                Add
                                </Button>
                        </Row>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddRemoveUser
