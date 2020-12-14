import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

import * as API from '../../../util/api';
import { AuthContext } from "../../../context/authContext";

export class RemoveUser extends Component {
    static contextType = AuthContext;

    constructor() {
        super();
        this.state = {
            userID: null,
            email: "",
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

    handleRemove = (e) => {
        e.preventDefault();
        const { userID, email, businessID } = this.state;
        var newState = Object.assign({}, this.state);
        newState.errors = [];
        if (email === "") {
            newState.errors.push("Please Enter Email. ");
        }
        if (businessID === "") {
            newState.errors.push("Please Enter Business License Number.");
        }
        if (newState.errors.length === 0) {
            //backend starts here
            console.log(newState);
            API.removeEmployee(businessID, email, userID).then((result) => {
                if (result.status === 200) {
                    if (result.data.success === true) {
                        this.props.history.push("/confirmed-business");
                    }
                    else {
                        this.setState({
                            apiError: result.data.msg
                        })
                        let dangerAlert = document.getElementById("remove-user");
                        dangerAlert.style.display = "block";
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        }
        else {
            let dangerAlert = document.getElementById("remove-user");
            dangerAlert.style.display = "block";
        }
        this.setState(newState);
    }

    render() {
        const { errors, apiError } = this.state;
        
        return (
            <div className="view">
                <div className="owner-login">
                    <Alert variant='danger' className="login-alert" id="remove-user">
                        { errors.length === 0? apiError: errors }
                    </Alert>
                    <h1 className="au-header">Remove Employee</h1>
                    <form>
                        <div className="form-group">
                            <label>User's Email:</label>
                            <input type="email" className="form-control" placeholder="Enter User's Email" onChange={this.handleChange("email")}/>
                        </div>

                        <div className="form-group">
                            <label>Business License No.</label>
                            <input type="text" className="form-control" placeholder="Enter BLN" onChange={this.handleChange("businessID")}/>
                        </div>

                        <Row className="au-row au-row-addremove">
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

export default RemoveUser
