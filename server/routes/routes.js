'use strict';

var morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('express-method-override'),
    session        = require('express-session'),
    RedisStore     = require('connect-redis')(session),
    debug          = require('../lib/debug'),
    security       = require('../lib/security'),
    home           = require('../controllers/home'),
    lists          = require('../controllers/lists'),
    players        = require('../controllers/players'),
    results        = require('../controllers/results'),
    users          = require('../controllers/users');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../../public'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(session({store:new RedisStore(), secret:'my super secret key', resave:true, saveUninitialized:true, cookie:{maxAge:null}}));

  app.use(security.authenticate);
  app.use(debug.info);

  app.get('/home', home.index);
  app.post('/register', users.register);
  app.post('/login', users.login);


  app.use(security.bounce);
  app.delete('/logout', users.logout);

  app.get('/players', players.all);
  app.post('/getplayertwitter', players.getTwitter);
  app.post('/addplayertwitter', players.addTwitter);
  app.post('/addlist', lists.add);
  app.get('/listsbyuser', lists.findByUser);
  app.post('/getplayers', results.getPlayers);

  console.log('Express: Routes Loaded');
};

