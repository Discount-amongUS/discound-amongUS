import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./AddRemoveBusiness.css";


export class AddRemoveBusiness extends Component {
    render() {
        return (
            <div className="view">
                <div className="owner-login">
                    <h1 className="au-header">Add/Remove Business</h1>
                    <form>
                        <div className="form-group">
                            <label>Business Name:</label>
                            <input type="text" className="form-control" placeholder="Enter Business Name" />
                        </div>
                        
                        <div className="form-group">
                            <label>Business Address:</label>
                            <input type="text" className="form-control" placeholder="Enter Businesss Address" />
                        </div>

                        <div className="form-group">
                            <label>City:</label>
                            <input type="text" className="form-control" placeholder="Business City" />
                        </div>

                        <div className="form-group">
                            <label>State</label>
                            <input type="text" className="form-control" placeholder="Business State" />
                        </div>

                        <div className="form-group">
                            <label>Zipcode</label>
                            <input type="text" className="form-control" placeholder="Business Zipcode" />
                        </div>

                        <div className="form-group">
                            <label>Business License No.</label>
                            <input type="text" className="form-control" placeholder="BLN No." />
                        </div>


                        <Row className="au-row au-row-addremove">
                                <Button variant="dark" size="lg">
                                    Add
                                </Button>

                                <Button variant="dark" size="lg">
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
