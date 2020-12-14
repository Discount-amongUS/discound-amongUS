import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {useHistory} from 'react-router-dom';
import "./AddRemoveBusiness.css";


export class AddRemoveBusiness extends Component {

    constructor() {
        super();
        this.state = {
            businessName: "",
            address: "",
            city: "",
            state: "",
            zipcode: "",
            bln: "",
            errors: [],
        };
    }

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    handleAdd = (e) => {
        e.preventDefault();

        const { businessName, address, city, state, zipcode, bln } = this.state;
        var newState = Object.assign({}, this.state);
        newState.errors = [];
        if (businessName === "") {
            newState.errors.push("Please Enter Business Name");
        }
        if (address === "") {
            newState.errors.push("Please Enter Business Address");
        }
        if (city === "") {
            newState.errors.push("Please Enter city");
        }
        if (state === "") {
            newState.errors.push("Please Enter State");
        }
        if (zipcode === "") {
            newState.errors.push("Please Enter Zipcode");
        }
        if (bln === "") {
            newState.errors.push("Please Enter Business BLN");
        }
        if (newState.errors.length === 0) {
            //Backend starts here
            console.log(newState);
            
            
            
            this.props.history.push("/confirmed-business");
        }
        this.setState(newState);
    };

    handleRemove = (e) => {
        e.preventDefault();
        const { businessName, address, city, state, zipcode, bln } = this.state;
        var newState = Object.assign({}, this.state);
        newState.errors = [];
        if (businessName === "") {
            newState.errors.push("Please Enter Business Name");
        }
        if (address === "") {
            newState.errors.push("Please Enter Business Address");
        }
        if (city === "") {
            newState.errors.push("Please Enter city");
        }
        if (state === "") {
            newState.errors.push("Please Enter State");
        }
        if (zipcode === "") {
            newState.errors.push("Please Enter Zipcode");
        }
        if (bln === "") {
            newState.errors.push("Please Enter Business BLN");
        }
        if (newState.errors.length === 0) {
            //Backend starts here
            console.log(newState);

            alert("Business Has Been Removed!")
        }
        this.setState(newState);
    };


    render() {

        return (
            <div className="view">
                <div className="owner-login">
                    <h1 className="au-header">Add/Remove Business</h1>
                    <form>
                        <div className="form-group">
                            <label>Business Name:</label>
                            <input type="text" className="form-control" placeholder="Enter Business Name" onChange={this.handleChange("businessName")} />
                        </div>

                        <div className="form-group">
                            <label>Business Address:</label>
                            <input type="text" className="form-control" placeholder="Enter Businesss Address" onChange={this.handleChange("address")} />
                        </div>

                        <div className="form-group">
                            <label>City:</label>
                            <input type="text" className="form-control" placeholder="Business City" onChange={this.handleChange("city")} />
                        </div>

                        <div className="form-group">
                            <label>State</label>
                            <input type="text" className="form-control" placeholder="Business State" onChange={this.handleChange("state")} />
                        </div>

                        <div className="form-group">
                            <label>Zipcode</label>
                            <input type="number" className="form-control" placeholder="Business Zipcode" onChange={this.handleChange("zipcode")} />
                        </div>

                        <div className="form-group">
                            <label>Business License No.</label>
                            <input type="text" className="form-control" placeholder="BLN" onChange={this.handleChange("bln")} />
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

export default AddRemoveBusiness
