import React, { Component } from "react";
import RegisterForm from "../Form/Register/RegisterForm";
import { connect } from "react-redux";
import { Col, Grid, PageHeader } from "react-bootstrap";

import { submitRegistration } from "../../reducers/actions";

class RegisterPage extends Component {
    render() {
        return (
            <Grid>
                <Col md={8} mdOffset={2}>
                    <PageHeader>Register</PageHeader>
                </Col>
                <Col md={8} mdOffset={2}>
                    <RegisterForm onSubmit={this.props.onSubmit} />
                </Col>
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: (values) => dispatch(submitRegistration(values))
});

export default connect(null, mapDispatchToProps)(RegisterPage);