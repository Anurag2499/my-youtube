import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import SideBarVideos from './SideBarVideos';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('v'));

  const dispatch = useDispatch();
  const isMute = 0;

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex flex-row ">
        <div>
          <iframe
            className="rounded-lg"
            width="1000"
            height="500"
            src={
              'https://www.youtube.com/embed/' +
              searchParams.get('v') +
              '?si=vJmI_JSGKUKfgNFR'
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            autoPlay
          ></iframe>
        </div>
        <div className="w-full ">
          <LiveChat />
        </div>
      </div>
      <div className="flex flex-row">
        <div>
          <CommentsContainer />
        </div>
        <div className="w-full">
          <SideBarVideos mainVideoId={searchParams.get('v')} />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
