import React from 'react';
import { calculateDiff, generateCount } from '../utils/helper';

const VideoCardC = ({ info }) => {
  // console.log(info);

  if (!info) return;
  const { snippet } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;

  const publishTime = calculateDiff(publishedAt);

  return (
    <div className="p-2 my-2   mx-5 shadow-sm w-64">
      <div className="">
        <img className="rounded-lg w-80 " src={thumbnails.medium.url} alt="" />
      </div>
      <div>
        <h1 className="font-bold py-2 mb-1">
          {/* {title.length > 60 ? title.substring(0, 60) + '...' : title} */}
          {title.length > 50
            ? title.substring(0, 50).replace(/\s+\S*$/, '') + '...'
            : title}
        </h1>
        <p className="font-semibold text-gray-600 text-sm">{channelTitle}</p>
        <div className="flex flex-row  text-gray-600 text-sm">
          <p className="mr-1">{publishTime + ' ago '}</p>
          {info.statistics && info.statistics.viewCount && (
            <p>{' • ' + generateCount(info?.statistics?.viewCount)} views</p>
          )}
        </div>
        {/* <p>{viewCount + ' views'} </p> */}
      </div>
    </div>
  );
};

export default VideoCardC;
