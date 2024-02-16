import React from 'react';
import { calculateDiff, generateCount } from '../utils/helper';

const VideoCardSideBar = ({ info }) => {
  console.log(info);

  if (!info) return;
  const { snippet } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;

  const publishTime = calculateDiff(publishedAt);

  return (
    <div className=" my-2 flex flex-row   shadow-sm w-full">
      <div className="">
        <img className="rounded-lg w-80 " src={thumbnails.medium.url} alt="" />
      </div>
      <div className="ml-2">
        <h1 className="font-bold pb-1  mb-1">
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
      </div>
    </div>
  );
};

export default VideoCardSideBar;
