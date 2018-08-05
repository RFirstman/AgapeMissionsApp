import React from 'react'
import { ListGroup, ListGroupItem } from "react-bootstrap";

const listField = ({ items, input, onSelect, selectedIndices = []}) => {
    return (
        <ListGroup>
            {items && items.length > 0 && items.map((item, index) => {
                if (selectedIndices.includes(index)) {
                    return (
                        <ListGroupItem
                            key={index}
                            onClick={() => onSelect(index)} {...input}
                            active
                        >
                            {item.text}
                        </ListGroupItem>
                    );
                }
                return (
                    <ListGroupItem
                        key={index}
                        onClick={() => onSelect(index)} {...input}
                    >
                        {item.text}
                    </ListGroupItem>
                );

            })}
            {/* {touched && error && <span style={{ color: "red" }}>{error}</span>} */}
        </ListGroup>
    )
}

export default listField