/* Used for admnistrator login */
import React from "react";
import { Field, reduxForm } from 'redux-form'
import { Grid, Row, Button } from "react-bootstrap";

function AdminLoginForm(props) {
    const { handleSubmit } = props;
    return (
        <Grid>
            <form onSubmit={handleSubmit}>
                <Row>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="text" />
                </Row>
                <Row>
                    <label htmlFor="password">Password</label>
                    <Field name="password" component="input" type="password" />
                </Row>
                <Button type="submit">Submit</Button>
            </form>
        </Grid>
    );
}

export default reduxForm({
    form: "adminLogin",
})(AdminLoginForm);