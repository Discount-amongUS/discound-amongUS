import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import "./AddRemoveUser.css";


export class AddRemoveUser extends Component {
    render() {
        return (
            <div className="view">
                <div className="owner-login">
                    <h1 className="au-header">Add/Remove Business</h1>
                    <form>
                        <div className="form-group">
                            <label>User's Email:</label>
                            <input type="text" className="form-control" placeholder="Enter User's Email" />
                        </div>
                        
                        <div className="form-group">
                            <label>First Name:</label>
                            <input type="text" className="form-control" placeholder="User First Name" />
                        </div>

                        <div className="form-group">
                            <label>Last Name:</label>
                            <input type="text" className="form-control" placeholder="User Last Name" />
                        </div>

                        <div className="form-group">
                            <label>Business License No.</label>
                            <input type="text" className="form-control" placeholder="Enter BLN" />
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

export default AddRemoveUser
