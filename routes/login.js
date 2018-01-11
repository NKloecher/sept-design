const express = require("express");
let router = express.Router();

router.get('/', (req,res) => {
   res.render('login', {title: "login", login: {}})
});

module.exports = router;