import React from 'react';
import SideBar from './SideBar';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Body = () => {
  const isShowSideBar = useSelector((store) => store.app.isMenuOpen);
  console.log(isShowSideBar);
  return (
    <div className="flex">
      {isShowSideBar && <SideBar />}
      <Outlet />
    </div>
  );
};

export default Body;
