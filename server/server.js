require('dotenv').config()

const path = require('path')
const sessionInitializer = require('./sessionInitializer')
const loginHandler = require('./auth/loginHandler')
const userApi = require('./user/userApi')
const authenticator = require('./auth/authenticator')
const headerMiddleware = require('./headerMiddleware')
const runMigrations = require('./migration/migrationRunner')

const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')

const app = express()

runMigrations()

// app initializations
headerMiddleware.init(app)
sessionInitializer.init(app)
// authenticator.init(app)
loginHandler.init(app)
userApi.init(app)

app.use(compression({threshold: 512}))

app.use('/', express.static(`${__dirname}/../dist`))

app.use('/img/', express.static(`${__dirname}/../web-resources/img`))
app.use('/css/', express.static(`${__dirname}/../web-resources/css`))
app.use('/webfonts/', express.static(`${__dirname}/../web-resources/webfonts`))

app.use(bodyParser.json({limit: '5000kb'}))

const httpServerPort = process.env.PORT || '8080'
app.listen(httpServerPort, () => {
  console.log('server listening on port', httpServerPort)
})
