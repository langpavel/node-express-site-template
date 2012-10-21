
var path = require('path');
var PATH = function(p) {
  return path.resolve(__dirname, p);
};

module.exports = {

  express: {
    port: process.env.PORT || 3000,
    views: PATH('views'),
    'view engine': 'jade'
  },

  redis: {
    host: 'localhost',
    port: 16379,
    options: {}
  },

  redisSessionStore: {
    ttl: 60 * 60 * 24 * 60, // = 60 days (in seconds)
    db: 0,
    prefix: 'sess:'
  },

  middleware: {
    responseTime: true,

    favicon: PATH('static/favicon.ico'),

    logger: 'dev',

    bodyParser: {},

    methodOverride: '_method',

    cookieParser: 'ogXMXgRbnInguKYYx9Pm',

    session: {
      /*
       *  key         cookie name defaulting to connect.sid
       *  secret      session cookie is signed with this secret
       *              to prevent tampering
       *  cookie      session cookie settings, defaulting to
       *              { path: '/', httpOnly: true, maxAge: null }
       *  proxy       trust the reverse proxy when setting secure cookies
       *              (via "x-forwarded-proto")
      */

      key: 'sid',
      cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 60 // = 60 days (in miliseconds)
      }
    },

    csrf: {},

    stylus: {
      /*
       *  force       Always re-compile
       *  src         Source directory used to find .styl files
       *  dest        Destination directory used to output .css files
       *              when undefined defaults to `src`.
       *  compile     Custom compile function, accepting the arguments
       *              `(str, path)`.
       *  compress    Whether the output .css files should be compressed
       *  firebug     Emits debug infos in the generated css that can
       *              be used by the FireStylus Firebug plugin
       *  linenos     Emits comments in the generated css indicating
       *              the corresponding stylus line
       */
      '@': '/css',
      src: PATH('client/styles'),
      dest: PATH('static/css')
    },

    static: PATH('static'),

    errorHandler: {}
  }

};
