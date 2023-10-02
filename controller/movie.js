
const { v4: uuidv4 } = require('uuid');

let movies = [];

const GET_ALL_MOVIES = (req, res) => {
    const limit = req.query.limit || 4;
    const limitedMovies = movies.slice(0, limit);
    return res.json({ response: limitedMovies })
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
const UPDATE_MOVIE = (req, res) => {

    const movieIndex = movies.findIndex((movie) => movie.id === req.params.id);

    if (movieIndex === -1) {
        return res.status(404).json({ response: 'Movie was not found' })
    }

    movies[movieIndex] = { ...movies[movieIndex], ...req.body }

    return res.json({ movie: movieIndex })
}
const SET_MOVIE_DELETE = (req, res) => {
    const filteredMovies = movies.filter((movie) => movie.id !== req.params.id)
    movies = filteredMovies
    return res.json({ movies: movies })
}

module.exports = { GET_ALL_MOVIES, ADD_MOVIE, GET_MOVIES_SORTED, GET_MOVIE_BY_ID, UPDATE_MOVIE, SET_MOVIE_DELETE }