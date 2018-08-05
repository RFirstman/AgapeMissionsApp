/**
 * Source: https://redux-form.com/6.6.3/examples/wizard/
 */
import React from 'react'
import { FormControl, FormGroup } from "react-bootstrap";

const getValidationState = (touched, error) => {
    if (touched && !error) {
        return "success"
    }
    return error;
}

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
    <div>
        {label && <label>{label}</label>}
        <FormGroup validationState={getValidationState(touched, error)}>
            <FormControl {...input} placeholder={placeholder} type={type}  />
            {/* {touched && error && <span style={{ color: "red" }}>{error}</span>} */}
        </FormGroup>
    </div>
)

export default renderField