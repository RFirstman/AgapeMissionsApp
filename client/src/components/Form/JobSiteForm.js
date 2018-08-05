import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Button, Col, Row, Grid } from "react-bootstrap";

import renderField from "./renderField";
import FormWrapper from "./FormWrapper";

function JobSiteForm(props) {
    let { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Col md={10} mdOffset={1}>
                <Row>
                    <Col md={12}>
                        <Field name="name" type="text" placeholder="Name" component={renderField} />
                    </Col>
                </Row>
                <Row>
                    <Col md={8} style={{ paddingRight: "0px" }}>
                        <Field name="address" type="text" placeholder="Street Address" component={renderField} />
                    </Col>
                    <Col md={4} style={{ paddingLeft: "0px" }}>
                        <Field name="zip" type="text" placeholder="Zip Code" component={renderField} />
                    </Col>
                </Row>
                <Row>
                    <Col md={6} style={{ paddingRight: "0px" }}>
                        <Field name="city" type="text" placeholder="City" component={renderField} />
                    </Col>
                    <Col md={6} style={{ paddingLeft: "0px" }}>
                        <Field name="state" type="text" placeholder="State" component={renderField} />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Field name="phone" type="text" placeholder="Phone Number" component={renderField} />
                    </Col>
                </Row>
                <Row>
                    <Button type="submit">Submit</Button>
                </Row>
            </Col>
        </form>
    );
}

const validate = (values) => {
    const errors = {}
    if (!values.name) {
        errors.name = "error"
    }
    if (!values.address) {
        errors.address = "error"
    }
    if (!values.zip) {
        errors.zip = "error"
    } else if (!values.zip.match(/\d{5}/)) {
        errors.zip = "warning"
    }
    if (!values.city) {
        errors.city = "error"
    }
    if (!values.state) {
        errors.state = "error"
    }
    if (!values.phone) {
        errors.phone = "error"
    } else if (!values.phone.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)) {
        errors.phone = "warning"
    }
    return errors
}

const form = reduxForm({
    form: "jobSite",
    validate
})(JobSiteForm);

export default FormWrapper(form, "Create Job Site");