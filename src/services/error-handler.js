const logger = require('./logger');

const errorHandler = function(err, req, res, next) {
  logger.error(err);
  
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { 
        error: err,
        production: process.env.NODE_ENV == 'production'
        }
    )
}

module.exports = errorHandler;