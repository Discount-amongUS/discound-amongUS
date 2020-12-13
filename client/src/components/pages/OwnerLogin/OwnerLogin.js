import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import "./OwnerLogin.css";


export class OwnerLogin extends Component {
    render() {
        return (
            <div className="view">
                <div className="owner-login">
                    <h1 className="auheader">Owner Login</h1>
                    <form>
                        <div className="form-group">
                            <label>Username:</label>
                            <input type="id" className="form-control" placeholder="Enter ID" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <Button className="au-btn" variant="dark" size="lg">
                                Sign in
                            </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default OwnerLogin
