export const GOOGLE_API_KEY = "AIzaSyCm-V78gN0ptQXFV2aeu9cLt62QdzZeq5o";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCHED_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=";

export const YOUTUBE_COMMENT_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=X4vcCOhbsA0&key=";

export const LIVE_CHAT_COUNT = 10;
