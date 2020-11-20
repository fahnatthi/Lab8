const winston = require('winston');

const { Timber } = require("@timberio/node")
const { TimberTransport } = require("@timberio/winston")

const timber = new Timber(eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2FwaS50aW1iZXIuaW8vIiwiZXhwIjpudWxsLCJpYXQiOjE2MDU4OTUwNTYsImlzcyI6Imh0dHBzOi8vYXBpLnRpbWJlci5pby9hcGlfa2V5cyIsInByb3ZpZGVyX2NsYWltcyI6eyJhcGlfa2V5X2lkIjoxMTI0MCwidXNlcl9pZCI6ImFwaV9rZXl8MTEyNDAifSwic3ViIjoiYXBpX2tleXwxMTI0MCJ9.yT6FrB6CisFZ8qokJgxLx-E-Ol-tlIy1CuoKjTOdgkY
  )

const logger = createLogger({
  level: 'info',
  format: alignedWithColorsAndTime,
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'log/app.log' }),
  ]
})

module.exports = {
  logger
}