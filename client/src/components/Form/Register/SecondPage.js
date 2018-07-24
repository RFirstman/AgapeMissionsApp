import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../renderField'
import { Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";

import validate from "./validate";

const renderError = ({ meta: { touched, error } }) => touched && error ?
    <span>{error}</span> : false;

const renderDatePicker = ({ input, placeholder, defaultValue, meta: { touched, error } }) => (
    <div>
        <DatePicker/>
        {touched && error && <span>{error}</span>}
    </div>
);

const SecondPage = (props) => {
    const { handleSubmit, previousPage } = props
    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <Field name="church" type="text" component={renderField} label="Church" />
            </Row>
            <Row>
                <Field name="birthDate" type="date" component={renderDatePicker} label="Birth Date" />
            </Row>
            <div>
                <label>Sex</label>
                <Row>
                    <label><Field name="sex" component="input" type="radio" value="male" /> Male</label>
                    <label><Field name="sex" component="input" type="radio" value="female" /> Female</label>
                    <label><Field name="sex" component="input" type="radio" value="other" />Other</label>
                    <Field name="sex" component={renderError} />
                </Row>
            </div>
            <Row>
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </Row>
        </form>
    )
}

export default reduxForm({
    form: 'register',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount,
    validate
})(SecondPage);