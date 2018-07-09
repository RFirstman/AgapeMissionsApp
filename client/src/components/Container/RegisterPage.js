import React, { Component } from "react";
import RegisterForm from "../Form/Register/RegisterForm";
import { connect } from "react-redux";

import { submitRegistration } from "../../reducers/actions";

class RegisterPage extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Register</h1>
                </header>
                <RegisterForm onSubmit={this.props.onSubmit} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: (values) => dispatch(submitRegistration(values))
}); 

export default connect(null, mapDispatchToProps)(RegisterPage);