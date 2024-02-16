import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import VideoCardSideBar from './VideoCardSideBar';

const SideBarVideos = ({ mainVideoId }) => {
  const ytVideos = useSelector((store) => store.videos.newVideos);
  console.log(ytVideos);
  return (
    <div className=" p-2  m-4  flex flex-wrap items-center">
      {ytVideos &&
        ytVideos
          .filter((video) => {
            const videoId =
              typeof video?.id === 'object' ? video?.id?.videoId : video?.id;
            return videoId !== mainVideoId;
          })
          .slice(0, 10)
          .map((video) => {
            const videoId =
              typeof video?.id === 'object' ? video?.id?.videoId : video?.id;
            console.log(typeof video.id);
            return (
              <div key={videoId}>
                <Link to={'/watch?v=' + videoId}>
                  <VideoCardSideBar info={video} />
                </Link>
              </div>
            );
          })}
    </div>
  );
};

export default SideBarVideos;
