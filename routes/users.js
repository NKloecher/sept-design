const express = require('express');
const router = express.Router();
const {User} = require("../models/user");



/* GET users listing. */
router.get('/', async function(req, res, next) {

  try {

  res.render('users')
  }
  catch(err) {
    console.log(err);
    res.render('error')
  }

});

module.exports = router;
