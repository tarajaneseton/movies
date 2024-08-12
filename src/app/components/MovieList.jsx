import MovieCard from "./MovieCard";

console.log(process.env.TICKETMASTER_API_KEY,"<----process")

async function fetchMovies() {
  return fetch(`https://api.themoviedb.org/3/.json?api_key=${process.env.REACT_APP_API_KEY}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
return jsonObject._embedded.movies;
});
}

export default async function MovieList() {

const movies = await fetchMovies();

console.log(movies[0],'<---first movie back')

    // fetch data from tmdb API key
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
    );
}