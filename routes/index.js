let express = require('express');
let router = express.Router();

let data = {
  title: "Kloecher's Express",
  desc: 'Express testing, wishes and more!',
  paths: [
    {pathname: "/", desc: "index"},
    {pathname: "/people", desc: "people"},
    {pathname: "/thailand", desc: "thailand"}
  ],
  // lorem: require("fs").readFileSync("./lorem.html"), //alt way, but no html formatting :(
  index:{}
};

/* GET home page. */
router.get('/',async function(req, res) {
  //TODO redirect to /login if not logged in
  res.render('index', data);
});

/**
 * Refactor these to a wish route
 */

//todo lemon trees, rational oven, 5br house, me
router.post('/wish', (req,res) => {
  //create a wish and save to db
});

router.put('/:wish', (req,res)=>{
  //update a specific wish
});

router.delete('/:wish', (req,res) => {
  //delete a single wish
});

module.exports = router;
