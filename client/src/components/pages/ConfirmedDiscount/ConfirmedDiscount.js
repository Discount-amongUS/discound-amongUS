import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './ConfirmedDiscount';


export class ConfirmedDiscount extends Component {
    render() {
        return (
            <div className="view">
                <h1 className="au-header">Confirmed</h1>
                <h4></h4>
                <h4></h4>
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

export default ConfirmedDiscount