const form = document.getElementById('addMovieForm');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Access input fields and retrieve values
    const movieTitle = document.querySelector('#movie-title').value;
    const movieDescription = document.querySelector('#movie-description').value;
    const movieImdblink = document.querySelector('#movie-imdblink').value;
    const movieRating = document.querySelector('#movie-rating').value;
    const isWatched = document.querySelector('#checkbox').checked;
    // Create an object with the collected values
    if (movieTitle === '' || movieDescription === '' || movieImdblink === '' || movieRating === '') {
        alert('please fill inputs')
        return false
    }

    const movieData = {
        title: movieTitle,
        description: movieDescription,
        imdblink: movieImdblink,
        rating: movieRating,
        isWatched: isWatched
    };
    console.log(movieData)
    // Send a POST request to your server with JSON data
    const response = await fetch('http://localhost:3000/add-movie', {
        method: 'POST',
        body: JSON.stringify(movieData), // Send the collected data as JSON
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {

        alert('Movie added successfully!');
    } else {
        alert('Failed to add the movie.');
    }
});
