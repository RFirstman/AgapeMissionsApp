import React, { Component } from "react";
//import { connect } from "react-redux";
import axios from "axios";
import { Panel } from "react-bootstrap";

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
                    <div>
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title>
                                    <h3>Group {group.number}</h3>
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                Members:
                                <ul>
                                    {group.users.map(user => <li>{user.firstName + " " + user.lastName}</li>)}
                                </ul>
                            </Panel.Body>
                        </Panel>
                    </div>
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
                <div className="container">
                    {this.renderGroups()}
                </div>
            </div>
        );
    }
}

export default GroupPage;