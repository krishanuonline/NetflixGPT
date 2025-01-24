import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);

  return (
    <div className="bg-black">
      {/* Render only if movies and movies.nowPlayingMovies exist */}
      {movies && movies ? (<div className="-mt-60 relative z-10">
        
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        
      
      </div>) : (
        <p>Loading...</p> // Optional fallback when movies is null or undefined
      )}


    </div>
  );
};

export default SecondaryContainer;
