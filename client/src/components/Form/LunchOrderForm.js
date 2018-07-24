import React from "react";
import { Field, reduxForm } from 'redux-form'
import { Grid, Row, Button } from "react-bootstrap";

function LunchOrderForm(props) {
    const { handleSubmit } = props;
    return (
        <Grid>
            <form onSubmit={handleSubmit}>
                <Row>
                    <label htmlFor="name">Name</label>
                    <Field name="name" component="input" type="text" />
                </Row>
                <Row>
                    <label>Sandwich Type</label>
                    <Field name="sandwich" component="input" type="text" />
                </Row>
                <Row>
                    <label>Group</label>
                    <Field name="group" component="input" type="number" />
                </Row>
                <Button type="submit">Submit</Button>
            </form>
        </Grid>
    );
}

export default reduxForm({
    form: "lunchOrder"
})(LunchOrderForm);