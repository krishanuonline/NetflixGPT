import React from 'react'
import Header from './Header'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Browse = () => {

  useNowPlayingMovies(); //custom hooks

  return (
    <Header/>
  )
}

export default Browse;