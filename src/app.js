const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, 'templates/views')
const partialsPath = path.join(__dirname, 'templates/partials')
const layoutsPath = path.join(__dirname, 'templates/layouts')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicPath))

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

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page not found'
    })
})

app.listen(3030, () => {
    console.log('Server is up on port 3030')
})