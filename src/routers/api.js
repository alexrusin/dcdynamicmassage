const express = require('express')
const router = new express.Router()
const honeypot = require('../middleware/honeypot')
const contactFormValidator = require('../middleware/contact-form-validator')
const { sendContactFormEmail } = require('../email/contact-form')
const axios = require('axios')

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

router.get('/api/reviews', (req, res) => {
    getReview()
        .then(function (data) {
            //console.log("COCO");
            //console.log(data);
            //return data;
            res.send(data);
        })
})

const getReview = async () => {
    console.log("Get the reviews");

    let yelpREST = axios.create({
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            "Content-type": "application/json",
        },
    })

    const response = await yelpREST(process.env.API_URL, { params: { key: process.env.API_KEY } })
        .then(({ data }) => {
            console.log("We received the reviews");
            //console.log(data);
            try {
                console.log("We update the reviews");
                //     for (i = 0; i < 3; i++) {
                //     const text = data.reviews[i].text;
                //     const userName = data.reviews[i].user.name;
                //     const userPic = data.reviews[i].user.image_url;
                //     const rating = data.reviews[i].rating;
                return (data);
            } catch (error) {
                console.log("error", error);
            }
        })

    return (response);

}

module.exports = router