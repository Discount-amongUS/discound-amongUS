import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './Menu.css';


export class Menu extends Component {
    render() {
        return (
            <div className="view">
                <h1 className="au-header">Menu</h1>
                <div>
                    <Row className="au-row">
                        <Link to="/addremove-business">
                            <Button className="au-btn" variant="dark" size="lg">
                                Add/Remove a Business
                            </Button>
                        </Link>
                    </Row>
                    <Row className="au-row">
                        <Link to="/addremove-user">
                            <Button className="au-btn" variant="dark" size="lg">
                                Add/Remove A User
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
                </div>
            </div>
        )
    }
}

export default Menu