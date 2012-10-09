module.exports = {

  http: {
    port: 3000
  },

  redis: {
    host: 'localhost',
    options: {}
  },

  redisSessionStore: {
    ttl: 60 * 60 * 24 * 30, // = 30 days (in seconds)
    db: 0,
    prefix: 'sess:'
  },

  session: {
    /*
    key       cookie name defaulting to connect.sid
    store     session store instance
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
      maxAge: 1000 * 60 * 60 * 24 * 30 // = 30 days (in miliseconds)
    }
  },

  csrf: {
    enabled: true
  }

};
