import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../renderField'
import { Grid } from '@material-ui/core';
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
            <Grid item>
                <Field name="church" type="text" component={renderField} label="Church" />
            </Grid>
            <Grid item>
                <Field name="birthDate" type="date" component={renderDatePicker} label="Birth Date" />
            </Grid>
            <div>
                <label>Sex</label>
                <Grid item>
                    <label><Field name="sex" component="input" type="radio" value="male" /> Male</label>
                    <label><Field name="sex" component="input" type="radio" value="female" /> Female</label>
                    <label><Field name="sex" component="input" type="radio" value="other" />Other</label>
                    <Field name="sex" component={renderError} />
                </Grid>
            </div>
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
})(SecondPage);