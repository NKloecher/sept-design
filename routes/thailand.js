const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {

  try {
    res.send("Thailand")
  }
  catch(err) {
    console.log(err);
    res.render('error')
  }

});

module.exports = router;