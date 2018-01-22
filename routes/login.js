const express = require("express");
let router = express.Router();
const passport = require('passport');

router.get('/', (req,res) => {
   res.render('login', {title: "login", login: {}})
});

//Implementing custom passport callback to render error messages
router.post('/', function (req,res,next) {
  passport.authenticate('local', function (err, user) {
    if (err) { return next(err); }
    // Redirect if it fails
    if (!user) { return res.render('login', {title:"login", login:{}, message:"Login failed"}); }
    req.login(user, function(err) {
      if (err) { return next(err); }
      // Redirect if it succeeds
      return res.redirect('/');
    });
  })(req, res, next);
});

module.exports = router;