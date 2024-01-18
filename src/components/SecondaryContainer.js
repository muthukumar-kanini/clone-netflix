import React from "react";
import Movielist from "./Movielist";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovie && (
      <div className="w-screen bg-black pl-12">
        <div className="-mt-56 relative  z-20 ">  
          <Movielist title={"Now Playing"} movies={movies.nowPlayingMovie} />
        </div>

      
        <Movielist title={"Popular"} movies={movies.popularMovies} />
        <Movielist title={"Trending"} movies={movies.trendingMovies} />
        <Movielist title={"Upcomming Movies"} movies={movies.upComingMovies} />
        <Movielist title={"Top Rated"} movies={movies.nowPlayingMovie} />
      </div>
    )
  );
};

export default SecondaryContainer;
