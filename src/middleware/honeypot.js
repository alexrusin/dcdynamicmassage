const honeypot = (req, res, next) => {
    if (!req.body.subject) {
        return next()
    }

    res.status(422).send({
        errors: {
            message: ['The form can\'t be submitted at this time.  Please try again later']
        }
    })
}

module.exports = honeypot