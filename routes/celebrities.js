const router = require("express").Router();
const Celebrity = require("../models/Celebrity");

//GET NEW CELEBRITY VIEW    
router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
  });

//POST NEW CELEBRITY
router.post("/create", async function(req,res,next){
    const {name,occupation,catchPhrase} = req.body;
    try{
        const newCelebrity = await Celebrity.create({name,occupation,catchPhrase});
        res.redirect(`/celebrities`)
    } catch(error){
        res.redirect("/celebrities")
    }
})
//LIST ALL CELEBRITIES  
router.get("/", async   (req, res, next) => {
    const celebrities = await Celebrity.find({});
    try{
        res.render("celebrities/celebrities", { celebrities });
        console.log(celebrities)
    } catch(error){
        next(error)
    }
  });

module.exports = router;