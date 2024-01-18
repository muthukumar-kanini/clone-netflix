
import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMoiveTrailer = () => {    //imports movie id 
   
    const dispatch = useDispatch()
    const getMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/753342/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      console.log("traier json");
      console.log(json);
  
      const filtertrailer = json.results.filter(
        (video) => video.type === "Trailer"
      );
  
      const trailer = filtertrailer.length ? filtertrailer[0] : json.results[0];
      console.log(trailer);
  
      dispatch(addTrailerVideo(trailer))
  
    };
  
    useEffect(() => {
      getMovies();
    }, []);
}

export default useMoiveTrailer
