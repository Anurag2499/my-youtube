import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import useSearch from '../hooks/useSearch';

const Head = () => {
  const {
    searchQuery,
    setSearchQuery,
    showSuggestions,
    setShowSuggestions,
    searchSuggestion,
    getVideos,
  } = useSearch();

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const onClickHandler = (item) => {
    console.log(item);
    // setSearchQuery(item);
  };

  console.log({ searchQuery });
  return (
    <div className="grid grid-flow-col p-3 m-1   shadow-lg  sticky top-0 z-10 bg-white">
      <div className="flex col-span-1 py-1 cursor-pointer">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="Menu"
          className="h-8"
          onClick={handleToggle}
        />
        <a href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGODoCWG12sFLdictA7wnOcoGgY0wjzZd9g&usqp=CAU"
            alt="Youtube Logo"
            className="h-8 mx-2 cursor-pointer"
          />
        </a>
      </div>
      <div className=" col-span-10  pl-52 pr-0 ">
        <div>
          <input
            className="w-1/2 border p-1 px-4 my-1 border-gray-700 rounded-l-3xl "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            // this is added to hide and show when clicked outside
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className="w-10 border p-1  bg-gray-300  border-gray-700 rounded-r-3xl"
            onClick={() => getVideos(searchQuery)}
          >
            🔎
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute  bg-white rounded-2xl border border-gray-100 shadow-md w-[30rem]">
            <ul>
              {searchSuggestion.map((item, index) => (
                <li
                  key={index}
                  className="py-1 px-4 hover:bg-gray-300 font-semibold cursor-pointer "
                  onClick={() => onClickHandler(item)}
                >
                  🔎 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1  py-1">
        <img
          src="https://cdn5.vectorstock.com/i/1000x1000/73/39/user-icon-male-person-symbol-profile-avatar-vector-20787339.jpg"
          alt=""
          className="h-8 cursor-pointer "
        />
      </div>
    </div>
  );
};

export default Head;
