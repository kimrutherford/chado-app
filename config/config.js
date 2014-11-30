var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'canto-stats'
    },
    port: 3000,
    db: 'postgres://localhost/canto-stats-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'canto-stats'
    },
    port: 3000,
    db: 'postgres://localhost/canto-stats-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'canto-stats'
    },
    port: 3000,
    db: 'postgres://localhost/canto-stats-production'
    
  }
};

module.exports = config[env];
