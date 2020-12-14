import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import "./Locations.css";

import * as API from '../../../util/api';
import { AuthContext } from "../../../context/authContext";

export class Locations extends Component {
    static contextType = AuthContext;

    constructor() {
        super();
        this.state = {
            userID: null,
            data: [],
            errors: [],
        };
    };

    componentDidMount() {
        setTimeout(() =>{
            const { userID } = this.context;
            this.setState({
                userID: userID
            });
            this.getBusinesses(userID);
        }, 10)
    };

    getBusinesses = (userID) => {
        API.getBusinesses(userID).then((result) => {
            if (result.status === 200) {
                this.setState({
                    data: result.data
                }, () => {
                    console.log(this.state.data);
                })
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    addBusiness = (e) => {
        e.preventDefault();
        this.props.history.push("/menu");
    }
    

    render() {
        const { data } = this.state;
        let body = [];
        
        for (let index=0; index < data.length; index++) {
            let card = (
                <Card style={{ width: '18rem' }} className="mt-4">
                    <Card.Body>
                        <Card.Title>{data[index].name}</Card.Title>
                        <Card.Text>
                        Address: {data[index].address} <br/> City: {data[index].city}, State: {data[index].state} <br/> Zipcode:{data[index].zipcode}
                        <br/> BLN: {data[index].id}
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
            body.push(card)
        }

        return (
            <div className="view">
                <h1>My Business</h1>
                {data.length > 0 ? body: (
                    <Row>
                        <h3 className="mt-5"> Go Add your business</h3>
                    </Row>
                )}
                <Button variant="dark" size="lg" className="mt-5 ml-5" onClick={this.addBusiness}>
                    Go back to Menu
                </Button>
            </div>
        )
    }
}

export default Locations