const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", (req, res) => {
    Todo.find().then((result) => {
        console.log(result);
    });
});

router.post("/new", (req, res) => {
  console.log(req.body);
});

module.exports = router;