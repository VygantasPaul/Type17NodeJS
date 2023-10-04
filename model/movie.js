const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: String, required: true },
    imdblink: { type: String, required: true },
    isWatched: { type: Boolean, required: true }

})

module.exports = mongoose.model("movie", movieSchema); 