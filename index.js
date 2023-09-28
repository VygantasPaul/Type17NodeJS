const express = require("express");
const { v4: uuidv4 } = require('uuid');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const movies = [];

app.post("/add-movie", (req, res) => {


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

})

app.get('/get-movie', (req, res) => {
    return res.json({
        title: "sfd",
        description: "dsds",
        rating: "dsds",
        imdbLink: "dsds",
        isWatched: false
    })
})
app.get('/get-movies', (req, res) => {
    return res.json({ response: movies })
})


app.get('/get-movies-sorted', (req, res) => {
    const sortMovies = movies.sort((a, b) => b.rating - a.rating);
    return res.json({ movies: sortMovies })
})

app.delete('/delete-movies', (req, res) => {
    movies.length = 0;
    return res.json({ response: 'Delete all movies' })
})

app.get('/get-movie/:id', (req, res) => {

    const findById = req.params.id;

    const movieId = movies.find((e) => e.id === findById)

    if (movieId) {
        return res.json({ response: 'Movie was found', movie: movieId })
    } else {
        return res.status(404).json({ response: 'movie was not found' })
    }

})
app.get('/set-movie-watched/:id', (req, res) => {
    console.log('movies', movies)
    const movieIndex = movies.findIndex((movie) => movie.id === req.params.id)

    if (movieIndex === -1) { // -1 undefined  true nes !!0 
        return res.status(404).json({ response: 'Movie was not found' })
    }

    movies[movieIndex].isWatched = true;

    return res.json({ movieIndex: movies })

})
app.get('/get-status', (req, res) => {
    return res.json({ status: "it works" })
})

app.use((req, res, next) => {
    return res.status(404).json({ 'message': 'error' })
})

app.listen(3000, () => {
    console.log("App started");
})