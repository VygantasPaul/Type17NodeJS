
const MovieModel = require("../model/movie")
let movies = [];

const GET_ALL_MOVIES = (req, res) => {
    MovieModel.find().then((response) => {
        return res.json({ movies: response })
    })

}

const ADD_MOVIE = (req, res) => {
    const movie = new MovieModel({
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        imdblink: req.body.imdblink,
        isWatched: req.body.isWatched
    })
    movie.save().then((dbResponse) => {
        return res.status(200).json({ response: dbResponse })
    }).catch((error) => {
        console.log("Error found:", error);
        return res.status(500).json({ response: 'Something went wrong' })
    })

}

const GET_MOVIES_SORTED = (req, res) => {
    const sortMovies = movies.sort((a, b) => b.rating - a.rating);
    return res.json({ movies: sortMovies })
}
const GET_MOVIE_BY_ID = (req, res) => {
    const findById = req.params.id;
    const movieId = movies.find((movie) => movie.id === findById)
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