
const { resourceLimits } = require("worker_threads");
const db_connection_pool = require("../config/db-connection.js");


let pool;
const table = "movies";


// Constructor
const MoviesDO = function (moviesDO) {
  this.id = moviesDO.id;
  this.Title = moviesDO.Title;
  this.Rated = moviesDO.Rated;
  this.Released = moviesDO.Released;
  this.Runtime = moviesDO.Runtime;
  this.Genre = moviesDO.Genre;
  this.Director = moviesDO.Director;
  this.Writer = moviesDO.Writer;
  this.Actors = moviesDO.Actors;
  this.Plot = moviesDO.Plot;
  this.Language = moviesDO.Language;
  this.Country = moviesDO.Country;
  this.Awards = moviesDO.Awards;
  this.Poster = moviesDO.Poster;
  this.Metascore = moviesDO.Metascore;
  this.imdbRating = moviesDO.imdbRating;
  this.imdbVotes = moviesDO.imdbVotes;
  this.imdbID = moviesDO.imdbID;
  this.Type = moviesDO.Type;
  this.Resp = moviesDO.Resp;
  this.totalSeasons = moviesDO.totalSeasons;
  this.ComingSoon = moviesDO.ComingSoon;

};


MoviesDO.getMovies = async (req, res) => {
  pool = pool || (await db_connection_pool.createPool());
  try {
    // get All Movies
    const results = await getMovies(pool);
    const allMovies = [];
    results.forEach((movie) => {
        allMovies.push({
            //id: movie.id,
            name: movie.title
        })
    })
    res.send(allMovies)
        
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send('Error : Page can not be loaded, Please check the logs for more details.')
      .end();
  }
};

const getMovies = async pool => {
  return await pool
    .select('id', 'title')
    .from('movies')
};




module.exports = MoviesDO;

