const router = require("express").Router();
router.get("celebrities", (req, res, next) => {
    res.render("celebrities");
  });
module.exports = router;