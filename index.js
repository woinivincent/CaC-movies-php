document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.getElementById('cards__container');
    const prevButton = document.getElementById('prev__button');
    const nextButton = document.getElementById('next__button');
    let startIndex = 0;
    const itemsPerPage = 9;
    let moviesData = [];
  
    // Obtener los datos de las películas y mostrar las primeras películas
    fetch('movies.json')
      .then(response => response.json())
      .then(data => {
        moviesData = data.movies;
        showMovies();
      })
      .catch(error => console.error('Error cargando el archivo JSON:', error));
  
    // Función para mostrar las películas actuales
    function showMovies() {
      cardsContainer.innerHTML = '';
  
      const endIndex = Math.min(startIndex + itemsPerPage, moviesData.length);
  
      for (let i = startIndex; i < endIndex; i++) {
        const movie = moviesData[i];
        const card = createMovieCard(movie);
        cardsContainer.appendChild(card);
      }
  
      prevButton.disabled = startIndex === 0;
      nextButton.disabled = endIndex >= moviesData.length;
    }
  
    // Función para crear una card de película
    function createMovieCard(movie) {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const image = document.createElement('img');
      image.src = movie.images;
      image.alt = movie.title;
  
      const title = document.createElement('h2');
      title.classList.add('card-title');
      title.textContent = movie.title;
  
      const rating = document.createElement('p');
      rating.classList.add('card-rating');
      rating.textContent = `Rating: ${movie.rating}`;
  
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(rating);
  
      return card;
    }
  
    // Event listeners para los botones de anterior y siguiente
    prevButton.addEventListener('click', function() {
      startIndex = Math.max(0, startIndex - itemsPerPage);
      showMovies();
    });
  
    nextButton.addEventListener('click', function() {
      startIndex = Math.min(startIndex + itemsPerPage, moviesData.length);
      showMovies();
    });
  });

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
