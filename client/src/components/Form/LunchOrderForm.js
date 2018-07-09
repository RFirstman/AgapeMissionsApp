import React from "react";
import { Field, reduxForm } from 'redux-form'
import { Grid } from "@material-ui/core";

function LunchOrderForm(props) {
    const { handleSubmit } = props;
    return (
        <Grid container justify="center">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field name="name" component="input" type="text" />
                </div>
                <div>
                    <label>Sandwich Type</label>
                    <Field name="sandwich" component="input" type="text" />
                </div>
                <div>
                    <label>Group</label>
                    <Field name="group" component="input" type="number" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </Grid>
    );
}

export default reduxForm({
    form: "lunchOrder"
})(LunchOrderForm);