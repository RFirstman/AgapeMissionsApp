const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.sex) {
        errors.sex = 'Required'
    }
    if (!values.mailingAddress) {
        errors.mailingAddress = 'Required'
    }
    if (!values.city) {
        errors.city = "Required"
    }
    if (!values.state) {
        errors.state = "Required"
    }
    if (!values.zipCode) {
        errors.zipCode = "Required"
    } else if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(values.zipCode)) {
        errors.zipCode = "Please enter a valid Zip Code"
    }
    
    return errors
}

export default validate