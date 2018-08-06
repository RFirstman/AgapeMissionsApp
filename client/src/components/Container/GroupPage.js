import React, { Component } from "react";
//import { connect } from "react-redux";
import axios from "axios";
import { Col, Grid, Row, Panel, PageHeader, PanelGroup } from "react-bootstrap";

class GroupPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groups: []
        }
    }

    async componentDidMount() {
        let groupRes = await axios.get("/api/groups");
        this.setState({ groups: groupRes.data });
    }

    renderJobSites(jobSites) {
        if (!jobSites || !jobSites.length || !jobSites.length < 0) {
            return <Col md={4} mdOffset={4}>No job sites assigned</Col>
        }
        return jobSites.map(jobSite => <Col md={4}>{`${jobSite.city}: ${jobSite.name}`}</Col>)
    }

    renderGroups() {
        if (this.state.groups) {
            return this.state.groups.map((group, index) => {
                return (
                    <Panel eventKey={index}>
                        <Panel.Heading>
                            <Panel.Title toggle>
                                <strong>Group {group.number}</strong>
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                            <Panel>
                                <Panel.Heading>Members</Panel.Heading>
                                <Panel.Body>
                                    {group.users.map(user => <Col md={4}>{`${user.firstName} ${user.lastName}`}</Col>)}
                                </Panel.Body>
                            </Panel>
                            <Panel>
                                <Panel.Heading>Job Sites</Panel.Heading>
                                <Panel.Body>
                                    {this.renderJobSites(group.jobSites)}
                                </Panel.Body>
                            </Panel>
                        </Panel.Body>
                    </Panel>
                );
            })
        }
    }

    render() {
        return (
            <Grid>
                {/* <Jumbotron className="App-Jumbotron">
                    <h2>Groups</h2>
                </Jumbotron> */}
                <Col md={8} mdOffset={2}>
                    <PageHeader>Groups</PageHeader>
                </Col>
                <Col md={8} mdOffset={2}>
                    <PanelGroup accordion>
                        {this.renderGroups()}
                    </PanelGroup>
                </Col>
            </Grid>
        );
    }
}

export default GroupPage;