import React, { Component } from "react";
import { Button, Col, Grid, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import "../App.css";

class Home extends Component {
    render() {
        const buttonConfigs = [
            { text: "Register", route: "/register" },
            { text: 'Lunch Order', route: "/lunchorder" },
            { text: 'Groups', route: "/groups" },

        ];
        return (
            <Grid>
                <Row>
                    <header className="App-header">
                        <img src={logo} className="img-response center-block" alt="logo" />
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        {/* <h1 className="App-title">Agape Missions</h1> */}
                    </header>
                </Row>
                {
                    buttonConfigs.map((buttonConfig, index) => (
                        <Row key={index}>
                            <Col xs={6} xsOffset={3}>
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