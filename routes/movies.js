const Movie = require("../models/Movie");
const Celebrity = require("../models/Celebrity");
const router = require("express").Router();

//GET NEW MOVIE VIEW    
router.get("/create", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find({});
    res.render('movies/new-movie', { celebrities });
  } catch (err) {
    next(err);
  }
});

//POST NEW MOVIE
router.post("/create", async function(req,res,next){
  const { title, genre, plot, cast } = req.body;
  try {
    await Movie.create({ title, genre, plot, cast });
    res.redirect("/movies");
  } catch (error) {
    next(error);
  }
})

//VIEW ALL MOVIES ROUTE
router.get("/", async   (req, res, next) => {
  const movies = await Movie.find({});
  try{
      res.render("movies/movies", { movies });
  } catch(error){
      next(error)
  }
});

//GET MOVIE DETAIL  
router.get("/:id", async   (req, res, next) => {
  const {id} = req.params;
  try{
      const moviedetail = await Movie.findById(id).populate("cast");
      console.log(`movie detail:${moviedetail}`);
      console.log(`cast id:${moviedetail.cast[0]._id}`);
      res.render("movies/movie-details", moviedetail );
  } catch(error){
      next(error)
  }
});

//delete POST ROUTE

router.post("/delete/:id", async function(req,res,next){
  const {id} = req.params;
  try {
    await Movie.findByIdAndDelete(id);
    res.redirect("/movies");
  } catch (error) {
    next(error);
  }
})

module.exports = router;
