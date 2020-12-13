import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import "./RegisterOwner.css";


export class RegisterOwner extends Component {
    render() {
        return (
            <div className="view">
                <div className="owner-login">
                    <h1 className="au-header">Register as Owner</h1>
                    <form>
                        <div className="form-group">
                            <label>Username:</label>
                            <input type="id" className="form-control" placeholder="Enter Username" />
                        </div>
                        
                        <div className="form-group">
                            <label>Email</label>
                            <input type="password" className="form-control" placeholder="Enter Email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter Password" />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Enter Password" />
                        </div>

                        <Button className="au-btn" variant="dark" size="lg">
                                Register
                            </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterOwner
