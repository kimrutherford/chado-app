var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'chado-app'
    },
    port: 3000,
    db: 'postgres://localhost/chado-app-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'chado-app'
    },
    port: 3000,
    db: 'postgres://localhost/chado-app-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'chado-app'
    },
    port: 3000,
    db: 'postgres://localhost/chado-app-production'
    
  }
};

module.exports = config[env];
