var express = require('express');
var router = express.Router();

const data = {
  title: 'Express',
  paths: [
    {pathname: "/", desc: "index"},
    {pathname: "/users", desc: "user page"},
    {pathname: "/thailand", desc: "thailand"}
  ],
  index:{}
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

module.exports = router;
