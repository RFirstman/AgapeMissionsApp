import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Button, ListGroup, ListGroupItem, Col, Row } from "react-bootstrap";

import renderField from "./renderField";
import FormWrapper from "./FormWrapper";

function renderUsers(users) {
    const userList = users.map((user, index) => {
        if (user.approved) {
            return (
                <ListGroupItem key={index} onClick={() => console.log(user)}>
                    {user.firstName + " " + user.lastName}
                </ListGroupItem>
            );
        }
    });

    return userList
}

function CreateGroupForm({ users, onChange, handleSubmit, pristine, reset, submitting }) {
    return (
        <ListGroup>
            {renderUsers(users)}
        </ListGroup>
    )
}

export default CreateGroupForm;