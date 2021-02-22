const APIKEY="AIzaSyCu7xZBJCDhorbnU6Kup-UMTXccyXT4KUs";
const RESULTS = 20
export const API="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults="+RESULTS+"&type=video&key="+APIKEY+"&";

export const YOUTUBE = 'https://youtube.com/embed/'
export const ONE_VIDEO = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key='+APIKEY+'&id='