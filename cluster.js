var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
var pkgname = require('./package').name;
var debug = require('debug')(pkgname + ':cluster');

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    debug('worker ' + worker.process.pid + ' died');
  });

} else {
  debug('Worker #' + cluster.worker.id +
        ' PID: ' + process.pid + ' spawned');

  require('./server');
}
