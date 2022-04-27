const express =  require('express');
const router = express.Router();

const controller = require('./../controller/movie_controller.js')

// API 1 - getMovies
// API 2 - getComingSoonMovies
// API 3- getMoviesByGenre
// API 4 - getMovie

router.get('/',(req,res) => {
    res.render("index", {MovieList : "Superman,Spiderman,Batman"})
})

router.get('/getMovies',controller.getMovies)
// router.get('/comingsoon',controller.getComingSoonMovies)
// router.get('/getGenre/:genre',controller.getMoviebyGenre)
// router.get('/getMovie/:movie',controller.getMovieDetails)

module.exports = router;