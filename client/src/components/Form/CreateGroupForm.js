import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Field, FieldArray, reduxForm, change } from 'redux-form';
import { Button, ListGroup, ListGroupItem, Col, Row, Panel } from "react-bootstrap";

import renderField from "./renderField";
import FormWrapper from "./FormWrapper";
import listField from "./listField";

class CreateGroupForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectedUsers: [],  // contains names of selected users
            selectedIndices: [] // contains indices of selected users
        }
    }

    toggleActive(prevIndices, index) {
        if (prevIndices.includes(index)) {
            return prevIndices.filter(i => i !== index);
        }
        return [...prevIndices, index];
    }

    toggleSelectedUser(indices) {
        let newUsers = []
        this.props.users.forEach((user, index) => {
            if (indices.includes(index)) {
                newUsers.push(user.text)
            }
        })
        return newUsers;
    }

    handleChange(index) {
        let prevIndices = this.state.selectedIndices;
        let selectedIndices = this.toggleActive(prevIndices, index);
        let selectedUsers = this.toggleSelectedUser(selectedIndices);

        this.setState({
            selectedIndices,
            selectedUsers
        });
    }

    renderUsers(users) {
        return (
            <Panel bsStyle="info">
                <Panel.Heading>Selected Users</Panel.Heading>
                <Panel.Body>
                    {users.map((text, index) => (
                        <Col key={index} md={4}>
                            {text}
                        </Col>
                    ))}
                </Panel.Body>
            </Panel>
        );
    }


    render() {
        let { users, handleSubmit } = this.props;
        const onSubmit = () => {
            let userIds = []
            this.props.users.map((user, index) => {
                if (this.state.selectedIndices.includes(index)) {
                    userIds.push(user._id);
                }
            })
            console.log(userIds)
            handleSubmit(userIds)
        }
        return (
            <form>
                {/* <Field name="users"
                    component={listField}
                    items={users}
                    onSelect={this.handleChange}
                    selectedIndices={this.state.selectedIndices}
                /> */}
                {listField({
                    items: users,
                    onSelect: this.handleChange,
                    selectedIndices: this.state.selectedIndices
                })}
                {this.renderUsers(this.state.selectedUsers)}
                <Button onClick={onSubmit}>Submit</Button>
            </form>
        )
    }
}


export default FormWrapper((CreateGroupForm), "Create Group");