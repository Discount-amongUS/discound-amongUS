import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './ConfirmedBusiness.css';


export class ConfirmedBusiness extends Component {
    render() {
        return (
            <div className="view">
                <h4>Businesss: "name"</h4>
                <h3>Has been added!</h3>
                <div>
                    <Row className="au-row">
                        <Link to="/">
                            <Button className="au-btn" variant="dark" size="lg">
                                Back to Menu
                            </Button>
                        </Link>
                    </Row>
                </div>
            </div>
        )
    }
}

export default ConfirmedBusiness