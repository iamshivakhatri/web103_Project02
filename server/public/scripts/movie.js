const renderMovie = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/movies')
    const data = await response.json()
    const movieContent = document.getElementById('movie-content')
    let movie
    movie = data.find(movie => movie.id === requestedID)
    if (movie) {

        document.getElementById('image').src = movie.posterImage
        document.getElementById('title').textContent = movie.title
        document.getElementById('genre').textContent = movie.genre
        document.getElementById('releaseyear').textContent = 'Release Year : ' + movie.releaseYear
        
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No movies Available 😞'
        movieContent.appendChild(message)
        
    }

}

renderMovie()
