import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar, NavItem } from "react-bootstrap";

import * as actions from "../reducers/actions";

class Header extends Component {
    renderContent() {
        console.log(this.props.admin.loggedIn)
        switch (this.props.admin.loggedIn) {
            case true:
                return (
                    <NavItem><Button bsSize="small" onClick={this.props.adminLogout}>Logout</Button></NavItem>
                );
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
            // <nav>
            //     <div className="nav-wrapper">
            //         <Link to="/" className="left brand-logo">
            //             Agape Missions
            //         </Link>
            //         <ul className="right">{this.renderContent()}</ul>
            //     </div>
            // </nav>

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

export default connect(mapStateToProps)(Header);