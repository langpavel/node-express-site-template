
var path = require('path');

module.exports = {

  express: {
    port: 3000,
    views: path.join(__dirname, 'views'),
    'view engine': 'jade'
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

  middleware: {
    favicon: path.resolve('./public/favicon.ico'),

    logger: 'dev',

    bodyParser: {},

    methodOverride: '_method',

    cookieParser: 'ogXMXgRbnInguKYYx9Pm',

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

    csrf: {},

    stylus: path.join(__dirname, 'public'),

    static: path.join(__dirname, 'public'),

    errorHandler: {}
  }

};
