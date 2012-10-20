
/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');

var config = require('./config');
var pkgname = require('../package').name;
var debug = require('debug')(pkgname + ':app');

var app = module.exports = express();


app.Redis = require('redis');
app.redisCreateClient = function() {
  if (config.redis.socket) {
    config.redis.port = config.redis.socket;
    config.redis.host = null;
  }

  return app.Redis.createClient(config.redis.port,
                                config.redis.host,
                                config.redis.options);
};
app.redis = app.redisCreateClient();


for (var name in config.express) {
  app.set(name, config.express[name]);
}

function load_middleware(name, factory) {
  var conf = config.middleware[name];
  if (conf) {
    if (!factory)
      factory = express[name];

    var route = conf['@'] || '/';

    debug('middlaware ' + name + '@' + route + ': loading', conf);
    app.use(route, factory(conf));

    return true;
  } else {
    debug('middlaware ' + name + ': DISABLED');
  }
}

load_middleware('responseTime');
load_middleware('favicon');
load_middleware('logger');
load_middleware('bodyParser');
load_middleware('methodOverride');

if (load_middleware('cookieParser')) {
  // sessions
  app.RedisSessionStore = require('connect-redis')(express);
  config.redisSessionStore.client = app.redisCreateClient();
  app.sessionStore = new app.RedisSessionStore(config.redisSessionStore);

  config.middleware.session.store = app.sessionStore;
  if (load_middleware('session')) {
    load_middleware('csrf');
  }
}

debug('enqueuing express router');
app.use(app.router);

load_middleware('stylus', require('stylus').middleware);
load_middleware('static');
load_middleware('errorHandler');

debug('app boot done, now loading routes...');
require('../routes')(app);
