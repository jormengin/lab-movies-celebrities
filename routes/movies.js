const Movie = require("../models/Movie");
const Celebrity = require("../models/Celebrity");
const router = require("express").Router();

//GET NEW MOVIE VIEW    
router.get("/create", async (req, res, next) => {
  try {
    movies = await Movie.find().populate('Celebrity');
    res.render('movies/new-movie', { movies });
  } catch (err) {
    next(err);
  }
});

//POST NEW MOVIE
router.post("/create", async function(req,res,next){
  try {
    const celebrities = await Celebrity.find({});
    res.render("movies/new-movie", { celebrities });
  } catch (error) {
    next(error);
  }
})

//VIEW ALL MOVIES ROUTE
router.get("/", async   (req, res, next) => {
  const movies = await Movie.find({});
  try{
      res.render("movies/movies", { movies });
      console.log("movies")
  } catch(error){
      next(error)
  }
});

module.exports = router;
