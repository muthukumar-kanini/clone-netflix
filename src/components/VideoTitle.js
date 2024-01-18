import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-[3%] absolute text-white  bg-gradient-to-r from-black w-screen aspect-video" >
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="pt-6 text-lg w-1/2">{overview}</p>
      <div className='my-7 flex'>
        <button className='bg-white text-black p-4 px-16 text-xl flex items-center rounded-lg hover:bg-opacity-80' >
          <FaPlay className="mr-2" /> Play
        </button>
        <button className='bg-gray-500 text-white p-4 px-16 text-xl flex items-center bg-opacity-50 rounded-lg mx-2 hover:bg-slate-400'>
      <FaInfoCircle className="mr-2" /> More Info
    </button>
      </div>
    </div>
  );
}

export default VideoTitle;
    