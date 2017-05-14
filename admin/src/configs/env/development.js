const path = require('path')
  ,morgan = require('morgan')
  ,methodOverride  = require('method-override')
  ,expressSession = require('express-session')
  ,expressValidator = require('express-validator')
  ,bodyParser = require('body-parser')
  ,hbs = require('express-hbs')
  ,express = require('express')
  ,mongoose = require('mongoose')
  ,passport = require('passport')
  ,localStrategy = require('passport-local').Strategy;

module.exports = (app) => {
  app.set('port', 9000);
  app.set('host', '127.0.0.1');
  app.set('environment', 'development');
  app.set('views', path.join(__dirname, './../../../build/views'));
  app.set('view engine', 'hbs');
  app.set('assets', path.join(__dirname, './../../../build'));
  app.set('mongo_host', '127.0.0.1');
  app.set('mongo_port', 27017);
  app.set('mongo_db', 'node-chat-dev');
  app.set('mongo_url', `mongodb://${app.get('mongo_host')}:${app.get('mongo_port')}/${app.get('mongo_db')}`);

  app.use(express.static(app.get('assets')));
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(methodOverride('_method'));
  app.use(expressSession({
    secret: 'segredo',
    resave: false,
    saveUninitialized: false
  }));
  app.use(expressValidator());

  app.engine('hbs', hbs.express4({
    defaultLayout: path.join(app.get('views'), 'layouts/main.hbs'),
    partialsDir: path.join(app.get('views'), 'partials'),
    layoutsDir: path.join(app.get('views'), 'layouts')
  }));

  mongoose.connect(app.get('mongo_url'), () => console.log('MongoDB Conected!'));

  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new localStrategy(require('./../../schemas/users').authenticate()));
  passport.serializeUser(require('./../../schemas/users').serializeUser());
  passport.deserializeUser(require('./../../schemas/users').deserializeUser());

  require('./../helpers')(hbs);
};