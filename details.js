document.addEventListener("DOMContentLoaded", function () {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");

  fetchMovieDetails(id);

  function fetchMovieDetails(movieId) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjYwNTQxZGVlNGQwNTljNjU0NzA3ZjhhYTRmOGZhYiIsInN1YiI6IjYzZTUyNTQ2ZDAzNmI2MDA4M2FkN2QxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1_zvUKHMxNgPjdTMHAffisYfXgaA-E2CBVw8vqhRHvQ",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((movieData) => {
        //Movie details
        document.getElementById("movie-title").textContent = movieData.title;
        document.getElementById(
          "movie-image"
        ).src = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
        document.querySelector("h3").textContent = movieData.title;
        document.getElementById("movie-overview").textContent =
          movieData.overview;
        document.getElementById("release-date").textContent =
          "Çıxış tarixi:" + movieData.release_date;
        const genres = movieData.genres.map((genre) => genre.name).join(", ");
        document.getElementById("movie-genre").textContent = "Janr:" + genres;
        document.getElementById("movie-budget").textContent =
          "Büdcə: $" + movieData.budget;
        document.getElementById("movie-runtime").textContent =
          "Müddəti:" + movieData.runtime + "dəqiqə";
        document.getElementById("vote-average").textContent =
          "IMDB:" + movieData.vote_average;
      })
      .catch((err) =>
        console.error("There was a problem with the fetch operation:", err)
      );
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");

  fetchMovieDetails(id);

  function fetchMovieDetails(movieId) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjYwNTQxZGVlNGQwNTljNjU0NzA3ZjhhYTRmOGZhYiIsInN1YiI6IjYzZTUyNTQ2ZDAzNmI2MDA4M2FkN2QxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1_zvUKHMxNgPjdTMHAffisYfXgaA-E2CBVw8vqhRHvQ",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((movieData) => {
        console.log(movieData);

        fetchMovieCredits(movieId);
      })
      .catch((err) => console.error(err));
  }

  function fetchMovieCredits(movieId) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjYwNTQxZGVlNGQwNTljNjU0NzA3ZjhhYTRmOGZhYiIsInN1YiI6IjYzZTUyNTQ2ZDAzNmI2MDA4M2FkN2QxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1_zvUKHMxNgPjdTMHAffisYfXgaA-E2CBVw8vqhRHvQ",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((creditsData) => {
        console.log(creditsData);

        const cast = creditsData.cast;
        const swiperWrapper = document.querySelector(
          "#actors-swiper .swiper-wrapper"
        );

        cast.forEach((actor) => {
          const actorImage = document.createElement("img");
          actorImage.classList.add("swiper-slide");
          actorImage.src = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
          actorImage.alt = actor.name;

          swiperWrapper.appendChild(actorImage);
        });
      })
      .catch((err) => console.error(err));
  }
});
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWFmYjljYjQ5YzFmNTgxNzcwYjFlNjgzMDA3NTU4ZCIsInN1YiI6IjY2NDIyMGM3NzI2NGNiYWNhNGZiNjQ0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mngghNZp38c33Ou1XYMLeiDIUQ3dWWg6i9ps9tWIsOI",
  },
};
document.addEventListener("DOMContentLoaded", function () {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");

  fetchSimilarMovies(id);

  function fetchSimilarMovies(movieId) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWFmYjljYjQ5YzFmNTgxNzcwYjFlNjgzMDA3NTU4ZCIsInN1YiI6IjY2NDIyMGM3NzI2NGNiYWNhNGZiNjQ0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mngghNZp38c33Ou1XYMLeiDIUQ3dWWg6i9ps9tWIsOI",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((similarMoviesData) => {
        displaySimilarMovies(similarMoviesData.results);
      })
      .catch((err) => console.error(err));
  }

  function displaySimilarMovies(similarMovies) {
    const similarMoviesContainer = document.getElementById("similar-movies");

    const similarMoviesHTML = similarMovies
      .map(
        (movie) => `
        <div>
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" />
          <h3>${movie.title}</h3>
        </div>
      `
      )
      .join("");

    similarMoviesContainer.innerHTML = similarMoviesHTML;
  }
});
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("popularMovies")) {
      event.preventDefault();

      window.location.href = "index.html";
    }
  });
});
