import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Row } from 'react-bootstrap';

import validate from "./validate";
import renderField from '../renderField';

const FirstPage = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <Field name="firstName" type="text" component={renderField} label="First Name" />
            </Row>
            <Row>
                <Field name="lastName" type="text" component={renderField} label="Last Name" />
            </Row>
            <Row>
                <Field name="email" type="email" component={renderField} label="Email" />
            </Row>
            <Row>
                <div>
                    <button type="submit" className="next">Next</button>
                </div>
            </Row>
        </form>
    )
}

export default reduxForm({
    form: 'register',               // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount,
    validate
})(FirstPage);