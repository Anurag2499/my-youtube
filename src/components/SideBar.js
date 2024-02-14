import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="m-2 p-2 border border-gray-400">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Games</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Games</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
