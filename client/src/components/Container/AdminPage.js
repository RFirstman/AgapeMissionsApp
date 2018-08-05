import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Col, Row, Tabs, Tab } from "react-bootstrap";

import AdminLoginForm from "../Form/AdminLoginForm";
import * as actions from "../../reducers/actions";
import UserForm from "../Form/UserForm";
import userService from "../../services/userService";
import CreateGroupForm from "../Form/CreateGroupForm";

class AdminPage extends Component {
    state = {
        users: []
    }

    async componentDidMount() {
        let users = await userService.getUsers();
        if (users) {
            this.setState({ users })
        }
    }

    renderContent() {
        if (this.props.loggedIn) {
            return (
                <Tabs id="Admin">
                    <Tab eventKey="createGroup" title="Create Group">
                        {/* <GroupForm /> */}
                        <CreateGroupForm users={this.state.users}/>
                    </Tab>
                    <Tab eventKey="editGroup" title="Edit Group" disabled>
                    </Tab>
                    <Tab eventKey="createJobSite" title="Create Job Site" disabled>
                    </Tab>
                    <Tab eventKey="editJobSite" title="Edit Job Site" disabled>
                    </Tab>
                    <Tab eventKey="addUser" title="Add User">
                        <UserForm onSubmit={this.props.addUser} />
                    </Tab>
                    <Button onClick={this.props.adminLogout}>Log Out</Button>
                </Tabs>
            );
        }
        return <AdminLoginForm onSubmit={this.props.adminLogin} />
    }

    render() {
        // actions.addUser({ firstName: "Rob", lastName: "Firstman" })
        return (
            <div>
                <Row>
                    <header className="App-header">
                        <h1 className="App-title">Administrator Access</h1>
                    </header>
                </Row>
                <Row>
                    <Col md={6} mdOffset={3}>
                        {this.renderContent()}
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.admin.loggedIn
    }
}

export default connect(mapStateToProps, actions)(AdminPage);