const express = require("express");
const app = express();

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
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        imdbLink: req.body.imdbLink
    }

    movies.push(movie);

    return res.status(200).json({ response: 'movie was added' })

})

app.get('/get-movie', (req, res) => {
    return res.json({
        id: "222",
        title: "sfd",
        description: "dsds",
        rating: "dsds",
        imdbLink: "dsds"
    }
    )
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
    return res.json({ response: 'deleted all movies' })
})

app.delete('/get-movie-id', (req, res) => {
    const findById = req.body.id;
    return res.json({ findById })

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