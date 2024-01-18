import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  console.log(posterPath);

  return (
    <div className="w-48 pr-4">
      <img
        className="rounded-lg rounded-lg shadow-md"
        src={IMG_CDN + posterPath}
        alt="Movie-card"
      />
    </div>
  );
};

export default MovieCard;
