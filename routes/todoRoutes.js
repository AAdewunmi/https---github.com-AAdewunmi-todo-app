const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", (req, res) => {
    /* Todo.find().then((result) => {
        console.log(result);
    }); */
    Todo.find((err, result) => {
      if(err) throw new Error(err);
      console.log(result);
    });
});

router.post("/new", (req, res) => {
    /* Todo.create().then(req.body, (result) => {
      res.send({result});
      console.log(result);
    }); */
    Todo.create(req.body, (err, result) => {
      console.log(result);
    });
});

module.exports = router;