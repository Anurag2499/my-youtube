import React from 'react';

const VideoCardC = ({ info }) => {
  // console.log(info);

  if (!info) return;
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="p-2 m-2 shadow-md w-64 ">
      <div className="">
        <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
      </div>
      <div>
        <h1 className="font-bold py-2">{title}</h1>
        <p>{channelTitle}</p>
        <p>{viewCount + ' views'} </p>
      </div>
    </div>
  );
};

export default VideoCardC;
