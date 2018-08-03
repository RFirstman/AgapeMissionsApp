import React from "react";
import { Field, FieldArray, reduxForm } from 'redux-form';

import renderField from "./renderField";
import { Button, Panel } from "react-bootstrap";

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
    <div>
        <div>
            <Button type="button" onClick={() => fields.push({})}>
                Add Member
            </Button>
            {submitFailed && error && <span>{error}</span>}
        </div>
        {fields.map((member, index) => (
            <div key={index}>
                <Button
                    type="button"
                    onClick={() => fields.remove(index)}>
                    Remove Member
                </Button>
                <h4>Member #{index + 1}</h4>
                <Field
                    name={`${member}.firstName`}
                    type="text"
                    component={renderField}
                    label="First Name"
                />
                <Field
                    name={`${member}.lastName`}
                    type="text"
                    component={renderField}
                    label="Last Name"
                />
            </div>
        ))}
    </div>
);

function GroupForm({ handleSubmit, pristine, reset, submitting }) {

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FieldArray name="members" component={renderMembers} />
                <div style={{marginTop: "15px"}}>
                    <Button type="submit" disabled={submitting}>
                    Submit
                    </Button>
                    <Button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default reduxForm({
    form: "group"
})(GroupForm);