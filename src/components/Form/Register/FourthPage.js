import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../renderField'
import { Grid } from '@material-ui/core';

import validate from "./validate";

const ThirdPage = (props) => {
    const { handleSubmit, previousPage } = props
    return (
        <form onSubmit={handleSubmit}>
            <Grid item>
                <Field name="mailingAddress" type="text" component={renderField} label="mailingAddress" />
            </Grid>
            <Grid item>
                <Field name="city" type="text" component={renderField} label="City" />
            </Grid>
            <Grid item>
                <Field name="state" type="text" component={renderField} label="State" />
            </Grid>
            <Grid item>
                <Field name="zipCode" type="text" component={renderField} label="Zip Code" />
            </Grid>
            <Grid item>
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </Grid>
        </form>
    )
}

export default reduxForm({
    form: 'register',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount,
    validate
})(ThirdPage);