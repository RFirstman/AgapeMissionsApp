import React, { Component } from "react";
import { Button, Col, Grid, Jumbotron, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import "../App.css";

class Home extends Component {
    render() {
        const buttonConfigs = [
            { text: "Register", route: "/register" },
            { text: 'Lunch Order', route: "/lunchorder" },
            { text: 'Groups', route: "/groups" },
            { text: "Job Sites", route: "/jobSites" },
            { text: 'Admin Access', route: "/admin" }
        ];
        return (
            <Grid>
                <Row>
                    <Jumbotron className="App-header">
                        <img src={logo} className="img-response center-block" alt="logo" />
                    </Jumbotron>
                </Row>
                {
                    buttonConfigs.map((buttonConfig, index) => (
                        <Row key={index}>
                            <Col s={10} sOffset={1} md={6} mdOffset={3}>
                                <Link to={buttonConfig.route}>
                                    <Button block>{buttonConfig.text}</Button>
                                </Link>
                            </Col>
                        </Row>
                    ))
                }
            </Grid>
        );
    }
}

export default Home;