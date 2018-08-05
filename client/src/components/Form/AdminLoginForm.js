/* Used for admnistrator login */
import React from "react";
import { Field, reduxForm } from 'redux-form'
import { Row, Button } from "react-bootstrap";

import FormWrapper from "../Form/FormWrapper";

function AdminLoginForm(props) {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Row>
                {/* <label htmlFor="email">Email</label> */}
                <Field name="email" component="input" type="text" placeholder="Email" />
            </Row>
            <Row>
                {/* <label htmlFor="password">Password</label> */}
                <Field name="password" component="input" type="password" placeholder="Password" />
            </Row>
            <Button type="submit">Submit</Button>
        </form>
    );
}

const form = reduxForm({
    form: "adminLogin",
})(AdminLoginForm);

export default FormWrapper(form, "Login")