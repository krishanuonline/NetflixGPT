import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {

  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

  useNowPlayingMovies(); //custom hooks to fetch now playing movies
  usePopularMovies(); //custom hooks to fetch popular playing movies
  useTopRatedMovies(); //custom hooks to fetch top rated playing movies
  useUpcomingMovies(); //custom hooks to fetch upcoming playing movies

  return (
    <div className="">
      <Header/>
      {showGptSearch ? (
        <GptSearch/>
      ):(
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      )}
      
    </div>

  )
}

export default Browse;