import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Button, Col, Row } from "react-bootstrap";
import renderField from "./renderField";
import FormWrapper from "./FormWrapper";

function UserForm(props) {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Col md={6} mdOffset={3}>
                <Row>
                    <Field name="firstName" type="text" placeholder="First Name" component={renderField} />
                    <Field name="lastName" type="text" placeholder="Last Name" component={renderField} />
                    <Button type="submit">Submit</Button>
                </Row>
            </Col>
        </form>
    )
}

export default FormWrapper(reduxForm({
    form: "user"
})(UserForm), "Create User")