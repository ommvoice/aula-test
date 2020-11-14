import axios from 'axios';
import API from '../../constants';

export function songs(relativeUrl) {
    const url = API + relativeUrl;
    
    return axios.request({
      url,
    });
}

export function songsApi(category, limit = 100) {
  return songs(`/${category}/all/${limit}/non-explicit.json`)
}
