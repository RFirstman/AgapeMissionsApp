import React, { Component } from "react";
//import { connect } from "react-redux";
import axios from "axios";
import { Col, Grid, Row, Panel, Jumbotron } from "react-bootstrap";

const formatPhone = (number) => {
    let stripped = number.replace(/[\W_]+/g, "");
    return `(${stripped.substring(0, 3)}) ${stripped.substring(3, 6)}-${stripped.substring(6, 9)}`
}

const formatAddress = (address, city, state, zip) => (`${address}, ${city}, ${state} ${zip}`)

class JobSitePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobSites: []
        }
    }

    async componentDidMount() {
        let jobSiteRes = await axios.get("/api/jobSites");
        console.log(jobSiteRes.data)
        this.setState({ jobSites: jobSiteRes.data });
    }

    renderJobSites() {
        if (this.state.jobSites) {
            return this.state.jobSites.map(jobSite => {
                let { name, state, address, city, phone, zip } = jobSite;
                return (
                    <Row>
                        <Panel bsStyle="primary">
                            <Panel.Heading>
                                <Panel.Title>
                                    <strong>{name}</strong>
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Panel>
                                    <Panel.Heading>Members</Panel.Heading>
                                    <Panel.Body>
                                        <Row>
                                            {formatPhone(phone)}
                                        </Row>
                                        <Row>
                                            {formatAddress(address, city, state, zip)}
                                        </Row>
                                    </Panel.Body>
                                </Panel>
                            </Panel.Body>
                        </Panel>
                    </Row>
                );
            })
        }
    }

    render() {
        return (
            <Grid>
                <Jumbotron className="App-Jumbotron">
                    <p>JobSites</p>
                </Jumbotron>
                <Col md={8} mdOffset={2}>
                    {this.renderJobSites()}
                </Col>
            </Grid>
        );
    }
}

export default JobSitePage;