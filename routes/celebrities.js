const router = require("express").Router();
const Celebrity = require("../models/Celebrity");

router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
  });

  router.post("/create", async (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    try {
      await Celebrity.create({ name, occupation, catchPhrase });
      res.redirect('/celebrities');
    } catch (error) {
      next(error);
    }
  })
module.exports = router;

router.post(("/create", async function(req,res,next){
    const {name,occupation,catchPhrase} = req.body;
    try{
        const newCelebrity = await Celebrity.create({name,occupation,catchPhrase})
        res.redirect(`/celebrities/${newCelebrity._id}`)
    } catch(error){
        res.redirect("/celebrities/create")
    }
}))