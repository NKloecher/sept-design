const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {

  try {
   const people = await req.people.find({});
   console.log("people: " + people);
   const data = {
     people
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
    let user = await req.people.findOne({_id: userId});
    console.log(user);
    const data = {
      user,
    };
    res.render('user', data)
  }catch(err){
    res.render('error')
  }
});

//TODO the fuck is this shit? clean up -- maybe refactor to person

router.post('/user', async (req,res) => {
  //create a user and save to db
  try {
    await req.people.createPerson(req.body);
    res.end("User created");
  }catch (err){
    res.status(500).end("Error creating user");
  }
});

router.put('/:user', (req,res)=>{
  //update a specific user
});

router.delete('/:user', (req,res) => {
  //delete a single user
});

module.exports = router;
