const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

module.exports.createApp = function createApp({
    User
}) {

  const index = require('./routes/index');
  const users = require('./routes/users');
  const login = require('./routes/login');

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

  const data = {

  };

  /**
   * TODO Find out a proper way to send data to all underlying applications,
   * while not relying on the setup from octo-spoon.
   * Might have to reverse the createApp() method - will consider
   */
  app.use(async (req,res,next) =>{
    let users = await User.find({});
    console.log(users);
    data.users = users;
    next()
  });

  app.use('/', index);
  app.use('/users', users);
  app.use('/login', login);


  // async function test() {
  //   let user = await User.find({});
  // console.log(user)
  // }
  // test();

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