const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {

  try {

    const data = {

    };
    res.render('thailand', data)
  }
  catch(err) {
    console.log(err);
    res.render('error')
  }

});

module.exports = router;