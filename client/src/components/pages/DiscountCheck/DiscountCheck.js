import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import "./DiscountCheck.css";


export class DiscountCheck extends Component {
    render() {
        return (
            <div className="view">
                <div className="discount-check">
                    <h1 className="au-header">Discount Check</h1>
                    <form>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="id" className="form-control" placeholder="Enter Email" />
                        </div>

                        <div className="form-group">
                            <label>Store Name:</label>
                            <input type="password" className="form-control" placeholder="Enter Stroe's Name" />
                        </div>

                        <Button className="au-btn" variant="dark" size="lg">
                                Check
                            </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default DiscountCheck