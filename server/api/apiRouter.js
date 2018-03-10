const express = require('express')

const apiRouter = express.Router()

// init api modules
require('./job/jobApi').init(apiRouter)
require('./user/userApi').init(apiRouter)

// export router
module.exports.router = apiRouter
