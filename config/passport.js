let LocalStrategy = require('passport-local').Strategy;

module.exports = async function (passport, User) {

  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  //'local' strategy --
  passport.use(new LocalStrategy(
      function (username, password, done) {
        User.findOne({username: username}, function (err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, {message: 'Incorrect username.'});
          }
          if (!user.validatePassword(password)) {
            return done(null, false, {message: 'Incorrect password.'});
          }
          return done(null, user);
        });
      }
  ));

};