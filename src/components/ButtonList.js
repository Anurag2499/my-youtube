import React from 'react';
import Button from './Button';

const NameList = [
  'All',
  'Gaming',
  'Comedy',
  'Sports',
  'SRK',
  'Cricket',
  'BasketBall',
  'Football',
  'Latest',
  'Rock',
  'Songs',
];

const ButtonList = () => {
  return (
    <div className="flex">
      {NameList.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
