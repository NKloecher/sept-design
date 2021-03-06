const express = require('express');
const session = require('express-session');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');


module.exports.createApp = function createApp({
    Person,
    Wish,
    User
}) {

  require('./config/passport')(passport, User);

  const index = require('./routes/index');
  const people = require('./routes/people');
  const login = require('./routes/login');
  const thailand = require('./routes/thailand');
  const user = require('./routes/user');

  const app = express();

// view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  /**
   * Passport stuff -> maybe another folder
   */
  app.use(session({
    secret: "Shh don't tell anyone",
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());



  /**
   * Find out a proper way to send data to all underlying applications,
   * while not relying on the setup from octo-spoon.
   * Might have to reverse the createApp() method - will consider.
   * middleware probably use way too much power, since every request would do a db search.
   */
  app.use(async (req,res,next) =>{
    req.people = Person;
    req.wishes = Wish;
    req.users = User;
    next() //This works, not sure about cost
  });

  app.use('/', index);
  app.use('/people', people);
  app.use('/login', login);
  app.use('/thailand', thailand);
  app.use('/user', user);


// catch 404 and forward to error handler
  app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  // module.exports = app;
  return app
};
