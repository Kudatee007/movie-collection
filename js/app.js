document.addEventListener('DOMContentLoaded', () => {
    const sampleMovies = [
        {
          "title": "Better Man",
          "year": 2024,
          "genre": "Musical/Fantasy",
          "description": "The meteoric rise, dramatic fall, and remarkable resurgence of British pop superstar Robbie Williams.",
          "poster": "images/betterman.png"
        },
        {
          "title": "Back in Action",
          "year": 2025,
          "genre": "Action",
          "description": "Former CIA spies Emily and Matt are pulled back into espionage after their secret identities are exposed.",
          "poster": "images/backinaction.png"
        },
        {
          "title": "Se7en",
          "year": 1995,
          "genre": "Crime/Horror",
          "description": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
          "poster": "images/seven.png"
        },
        {
          "title": "Modern Times",
          "year": 1936,
          "genre": "Family/Comedy",
          "description": "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
          "poster": "images/moderntimes.png"
        },
        {
          "title": "12th Fail",
          "year": 2023,
          "genre": "Drama",
          "description": "The real-life story of IPS Officer Manoj Kumar Sharma and IRS Officer Shraddha Joshi.",
          "poster": "images/12th.png"
        },
        {
          "title": "Capernaum",
          "year": 2018,
          "genre": "Drama",
          "description": "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.",
          "poster": "images/capernaum.png"
        },
        {
          "title": "Ikiru",
          "year": 1952,
          "genre": "Tragedy/Drama",
          "description": "A bureaucrat tries to find meaning in his life after he discovers he has terminal cancer.",
          "poster": "images/ikiru.png"
        },
        {
          "title": "Incendies",
          "year": 2010,
          "genre": "Mystery/War",
          "description": "Twins journey to the Middle East to discover their family history and fulfill their mother's last wishes.",
          "poster": "images/incendies.png"
        },
        {
          "title": "M",
          "year": 1931,
          "genre": "Crime/Thriller",
          "description": "When the police in a German city are unable to catch a child-murderer, other criminals join in the manhunt..",
          "poster": "images/M.png"
        },
        {
          "title": "The Sting",
          "year": 1973,
          "genre": "Drama/Comedy",
          "description": "Two grifters team up to pull off the ultimate con.",
          "poster": "images/thesting.png"
        }
    ];

    // Render movies
    renderMovies(sampleMovies);
    
    // Create genre filter
    createGenreFilter(sampleMovies);
});

//function for rendering movies

function renderMovies(movies) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        // Create movie card container
        const movieCard = document.createElement('article');
        movieCard.classList.add('movie-card');

        // Add content to the movie card
        movieCard.innerHTML = `
          <div class="image-container">
            <img src="${movie.poster}" alt="Poster of ${movie.title}" class="movie-poster" />
          </div>
          <h2 class="movie-title">${movie.title}</h2>
          <p class="movie-year">${movie.year}</p>
          <p class="movie-genre">${movie.genre}</p>
          <p class="movie-description">${movie.description}</p>
        `;

        // Append to the movie list
        movieList.appendChild(movieCard);
    });
}


//function for creating genre filter

function createGenreFilter(movies) {
    // Extract unique genres
    const genres = [...new Set(movies.flatMap(movie => 
        movie.genre.split('/')))].sort();
    
    // Create filter dropdown
    const filterContainer = document.createElement('div');
    filterContainer.classList.add('genre-filter');
    
    const select = document.createElement('select');
    select.id = 'genre-select';
    
    // Add default "All Genres" option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'All Genres';
    select.appendChild(defaultOption);
    
    // Add genre options
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre.trim();
        option.textContent = genre.trim();
        select.appendChild(option);
    });
    
    // Add event listener for filtering
    select.addEventListener('change', (e) => {
        const selectedGenre = e.target.value;
        filterMoviesByGenre(selectedGenre, movies);
    });
    
    filterContainer.appendChild(select);
    
    // Ensure we're inserting before the movie list
    const main = document.querySelector('main');
    const movieList = document.getElementById('movie-list');
    main.insertBefore(filterContainer, movieList);
}

function filterMoviesByGenre(genre, movies) {
    if (!genre) {
        // If no genre selected, show all movies
        renderMovies(movies);
        return;
    }
    
    // Filter movies that include the selected genre
    const filteredMovies = movies.filter(movie => 
        movie.genre.split('/').some(g => g.trim() === genre)
    );
    
    renderMovies(filteredMovies);
}