const session = require('express-session')
const pgSession = require('connect-pg-simple')(session)
const db = require('./db/db')

const sessionOptions = {
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: false},
  store: new pgSession({
    pool : db.$pool,
    tableName : 'user_sessions'
  })
}

module.exports.init = app => app.use(session(sessionOptions))
