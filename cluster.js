var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
var log = require('./log');

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    log.error('worker ' + worker.process.pid + ' died');
  });

} else {
  log.info('Worker #'+cluster.worker.id+' PID: '+process.pid+' spawned');

  require('./server');    
}
