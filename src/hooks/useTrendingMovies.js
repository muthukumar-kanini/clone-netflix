import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrendingMovies } from '../utils/movieSlice'
import { useEffect } from 'react'

const useTrendingMovies = () => {
    const dispatch = useDispatch()

    const getTrendingMovies = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS)
      const json = await data.json();
      console.log("all movies ")
      console.log(json.results)
     
      dispatch(addTrendingMovies(json.results))
  
    }
  
    useEffect( ()=>{
        getTrendingMovies()
    },[]
  
    )
}

export default useTrendingMovies