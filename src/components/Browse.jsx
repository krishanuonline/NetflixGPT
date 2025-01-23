import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';


const Browse = () => {

  useNowPlayingMovies(); //custom hooks

  return (
    <div className='bg-black'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>

  )
}

export default Browse;