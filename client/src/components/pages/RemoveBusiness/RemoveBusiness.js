import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

import * as API from '../../../util/api';
import { AuthContext } from "../../../context/authContext";

export class RemoveBusiness extends Component {
    static contextType = AuthContext;

    constructor() {
        super();
        this.state = {
            userID: null,
            businessID: "",
            apiError: "",
            errors: [],
        };
    }

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

        const { userID, businessID } = this.state;
        var newState = Object.assign({}, this.state);
        newState.errors = [];

        if (businessID === "") {
            newState.errors.push("Please Enter Business BLN");
        }

        if (newState.errors.length === 0) {
            //Backend starts here
            console.log(newState);
            API.removeBusiness(businessID, userID).then((result) => {
                if (result.status === 200) {
                    if (result.data.success === true) {
                        this.props.history.push("/confirmed-business");
                    }
                    else {
                        this.setState({
                            apiError: result.data.msg
                        })
                        let dangerAlert = document.getElementById("registerBusiness");
                        dangerAlert.style.display = "block";
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        }
        else {
            let dangerAlert = document.getElementById("registerBusiness");
            dangerAlert.style.display = "block";
        }
        this.setState(newState);
    };

    render() {
        const { errors, apiError } = this.state;

        return (
            <div className="view">
                <div className="owner-login">
                    <Alert variant='danger' className="registerBusiness-alert" id="registerBusiness">
                        { errors.length === 0? apiError: errors }
                    </Alert>
                    <h1 className="au-header mb-5">Remove Business</h1>
                    <form>
                        <div className="form-group">
                            <label className="mb-3">Business License No.</label>
                            <input type="text" className="form-control" placeholder="BLN" onChange={this.handleChange("businessID")} />
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

export default RemoveBusiness
