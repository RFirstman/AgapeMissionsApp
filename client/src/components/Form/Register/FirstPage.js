import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Grid } from '@material-ui/core';

import validate from "./validate";
import renderField from '../renderField';

const FirstPage = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Grid item>
                <Field name="firstName" type="text" component={renderField} label="First Name" />
            </Grid>
            <Grid item>
                <Field name="lastName" type="text" component={renderField} label="Last Name" />
            </Grid>
            <Grid item>
                <Field name="email" type="email" component={renderField} label="Email" />
            </Grid>
            <Grid item>
                <div>
                    <button type="submit" className="next">Next</button>
                </div>
            </Grid>
        </form>
    )
}

export default reduxForm({
    form: 'register',               // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount,
    validate
})(FirstPage);