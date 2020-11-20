// Kata #2 
// Converter bath to us Dollar
const { logger } = require('./logger')


function converter(currency) {
   if (isNaN(currency)){
      throw "Currency is not a number."
   }
      logger.info("covert currency")
      return "$" + currency * helper.exchangeRate('th', 'usd')
   }

module.exports = {
   converter:converter
}