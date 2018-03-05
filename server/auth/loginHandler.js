const express = require('express')
const {errorResponse} = require('../requestHelpers')
const R = require('ramda')

const noLoginRequiredPaths = [
  /^\/login.*/,
  /^\/img\//,
  /^\/css\//,
  /^\/auth\/google.*/]

const loginRequiredPaths = [
  /^\/private.*/
]

const loginCheck = (req, res, next) => {
  if (!req.user) {
    const acceptHeader = req.header('Accept')
    if (acceptHeader && acceptHeader.indexOf('application/json') !== -1) {
      res.status(401).json({error: 'Not logged in'})
    } else {
      const redirectSuffix = req.url === '/' ? '' : req.url
      res.redirect('/login' + redirectSuffix)
    }
  } else {
    next()
  }
}

const loginPage = (req, res, next) =>
  express.static(`${__dirname}/../../web-resources/login.html`)(req, res, next)

module.exports.init = app => {

  app.use((req, res, next) => {
    if (R.any(allowedRegex => req.path.match(allowedRegex), loginRequiredPaths)) {
      loginCheck(req, res, next)
    } else {
      next()
    }
  })

  app.use('/login*', async (req, res, next) => {
    try {
      if (req.user) {
        res.redirect('/')
      } else {
        loginPage(req, res, next)
      }
    } catch (err) {
      errorResponse(res, err)
    }
  })

  app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/login')
  })
}
