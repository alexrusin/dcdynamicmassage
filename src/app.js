const path = require('path')
const express = require('express')
const hbs = require('hbs')
const Datastore = require('nedb')

const logger = require('./services/logger')
const errorHandler = require('./services/error-handler');

const app = express()

// Define paths for Express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, 'templates/views')
const partialsPath = path.join(__dirname, 'templates/partials')
const layoutsPath = path.join(__dirname, 'templates/layouts')

let port = process.env.PORT;


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicPath))
app.use(express.json());

const apiRouter = require('./routers/api')
app.use(apiRouter);

app.get('', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {

    res.render('about')
})

app.get('/services', (req, res) => {
    res.render('services')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/contact-form-submitted', (req, res) => {
    res.render('contact-form-submitted')
})

app.get('/coupons/:couponId', (req, res) => {
     const coupons = new Datastore({ filename: './database/coupons.db', autoload: true });

        coupons.find({_id: req.params.couponId}, (err, docs) => {

            if (err) {
                return res.render('coupon-page', {
                    coupon: null
                })
            }

            res.render('coupon-page', {
                coupon: JSON.stringify(docs[0])
            })
        })
})

app.get('*', (req, res) => {
    res.render('404')
})

app.use(errorHandler);

if (!port) {
    port = 3030;
}

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})