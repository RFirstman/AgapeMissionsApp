/* Used for admnistrator login */
import React from "react";
import { Field, reduxForm } from 'redux-form'
import { Grid } from "@material-ui/core";

function AdminLoginForm(props) {
    const { handleSubmit } = props;
    return (
        <Grid container justify="center">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" component="input" type="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </Grid>
    );
}

export default reduxForm({
    form: "adminLogin",
})(AdminLoginForm);