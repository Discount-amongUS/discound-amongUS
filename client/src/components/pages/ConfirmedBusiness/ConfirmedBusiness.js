import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './ConfirmedBusiness.css';


export class ConfirmedBusiness extends Component {
    render() {
        return (
            <div className="view">
                <h2>Success!</h2>
                <h5>Business Has Been Added.</h5>
                <div>
                    <Row className="au-row">
                        <Link to="/menu">
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