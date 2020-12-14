import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./DiscountCheck.css";
import * as API from '../../../util/api';


export class DiscountCheck extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            checking: true,
            sameOwner: null,
            worksAt: null,
            errors: [],
        };
    }

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email } = this.state;
        var newState = Object.assign({},this.state);
        newState.errors = [];

        if (email === "") {
            newState.errors.push("Please Enter Email");
        }
        if (newState.errors.length === 0) {
            //backend starts here
            console.log(newState);
            API.findEmployee(email).then((result) => {
                if (result.status === 200) {
                    if (result.data.success === true) {
                        this.setState({
                            checking: false,
                            sameOwner: result.data.sameOwner,
                            worksAt: result.data.worksAt 
                        })
                        let results = document.getElementById("results");
                        results.style.display = "block";
                    }
                    else {
                        let dangerAlert = document.getElementById("discount");
                        dangerAlert.style.display = "block";
                    }
                }
            }).catch((error) => {
                console.log(error);
            })
            
        }

        this.setState(newState)
    };



    render() {
        let works = [];
        let locations = [];


        const  { checking, worksAt, sameOwner } = this.state;

        if (!checking) {
            console.log(worksAt)
            for (let index=0; index < worksAt.length ; index++) {
                console.log(worksAt[index])
                let html = (
                    <h4 className="ml-4" key={index} >Location Name: {worksAt[index]}</h4>
                );
                works.push(html);
            }
            
            for (let index=0; index < sameOwner.length; index++) {
                let html = (
                    <h4 className="ml-4" key={index} >Location Name: {sameOwner[index].name}, Address: {sameOwner[index].address} </h4>
                );
                locations.push(html);
            }
    
        }

        return (
            <div className="view mb-5">
                <div className="discount-check">
                    <Alert variant='danger' className="login-alert" id="discount">
                        Email not found!
                    </Alert>
                    <h1 className="au-header">Discount Check</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" className="form-control" placeholder="Enter Email" onChange={this.handleChange("email")} />
                        </div>

                        <Button className="au-btn" variant="dark" size="lg" type="submit">
                            Check
                        </Button>
                    </form>
                    <Row>
                    <div className="discountcheck-results" id="results">
                        <Col>
                        <h2 className="mt-5">Works at:</h2>
                        { works }
                        </Col>
                        <Col>
                        <h2 className="mt-5">Affiliated Locations:</h2>
                        { locations }
                        </Col>
                    </div>
                    </Row>
                </div>
            </div>
        )
    }
}

export default DiscountCheck