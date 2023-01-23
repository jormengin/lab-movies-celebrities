const router = require("express").Router();
const Movie = require("../models/Movie");

//VIEW ALL MOVIES ROUTE
router.get("/", async   (req, res, next) => {
  const movies = await Movie.find({});
  try{
      res.render("movies/movies", { movies });
      console.log(movies)
  } catch(error){
      next(error)
  }
});



//GET NEW MOVIE VIEW    
router.get("/create", (req, res, next) => {
    res.render("movies/new-movie");
  });

//POST NEW MOVIE
router.post("/create", async function(req,res,next){
    const {name,occupation,catchPhrase} = req.body;
    try{
        const newCelebrity = await Celebrity.create({name,occupation,catchPhrase});
        res.redirect(`/movies`)
    } catch(error){
        res.redirect("/movies")
    }
})


module.exports = router;
module.exports = router;