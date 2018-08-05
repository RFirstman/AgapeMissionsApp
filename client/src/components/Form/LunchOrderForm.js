import React from "react";
import { Field, reduxForm } from 'redux-form'
import { Col, Row, Button } from "react-bootstrap";

import FormWrapper from "./FormWrapper";
import renderField from "./renderField";

function LunchOrderForm(props) {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Col md={6} mdOffset={3}>
                <Row>
                    <Field name="name" component={renderField} placeholder="Name" type="text" />
                </Row>
                <Row>
                    <Field name="sandwich" component={renderField} placeholder="Sandwich" type="text" />
                </Row>
                <Row>
                    <Field name="group" component={renderField} placeholder="Group" type="number" />
                </Row>
                <Button type="submit">Submit</Button>
            </Col>
        </form>
    );
}

const form = reduxForm({
    form: "lunchOrder"
})(LunchOrderForm);

export default FormWrapper(form, "Lunch Order");