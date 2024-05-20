const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjYwNTQxZGVlNGQwNTljNjU0NzA3ZjhhYTRmOGZhYiIsInN1YiI6IjYzZTUyNTQ2ZDAzNmI2MDA4M2FkN2QxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1_zvUKHMxNgPjdTMHAffisYfXgaA-E2CBVw8vqhRHvQ",
  },
};

let currentPage = 1;
const parentElement = document.querySelector(".movies");

function fetchData(page) {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      parentElement.innerHTML = "";

      response.results.map((film) => {
        const movie = document.createElement("movie");
        movie.classList.add("movie");
        const link = document.createElement("a");
        link.href = `details.html?id=${film.id}`;
        const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w500" + film.poster_path;
        const title = document.createElement("h3");
        title.textContent = film.title;
        const imdb = document.createElement("span");
        imdb.textContent = "Imdb:" + film.vote_average;
        link.append(img, title, imdb);

        movie.append(link);
        parentElement.append(movie);
      });
    })
    .catch((err) => console.error(err));
}

fetchData(currentPage);

function goToPage(pageNumber) {
  currentPage = pageNumber;
  fetchData(currentPage);
}
