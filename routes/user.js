const express = require("express");
let router = express.Router();

//todo pretty sure this is a horrible idea --do need put/post/delete though

router.get('/', async (req,res) => {
    let users = await req.users.find({});
    let data = {
      users
    };
    res.send(data);
});

router.get('/:userId', async (req,res) => {
  let userId = req.params.userId;
  let user = await req.users.find({_id: userId});
  res.send(user);
});

router.post('/', async (req,res) => {
  console.log(req.body);
  const {username, password} = req.body;
  await req.users.createUser(username, password)
      .then(() => res.end("OK!USER!CREATED!"))
      .catch(err => {
        console.log(err);
        res.status(500).end("NO!USER!NOT!CREATED!")
      })
});

module.exports = router;