const validator = require('validator')

let errors = {};
const contactFormValidator = (req, res, next) => {
    const requiredFields = ['first_name', 'email', 'message'];

    for (const field in req.body) {
        checkRequired(req, field, requiredFields);
    }

    if (Object.keys(errors).length === 0) {
        return next();
    }

    res.status(422).send({
        errors
    })

}

const checkRequired = (req, field, list) => {
    if (req.body[field]) {
        return;
    }

    if (list.includes(field)) {
        addToErrors(field, 'This field is required');
    }
}

const addToErrors = (field, message) => {
    if (errors.hasOwnProperty(field)) {
        return
    }

    errors[field] = [message];
}

module.exports = contactFormValidator;