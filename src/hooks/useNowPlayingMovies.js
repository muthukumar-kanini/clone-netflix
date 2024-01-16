import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovie } from '../utils/movieSlice'
import { useEffect } from 'react'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const getNowPlayingMovies = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const json = await data.json();
      console.log("all movies ")
      console.log(json.results)
     
      dispatch(addNowPlayingMovie(json.results))
  
    }
  
    useEffect( ()=>{
      getNowPlayingMovies()
    },[]
  
    )
}

export default useNowPlayingMovies