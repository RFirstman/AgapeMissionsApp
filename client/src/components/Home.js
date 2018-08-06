import React, { Component } from "react";
import { Button, Col, Grid, Jumbotron, Row, ResponsiveEmbed } from "react-bootstrap";
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
                <Jumbotron className="App-header center-block" style={{maxHeight: 200}}>
                    <ResponsiveEmbed a16by9 style={{ flex: 1, width: null, height: null, maxHeight: 175,resizeMode: "contain" }}>
                        <embed src={logo} type="image/svg+xml" />
                    </ResponsiveEmbed>
                </Jumbotron>
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