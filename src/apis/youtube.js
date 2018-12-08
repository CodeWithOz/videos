import axios from 'axios';

const KEY = 'AIzaSyA7ZeuBlPudAGPcIg1b-T2lL96rijs5ApY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
