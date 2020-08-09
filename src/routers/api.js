const express = require('express')
const router = new express.Router()
const honeypot = require('../middleware/honeypot')
const contactFormValidator = require('../middleware/contact-form-validator')
const { sendContactFormEmail } = require('../email/contact-form')

const Datastore = require('nedb');


router.post('/api/contact-form', honeypot, contactFormValidator, (req, res) => {
    
    try {
        sendContactFormEmail(req.body);
    } catch (e) {
        res.status(400).send({
            errors: {
                message: ['The form can\'t be submitted at this time.  Please try again later']
            }
        })
    }

    res.send({
        message: 'Form submitted'
    })
})

router.get('/api/coupons', (req, res) => {
       
        const coupons = new Datastore({ filename: './database/coupons.db', autoload: true });

        coupons.find({}, (err, docs) => {

            if (err) {
                return res.send({
                    coupons: []
                })
            }

            res.send({
                coupons: docs
            })
        })  
})

module.exports = router