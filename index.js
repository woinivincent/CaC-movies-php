document.addEventListener('DOMContentLoaded', function() {
  const cardsContainer = document.getElementById('cards__container');
  const prevButton = document.getElementById('prev__button');
  const nextButton = document.getElementById('next__button');

  if (!cardsContainer || !prevButton || !nextButton) {
    console.error('Uno o más elementos no se encontraron en el DOM');
    return;
  }

  let startIndex = 0;
  const itemsPerPage = 6;
  let moviesData = [];

  const apiKey = 'cb89bbdfad40039bf594c803180f0940';
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      moviesData = data.results || [];
      showMovies();
    })
    .catch(error => console.error('Error obteniendo los datos de la API:', error));

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

  function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    image.alt = movie.title || '';

    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = movie.title || '';

    const rating = document.createElement('p');
    rating.classList.add('card-rating');
    rating.textContent = `Rating: ${movie.vote_average || ''}`;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(rating);

    return card;
  }

  prevButton.addEventListener('click', function() {
    startIndex = Math.max(0, startIndex - itemsPerPage);
    showMovies();
  });

  nextButton.addEventListener('click', function() {
    startIndex = Math.min(startIndex + itemsPerPage, moviesData.length);
    showMovies();
  });
});



window.onscroll = function() {
  scrollFunction();
};


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