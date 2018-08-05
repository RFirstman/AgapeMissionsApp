import React from "react";
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Button, Glyphicon, Col, Row } from "react-bootstrap";

import renderField from "./renderField";
import FormWrapper from "./FormWrapper";

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
    <div>
        <div>
            <Button type="button" onClick={() => fields.push({})}>
                Add Member
            </Button>
            {submitFailed && error && <span>{error}</span>}
        </div>
        {fields.map((member, index) => (
            <Row key={index} style={{ margin: "15px" }}>
                <Col md={8} mdOffset={2}>
                    <span className="pull-left" style={{ fontSize: "18px", marginRight: "10px" }}>Member #{index + 1}</span>
                    <Button
                        className="pull-right"
                        type="button"
                        onClick={() => fields.remove(index)}>
                        <Glyphicon glyph="trash" />
                    </Button>
                </Col>
                <Col md={6} mdOffset={3}>
                    <Field
                        name={`${member}.firstName`}
                        type="text"
                        component={renderField}
                        placeholder="First Name"
                    />
                    <Field
                        name={`${member}.lastName`}
                        type="text"
                        component={renderField}
                        placeholder="Last Name"
                    />
                </Col>
            </Row>
        ))}
    </div>
);

function GroupForm({ handleSubmit, pristine, reset, submitting }) {

    return (
        <form onSubmit={handleSubmit}>
            <FieldArray name="members" component={renderMembers} />
            <div style={{ marginTop: "15px" }}>
                <Button type="submit" disabled={submitting}>
                    Submit
                </Button>
                <Button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </Button>
            </div>
        </form>
    );
}

export default FormWrapper(reduxForm({
    form: "group"
})(GroupForm), "Create Group");