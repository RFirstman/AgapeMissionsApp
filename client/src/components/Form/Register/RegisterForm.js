import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import PropTypes from "prop-types";

import validate from "./validate";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }
    
    render() {
        const { onSubmit } = this.props;
        const { page } = this.state;

        return (
            <Grid>
                {page === 1 && <FirstPage onSubmit={this.nextPage} />}
                {page === 2 && <SecondPage onSubmit={this.nextPage} previousPage={this.previousPage} />}
                {page === 3 && <ThirdPage onSubmit={this.nextPage} previousPage={this.previousPage} />}
            </Grid>
        );
    }
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default RegisterForm;