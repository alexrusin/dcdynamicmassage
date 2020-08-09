const path = require('path')
const express = require('express')
const hbs = require('hbs')
const Datastore = require('nedb')
const favicon = require('serve-favicon')

const logger = require('./services/logger')
const errorHandler = require('./services/error-handler');

const app = express()

// Define paths for Express config
const publicPath = path.join(__dirname, '../public')
const faviconPath = path.join(__dirname, '../public', 'favicon.ico')
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
app.use(favicon(faviconPath));

app.use(express.json());

const apiRouter = require('./routers/api')
app.use(apiRouter);

app.get('', (req, res) => {
    const jsonLd = `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Introducing DC Dynamic Massage",
      "description": "Massage therapy is not just a luxury, it's a key piece of your health and wellness plan. Regularly scheduled self-care plays a big part in how healthy and vital you'll be with each passing year.",
      "thumbnailUrl": [
        "http://i3.ytimg.com/vi/nOxB9b3jGpQ/maxresdefault.jpg",
        "http://i3.ytimg.com/vi/nOxB9b3jGpQ/hqdefault.jpg"
       ],
      "uploadDate": "2016-03-31T08:00:00+08:00",
      "duration": "PT1M11S",
      "contentUrl": "https://www.youtube.com/watch?v=nOxB9b3jGpQ",
      "embedUrl": "https://www.youtube.com/embed/nOxB9b3jGpQ",
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": { "@type": "http://schema.org/WatchAction" },
        "userInteractionCount": 361
      }
    }
    </script>`;

    res.render('index', {
        jsonLd
    })
})

app.get('/about', (req, res) => {

    const jsonLd = `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "image": "https://dnh9wukuui1am.cloudfront.net/images/services/_imageLarge/DC-Dynamic-Massage-owner-2020.jpg",
      "url": "http://dcdynamicmassage.com",
      "name": "DC Dynamic Massage",
      "description": "Massage therapy is not just a luxury, it's a key piece of your health and wellness plan. Regularly scheduled self-care plays a big part in how healthy and vital you'll be with each passing year.",
      "telephone": "818.703.8480",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6400 Canoga Ave #333",
        "addressLocality": "Woodland Hills",
        "addressRegion": "CA",
        "postalCode": "91367",
        "addressCountry": "USA"
      }
    }
    </script>`;

    res.render('about', {
        title: 'About | DC Dynamic Massage',
        metaDescription: 'Our intention as massage therapists is to educate our clients about the importance of massage. We show you the importance of sports massage and range of motion.  This will help you expand knowledge of your body and improve performance and recovery process',
        jsonLd
    })
})

app.get('/services', (req, res) => {
    res.render('services', {
        title: 'Services | DC Dynamic Massage'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Us | DC Dynamic Massage'
    })
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