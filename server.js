
/**
 * Http server.
 */

var http = require('http');
var log = require('./log');
var app = require('./app');



http.createServer(app).listen(app.get('port'), function() {
  log.info('Listening on port ' + app.get('port'));
});
