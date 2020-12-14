import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './ConfirmedUser';


export class ConfirmedUser extends Component {
    render() {
        return (
            <div className="view">
                <h2>Success!</h2>
                <h5>User Has been added.</h5>
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

export default ConfirmedUser