import React from 'react'
import { ListGroup, ListGroupItem } from "react-bootstrap";

const listField = ({ users, onClick, input, label, placeholder, type, meta: { touched, error } }) => (
    <ListGroup>
        {/* <FormControl {...input} placeholder={placeholder} type={type} /> */}
        {users && users.map((user, index) => {
            return (
                <ListGroupItem key={index} onClick={onClick}>
                    {user.firstName + " " + user.lastName}
                </ListGroupItem>
            );
        })}
        {touched && error && <span style={{ color: "red" }}>{error}</span>}
    </ListGroup>
)

export default listField