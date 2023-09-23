const renderMovies = async () => {



    const response = await fetch('/movies');
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(movie => { 
            const card = document.createElement('div')
            card.classList.add('card')
            const topContainer = document.createElement('div')
            topContainer.className = 'top-container'
            
        
            const bottomContainer = document.createElement('div')
            bottomContainer.className = 'bottom-container'
        
            //set background image of top container
            topContainer.style.backgroundImage = `url(${movie.posterImage})`
        
            const name = document.createElement('h3')
            bottomContainer.append(name)
            name.textContent = movie.title
        
        
            const price = document.createElement('p')
            price.textContent = movie.price
            bottomContainer.append(price)
        
        
            const audience = document.createElement('p')
            audience.textContent = 'Genre:' + movie.genre
            bottomContainer.append(audience)
        
            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/movies/${movie.id}`
            bottomContainer.appendChild(link)


            
            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            
            mainContent.appendChild(card)
        })

    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No movies Available 😞'
        mainContent.append(message)
    
    }

}


const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    
    renderMovies()
}

