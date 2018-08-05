import React from 'react'
import { ListGroup, ListGroupItem } from "react-bootstrap";

const listField = ({ items, input, onSelect, label, placeholder, type, meta: { touched, error } }) => {
    return (
        <ListGroup>
            {/* <FormControl {...input} placeholder={placeholder} type={type} /> */}
            {items && items.length > 0 && items.map((item, index) => {
                return (
                    <ListGroupItem key={index} onClick={() => onSelect(index)}>
                        {item.text}
                    </ListGroupItem>
                );

            })}
            {touched && error && <span style={{ color: "red" }}>{error}</span>}
        </ListGroup>
    )
}

export default listField