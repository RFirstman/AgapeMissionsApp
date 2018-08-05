import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar, NavItem } from "react-bootstrap";

import * as actions from "../reducers/actions";

class Header extends Component {
    renderContent() {
        switch (this.props.admin.loggedIn) {
            case true:
                return [
                    <NavItem eventKey={4} href="/admin">Admin Access</NavItem>,
                    <NavItem eventKey={3} onClick={this.props.adminLogout}>Logout</NavItem>
                ];
            default:
                return (
                    <NavItem eventKey={3} href="/admin">
                        Admin Login
                    </NavItem>
                );
        }
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Agape Missions</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                    </Navbar.Collapse>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/groups">Groups</NavItem>
                        <NavItem eventKey={2} href="/jobSites">Job Sites</NavItem>
                    </Nav>
                    <Nav pullRight>
                        {this.renderContent()}
                    </Nav>
                </Navbar.Collapse>
            
            </Navbar>
        );
    }
}

function mapStateToProps({ admin }) {
    return { admin }
}

export default connect(mapStateToProps, actions)(Header);