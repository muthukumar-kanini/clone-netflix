import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';



const MainMovieContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovie)
    if(movies===null){return;}
    const mainMovie = movies[0]
     console.log("this is 0Th index")
     console.log(mainMovie)
    

   const {original_title , overview} = mainMovie;

    
  return (
    <div>
      <VideoTitle title = {original_title} overview={overview} />
     <VideoBackground  movieId={mainMovie.id} />
    </div>
  )
}

export default MainMovieContainer
