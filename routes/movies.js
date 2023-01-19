const router = require("express").Router();
router.get("/movies", (req, res, next) => {
    res.render("movies");
  });
module.exports = router;