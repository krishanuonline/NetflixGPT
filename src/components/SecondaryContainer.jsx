import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);

  return (
    <div>
      {/* Render only if movies and movies.nowPlayingMovies exist */}
      {movies && movies.nowPlayingMovies ? (<div>
        
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      
      </div>) : (
        <p>Loading...</p> // Optional fallback when movies is null or undefined
      )}


    </div>
  );
};

export default SecondaryContainer;
