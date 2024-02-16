import React, { useEffect } from 'react';
import { YOUTUBE_API_URL } from '../utils/constant';
import VideoCardC from './VideoCardC';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setVideos } from '../utils/videoSlice';
import Shimmer, { ButtonListShimmer, MainContainerShimmer } from './Shimmer';

const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const ytVideos = useSelector((store) => store.videos.newVideos);
  // console.log('ytv' + ytVideos);
  console.log('VC called');

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    dispatch(setVideos(json.items));
    console.log('getvideo');
  };

  if (!ytVideos) {
    return (
      <div>
        <MainContainerShimmer />;
      </div>
    );
  }

  return (
    <div className="flex flex-wrap">
      {ytVideos &&
        ytVideos.map((video) => {
          const videoId =
            typeof video?.id === 'object' ? video?.id?.videoId : video?.id;
          console.log(typeof video.id);
          return (
            <div key={videoId}>
              <Link to={'/watch?v=' + videoId}>
                <VideoCardC info={video} />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default VideoContainer;
