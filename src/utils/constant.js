export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const OFFSET_LIVE_CHAT = 20;

export const YOUTUBE_API_URL =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=' +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const YOUTUBEVIDEOS_SEARCH_API =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=[surfing]&key=' +
  GOOGLE_API_KEY;
