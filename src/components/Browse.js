
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainMovieContainer from './MainMovieContainer'


const Browse = () => {
  

  useNowPlayingMovies()
  return (
    <div>
      <Header/>
      <MainMovieContainer/>
      
    </div>
  )
}

export default Browse
