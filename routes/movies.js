const router = require('express').Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movie');
const { validateMovie, validateMovieId } = require('../middlewares/validations');

router.get('/movies', getMovies);
router.post('/movies', validateMovie, createMovie);
router.delete('/:movieId', validateMovieId, deleteMovie);

module.exports = router;
