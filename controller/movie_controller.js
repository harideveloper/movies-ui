
const MoviesDO = require('../models/MoviesDO');

// get Movies API
exports.getMovies = (req,res) => {
    MoviesDO.getMovies(req,res,(err,data) => {
        if (err)
        res.status(500).send({
          message:
            err.message || "Error : Unable to retrieve all movies"
        });
        else { 
            console.log("retireved all movies")
            res.render('movies',{movies : allMovies})
        }
    })

}


  
// // get Coming Soon Movies API
// exports.getComingSoonMovies = (req,res) => {
//     const comingsoonmovies = [];
//     movies.forEach((movie) => {
//         if(movie.ComingSoon) {
//             comingsoonmovies.push(movie.Title)
//         }
//     })
//     res.render('index',{MovieList : comingsoonmovies})
// }

// // get Movie Details
// exports.getMovieDetails = (req,res) => {
//     const movieDetails=[];
//     movies.forEach((movie) => {
//         if(movie.id == req.params.movie){
//             movieDetails.push(movie)
//         }
//     })
//     res.render('movie',{movies : movieDetails})
// }

// // get Movie by Genre
// exports.getMoviebyGenre = (req,res) => {
//     const moviesByGenere =[];
//     movies.forEach((movie) => {
//         if(movie.Genre == req.params.genre){
//             moviesByGenere.push(movie.Title)
//         }
//     })
//     moviesByGenere.length 
//     ? res.send(moviesByGenere) 
//     : res.send("Unable to find movies by Genere    "+req.params.genre)
// }

