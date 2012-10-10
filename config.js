
var path = require('path');

module.exports = {

  http: {
    port: 3000
  },

  redis: {
    host: 'localhost',
    options: {}
  },

  redisSessionStore: {
    ttl: 60 * 60 * 24 * 60, // = 60 days (in seconds)
    db: 0,
    prefix: 'sess:'
  },

  session: {
    /*
    key       cookie name defaulting to connect.sid
    secret    session cookie is signed with this secret to prevent tampering
    cookie    session cookie settings, defaulting to
              { path: '/', httpOnly: true, maxAge: null }
    proxy     trust the reverse proxy when setting secure cookies
              (via "x-forwarded-proto")
    */

    key: 'sid',
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 60 // = 60 days (in miliseconds)
    }
  },

  middleware: {
    logger: 'dev',

    favicon: path.resolve('./public/favicon.ico'),

    bodyParser: {},

    methodOverride: '_method',

    cookieParser: 'ogXMXgRbnInguKYYx9Pm',

    csrf: {
      enabled: true
    }
  }

};
