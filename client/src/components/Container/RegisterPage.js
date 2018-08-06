import React, { Component } from "react";
import RegisterForm from "../Form/Register/RegisterForm";
import { connect } from "react-redux";
import { Grid, Jumbotron } from "react-bootstrap";

import { submitRegistration } from "../../reducers/actions";

class RegisterPage extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron className="App-header">
                    <p>Register</p>
                </Jumbotron>
                <RegisterForm onSubmit={this.props.onSubmit} />
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: (values) => dispatch(submitRegistration(values))
}); 

export default connect(null, mapDispatchToProps)(RegisterPage);