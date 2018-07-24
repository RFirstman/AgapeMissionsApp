import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import AdminLoginForm from "../Form/AdminLoginForm";
import * as actions from "../../reducers/actions";
import GroupForm from "../Form/GroupForm";

class AdminPage extends Component {
    renderContent() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <GroupForm />
                    <button onClick={this.props.adminLogout}>Log Out</button>
                </div>);
        }
        return <AdminLoginForm onSubmit={this.props.adminLogin} />
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Edit Groups</h1>
                </header>
                <Link to="/">Home</Link>
                {this.renderContent()}
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