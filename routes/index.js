
module.exports = function(app) {

  var home = require('./home');
  var user = require('./user');


  app.get('/', home.index);
  app.get('/users', user.list);

};
