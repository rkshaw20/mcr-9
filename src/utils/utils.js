import React from "react";
import ReactPlayer from "react-player";

export  const isWatchList = (watchLater, id) => {
    return watchLater.some(item => item._id === id);
  };

 

const VideoPlayer = ({ url }) => {
  return <ReactPlayer url={url} controls={true} width="640px" height="360px" />;
};

export default VideoPlayer;