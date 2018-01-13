const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {

  try {
   const users = await req.users.find({});
   console.log("user: " + users);
   const data = {
     users
   };
  res.render('users', data)
  }
  catch(err) {
    console.log(err);
    res.render('error')
  }

});

router.get('/:id', async (req,res) =>{
  try {
    let userId = req.params.id;
    let user = await req.users.findOne({_id: userId});
    console.log(user);
    const data = {
      user,
    }
    res.render('user', data)
  }catch(err){
    res.render('error')
  }
});

module.exports = router;
