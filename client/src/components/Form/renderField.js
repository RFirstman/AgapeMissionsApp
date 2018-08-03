/**
 * Source: https://redux-form.com/6.6.3/examples/wizard/
 */
import React from 'react'
import { FormControl } from "react-bootstrap";

// const renderField = ({ input, label, type, meta: { touched, error } }) => (
//     <div>
//         <label>{label}</label>
//         <div>
//             <input {...input} placeholder={label} type={type} />
//             {touched && error && <span style={{ color: "red" }}>{error}</span>}
//         </div>
//     </div>
// )

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <FormControl {...input} placeholder={label} type={type} />
            {touched && error && <span style={{ color: "red" }}>{error}</span>}
        </div>
    </div>
)

export default renderField