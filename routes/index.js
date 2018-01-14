let express = require('express');
let router = express.Router();

let data = {
  title: 'Wishes with Express',
  paths: [
    {pathname: "/", desc: "index"},
    {pathname: "/users", desc: "users"},
    {pathname: "/thailand", desc: "thailand"}
  ],
  index:{}
};

/* GET home page. */
router.get('/',async function(req, res) {
  data.wishes = await req.wishes.find({});
  res.render('index', data);
});

/**
 * Insert wish related paths here.
 * get All wishes in root
 * (get/?!)put/post ('/:wish') for single wish
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
