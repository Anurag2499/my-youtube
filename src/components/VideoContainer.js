import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_URL } from '../utils/constant';
import VideoCardC from './VideoCardC';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={'/watch?v=' + video.id}>
          <VideoCardC info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
