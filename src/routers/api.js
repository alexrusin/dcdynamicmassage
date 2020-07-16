const express = require('express')
const router = new express.Router()
const honeypot = require('../middleware/honeypot')
const contactFormValidator = require('../middleware/contact-form-validator')

router.post('/api/contact-form', honeypot, contactFormValidator, (req, res) => {
    // console.log(req.body);
    res.send({
        message: 'Form submitted'
    })
})

module.exports = router