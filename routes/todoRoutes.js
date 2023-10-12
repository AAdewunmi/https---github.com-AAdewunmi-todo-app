const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", (req, res) => {
    Todo.find().then((result) => {
        console.log(result);
    });
});

module.exports = router;