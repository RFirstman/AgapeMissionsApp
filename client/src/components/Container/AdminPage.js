import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Col, Row, Tabs, Tab } from "react-bootstrap";

import AdminLoginForm from "../Form/AdminLoginForm";
import * as actions from "../../reducers/actions";
import UserForm from "../Form/UserForm";
import userService from "../../services/userService";
import CreateGroupForm from "../Form/CreateGroupForm";
import ApproveUserForm from "../Form/ApproveUserForm";
import JobSiteForm from "../Form/JobSiteForm";

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            approvedUsers: [],
            unapprovedUsers: []
        }
        this.updateUserList = this.updateUserList.bind(this);
    }
    

    componentDidMount() {
        this.updateUserList();
    }

    async updateUserList() {
        let users = await userService.getUsers();
        let approvedUsers = []
        let unapprovedUsers = []
        if (users && users.length) {
            users.forEach(user => {
                if (user.approved) {
                    approvedUsers.push({
                        text: user.firstName + " " + user.lastName,
                        ...user
                    })
                } else {
                    unapprovedUsers.push({
                        text: user.firstName + " " + user.lastName,
                        ...user
                    })
                }
            })
        }
        this.setState({ users, approvedUsers, unapprovedUsers })
    }

    renderContent() {
        if (this.props.loggedIn) {
            return (
                <Tabs id="Admin">
                    <Tab eventKey="createGroup" title="Create Group">
                        {/* <GroupForm /> */}
                        <CreateGroupForm users={this.state.approvedUsers} handleSubmit={this.props.addGroup} />
                    </Tab>
                    <Tab eventKey="editGroup" title="Edit Group" disabled>
                    </Tab>
                    <Tab eventKey="createJobSite" title="Create Job Site">
                        <JobSiteForm onSubmit={this.props.addJobSite}/>
                    </Tab>
                    <Tab eventKey="editJobSite" title="Edit Job Site" disabled>
                    </Tab>
                    <Tab eventKey="addUser" title="Add User">
                        <UserForm onSubmit={({firstName, lastName}) => {
                            this.props.addUser({firstName, lastName});
                            this.updateUserList()
                        }}/>
                    </Tab>
                    <Tab eventKey="approveUser" title="Approve Users">
                        <ApproveUserForm handleSubmit={userIds => {
                            this.props.approveUsers(userIds);
                            this.updateUserList()
                        }} 
                        users={this.state.unapprovedUsers}/>
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
                    <Col md={8} mdOffset={2}>
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