import React from 'react';

const VideoCardC = ({ info }) => {
  console.log(info);

  const calculateDiff = (date1) => {
    const date = new Date();
    const dateTimeString = date.toISOString();
    const currentDate = new Date(dateTimeString);
    const publishDate = new Date(date1);

    const diffMilliseconds = Math.abs(currentDate - publishDate);
    const diffSeconds = diffMilliseconds / 1000;
    const diffMinutes = diffSeconds / 60;
    const diffHours = diffMinutes / 60;
    const diffDays = Math.floor(diffHours / 24);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffMonths / 12);

    let result;
    if (diffYears > 0) {
      result = `${diffYears} ${diffYears === 1 ? 'year' : 'years'}`;
    } else if (diffMonths > 0) {
      result = `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'}`;
    } else if (diffDays > 0) {
      result = `${diffDays} ${diffDays === 1 ? 'day' : 'days'}`;
    } else if (diffHours > 0) {
      result = `${Math.floor(diffHours)} hours`;
    } else {
      result = `${Math.floor(diffMinutes)}) minutes`;
    }
    return result;
  };

  const generateCount = (num) => {
    let mappings = {
      K: [1000, 999999],
      M: [1000000, 999999999],
      B: [1000000000, 999999999999],
      T: [1000000000000, 999999999999999],
    };

    let abs = Math.abs(num);

    for (var abbr in mappings) {
      if (abs >= mappings[abbr][0] && abs <= mappings[abbr][1]) {
        return Math.round(num / mappings[abbr][0]) + abbr;
      }
    }

    return num;
  };

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
