import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

import './Menu.css';
import { AuthContext } from "../../../context/authContext";

export class Menu extends Component {
    static contextType = AuthContext; 

    render() {
        const { LogoutUser } = this.context

        return (
            <div className="view">
                <h1 className="au-header">Menu</h1>
                <div>
                    <Row className="au-row">
                        <Link to="/add-business">
                            <Button className="au-btn" variant="dark" size="lg">
                                Add a Business
                            </Button>
                        </Link>
                    </Row>
                    <Row className="au-row">
                        <Link to="/remove-business">
                            <Button className="au-btn" variant="dark" size="lg">
                                Remove a Business
                            </Button>
                        </Link>
                    </Row>
                    <Row className="au-row">
                        <Link to="/add-user">
                            <Button className="au-btn" variant="dark" size="lg">
                                Add An Employee
                            </Button>
                        </Link>
                    </Row>
                    <Row className="au-row">
                        <Link to="/remove-user">
                            <Button className="au-btn" variant="dark" size="lg">
                                Remove An Employee
                            </Button>
                        </Link>
                    </Row>
                    <Row className="au-row">
                        <Link to="/Locations">
                            <Button className="au-btn" variant="dark" size="lg">
                                View Businesses
                            </Button>
                        </Link>
                    </Row>
                    <Row className="au-row">
                        <Link>
                            <Button className="au-btn" variant="dark" size="lg" onClick={ LogoutUser } >
                                Logout
                            </Button>
                        </Link>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Menu