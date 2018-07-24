import React from "react";
import { Field, FieldArray, reduxForm } from 'redux-form'

import renderField from "./renderField";

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push({})}>
                Add Member
            </button>
            {submitFailed && error && <span>{error}</span>}
        </li>
        {fields.map((member, index) => (
            <li key={index}>
                <button
                    type="button"
                    title="Remove Member"
                    onClick={() => fields.remove(index)}
                />
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
            </li>
        ))}
    </ul>
);

function GroupForm({ handleSubmit, pristine, reset, submitting }) {

    return (
        <form onSubmit={handleSubmit}>
            <FieldArray name="members" component={renderMembers} />
            <div>
                <button type="submit" disabled={submitting}>
                Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values
                </button>
            </div>
        </form>
    );
}

export default reduxForm({
    form: "group"
})(GroupForm);