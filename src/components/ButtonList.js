import React from 'react';
import Button from './Button';
import useSearch from '../hooks/useSearch';

const NameList = [
  'All',
  'Coding',
  'Basketball',
  'Comedy',
  'Music',
  'KK Songs',
  'Football',
  'MS Dhoni',
  'Rock',
  'Songs',
  'Stephen Curry',
];

const ButtonList = () => {
  const { getVideos } = useSearch();
  return (
    <div className="flex cursor-pointer">
      {NameList.map((name) => (
        <div
          key={name}
          onClick={() => {
            // console.log(name);
            getVideos(name);
          }}
        >
          <Button name={name} />
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
