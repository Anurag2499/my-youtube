import { useEffect, useState } from 'react';
import {
  YOUTUBEVIDEOS_SEARCH_API,
  YOUTUBE_SEARCH_API,
} from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setVideos } from '../utils/videoSlice';

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  /***
   *  searchCache = {
   *    "iphone" : ["iphone2", "iphone11", "iphone12"]
   *  }
   *
   *  searchQuery = iphone
   */

  // DEBOUNCING (Used to Optimize Performance)
  useEffect(() => {
    // API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    console.log(data);
    const json = await data.json();
    console.log(json);
    setSearchSuggestion(json[1]);
    // update the searchSlice for this new api call
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };
  // DEBOUNCING

  const getVideos = async (search) => {
    const data = await fetch(
      YOUTUBEVIDEOS_SEARCH_API.replace('[surfing]', search)
    );
    const json = await data.json();
    console.log(json);
    dispatch(setVideos(json.items));
  };

  return {
    searchQuery,
    setSearchQuery,
    showSuggestions,
    setShowSuggestions,
    searchSuggestion,
    getVideos,
  };
};

export default useSearch;
