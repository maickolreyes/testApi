const express = require('express');
const todos = require("./todos");

const router = express.Router();

router.get("/todos", function(req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.json(todos)
})

router.post("/login", function(req, res) {
  // const user = req.body.user
  // const pass = req.body.pass

  // (user === "Maickol" && pass === "tester135")? res.sendStatus(200) : res.sendStatus(401)
  return(res.send(req))
})

module.exports = router;