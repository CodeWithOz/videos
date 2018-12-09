import axios from 'axios';
import secrets from '../secrets';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: secrets.YOUTUBE_API_KEY
  }
});
