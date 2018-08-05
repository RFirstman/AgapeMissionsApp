import React, { Component } from "react";
//import { connect } from "react-redux";
import axios from "axios";
import { Col, Row, Panel } from "react-bootstrap";

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

    renderGroups() {
        if (this.state.groups) {
            return this.state.groups.map(group => {
                return (
                    <Row>
                        <Panel bsStyle="primary">
                            <Panel.Heading>
                                <Panel.Title>
                                    <strong>Group {group.number}</strong>
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Panel>
                                    <Panel.Heading>Members</Panel.Heading>
                                    <Panel.Body>
                                        {group.users.map(user => <Col md={4}>{user.firstName + " " + user.lastName}</Col>)}
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
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Groups</h1>
                </header>
                <Col md={8} mdOffset={2}>
                    {this.renderGroups()}
                </Col>
            </div>
        );
    }
}

export default GroupPage;