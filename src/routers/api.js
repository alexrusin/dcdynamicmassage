const express = require('express')
const router = new express.Router()
const honeypot = require('../middleware/honeypot')

router.post('/api/contact-form', honeypot, (req, res) => {
    // console.log(req.body);
    res.send({
        message: 'Form submitted'
    })
})

module.exports = router