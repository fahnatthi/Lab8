const { logger } = require('./logger')
const { Sentry } = require('./sentry')
const { converter } = require('./converter')


logger.info("Start Application")

try {
    let price = converter(18)
    logger.info(`converter thai baht to us dollar ---> 10B ${price}$`)
}
catch(exception) {
    logger.error(exception)
    Sentry.captureException(exception)
}

