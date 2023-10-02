const express = require("express");

const router = express.Router()

const { GET_ALL_MOVIES, ADD_MOVIE, GET_MOVIES_SORTED, GET_MOVIE_BY_ID, UPDATE_MOVIE, SET_MOVIE_DELETE } = require("../controller/movie")

router.get('/movies', GET_ALL_MOVIES)

router.post("/add-movie", ADD_MOVIE)

router.get('/sorted-movies', GET_MOVIES_SORTED)

router.get('/movies/:id', GET_MOVIE_BY_ID)

router.put('/movies/:id/', UPDATE_MOVIE)

router.delete('/movies/:id', SET_MOVIE_DELETE)

router.get('/status', (req, res) => {
    return res.json({ status: "it works" })
})

router.use((req, res) => {
    return res.status(404).json({ 'Response': 'Endpoint not exist' })
})

module.exports = router