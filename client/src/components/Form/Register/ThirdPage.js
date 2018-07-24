import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../renderField'
import { Row } from 'react-bootstrap';

import validate from "./validate";

const ThirdPage = (props) => {
    const { handleSubmit, previousPage } = props
    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <Field name="mailingAddress" type="text" component={renderField} label="mailingAddress" />
            </Row>
            <Row>
                <Field name="city" type="text" component={renderField} label="City" />
            </Row>
            <Row>
                <Field name="state" type="text" component={renderField} label="State" />
            </Row>
            <Row>
                <Field name="zipCode" type="text" component={renderField} label="Zip Code" />
            </Row>
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
})(ThirdPage);