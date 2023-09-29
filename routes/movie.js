const express = require("express");

const router = express.Router()

const { GET_ALL_MOVIES, ADD_MOVIE, GET_MOVIES_SORTED, GET_MOVIE_BY_ID, SET_MOVIE_WATCHED } = require("../controller/movie")

router.get('/get-movies', GET_ALL_MOVIES)

router.post("/add-movie", ADD_MOVIE)

router.get('/get-movies-sorted', GET_MOVIES_SORTED)

router.get('/get-movie/:id', GET_MOVIE_BY_ID)

router.get('/set-movie-watched/:id', SET_MOVIE_WATCHED)

router.get('/get-status', (req, res) => {
    return res.json({ status: "it works" })
})

router.use((req, res) => {
    return res.status(404).json({ 'Response': 'Endpoint not exist' })
})

module.exports = router