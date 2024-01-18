
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainMovieContainer from './MainMovieContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'


const Browse = () => {
  

  useNowPlayingMovies()
  usePopularMovies()
  useTrendingMovies()
  useUpComingMovies()
  return (
    <div>
      <Header/>
      <MainMovieContainer/>
      <SecondaryContainer/>
      
    </div>
  )
}

export default Browse
