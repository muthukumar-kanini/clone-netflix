import React from 'react';
import { FaPlay } from 'react-icons/fa';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-10">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="pt-6 text-lg w-1/2">{overview}</p>
      <div className='my-2 flex'>
        <button className='bg-gray-500 text-white p-4 px-16 text-xl flex items-center  bg-opacity-50 rounded-lg' >
          <FaPlay className="mr-2" /> Play
        </button>
        <button  className='bg-gray-500 text-white p-4 px-16 text-xl flex items-center  bg-opacity-50 rounded-lg mx-2'>More Info </button>
      </div>
    </div>
  );
}

export default VideoTitle;
    