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
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title>
                                    <strong>Group {group.number}</strong>
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                Members:
                                <ul>
                                    {group.users.map(user => <li>{user.firstName + " " + user.lastName}</li>)}
                                </ul>
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
                <Col md={6} mdOffset={3}>
                    {this.renderGroups()}
                </Col>
            </div>
        );
    }
}

export default GroupPage;