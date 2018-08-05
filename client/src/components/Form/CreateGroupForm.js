import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Field, reduxForm, change } from 'redux-form';
import { Button, ListGroup, ListGroupItem, Col, Row } from "react-bootstrap";

import renderField from "./renderField";
import FormWrapper from "./FormWrapper";
import listField from "./listField";

class CreateGroupForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.selectedUsers = []
    }

    handleChange(index) {
        this.selectedUsers.push(this.props.users[index].text)
        this.props.change("selectedUsers", this.selectedUsers.join(", "))
    }

    render() {
        let { users, onChange, handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form>
                <Field name="users" component={listField} items={users} onSelect={this.handleChange} />
                <Field name="selectedUsers" type="text" component={renderField}/>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ change }, dispatch)
}

export default FormWrapper(reduxForm({
    form: "group"
}, null, mapDispatchToProps)(CreateGroupForm), "Create Group");