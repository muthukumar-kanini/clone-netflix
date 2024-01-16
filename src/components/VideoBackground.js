import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {

    
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
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div >
      <iframe
        src={"https://www.youtube.com/embed/"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
