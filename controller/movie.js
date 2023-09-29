
const { v4: uuidv4 } = require('uuid');

const movies = [];

const GET_ALL_MOVIES = (req, res) => {
    return res.json({ response: movies })
}
const ADD_MOVIE = (req, res) => {

    console.log(req.body)

    const id = req.body.id;
    const movieExist = movies.some((e) => e.id === id);

    if (movieExist) {
        return res.status(404).json({ response: 'movie with the ID already exist' })
    }

    const movie = {
        id: uuidv4(),
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        imdblink: req.body.imdbLink,
        isWatched: req.body.isWatched
    }

    movies.push(movie);

    return res.status(200).json({ response: 'movie was added' })

}

const GET_MOVIES_SORTED = (req, res) => {
    const sortMovies = movies.sort((a, b) => b.rating - a.rating);
    return res.json({ movies: sortMovies })
}
const GET_MOVIE_BY_ID = (req, res) => {

    const findById = req.params.id;

    const movieId = movies.find((e) => e.id === findById)

    if (movieId) {
        return res.json({ response: 'Movie was found', movie: movieId })
    } else {
        return res.status(404).json({ response: 'movie was not found' })
    }
}
const SET_MOVIE_WATCHED = (req, res) => {
    const movieIndex = movies.findIndex((movie) => movie.id === req.params.id)

    if (movieIndex === -1) {
        return res.status(404).json({ response: 'Movie was not found' })
    }

    movies[movieIndex].isWatched = true;

    return res.json({ movieIndex: movies })
}


module.exports = { GET_ALL_MOVIES, ADD_MOVIE, GET_MOVIES_SORTED, GET_MOVIE_BY_ID, SET_MOVIE_WATCHED }