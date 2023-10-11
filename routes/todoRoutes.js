const router = require("express").Router();

router.get("/", (req, res) => {
    console.log("You are in the index page");
});

module.exports = router;