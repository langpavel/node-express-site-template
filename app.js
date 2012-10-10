
/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');

var config = require('./config');

var routes = require('./routes');
var user = require('./routes/user');

var app = module.exports = express();


app.Redis = require('redis');
app.redisCreateClient = function() {
  return app.Redis.createClient(config.redis.port,
                                config.redis.host,
                                config.redis.options);
};
app.redis = app.redisCreateClient();



app.set('port', process.env.PORT || config.http.port || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.favicon(config.middleware.favicon));

app.use(express.logger(config.middleware.logger));

app.use(express.bodyParser(config.middleware.bodyParser));

app.use(express.methodOverride(config.middleware.methodOverride));

// sessions
app.RedisSessionStore = require('connect-redis')(express);
config.redisSessionStore.client = app.redisCreateClient();
app.sessionStore = new app.RedisSessionStore(config.redisSessionStore);

app.use(express.cookieParser(config.middleware.cookieParser));
config.session.store = app.sessionStore;
app.use(express.session(config.session));

if (config.middleware.csrf.enabled) {
  app.use(express.csrf(config.middleware.csrf));
}

app.use(app.router);

app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.errorHandler());

app.get('/', routes.index);
app.get('/users', user.list);
