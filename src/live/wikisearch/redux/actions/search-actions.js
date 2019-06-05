import { FETCH_POSTS } from './types';
import axios from 'axios';

import { URL } from '../../../../config';

export const fetchPosts = (input) => dispacth => {
  console.log('fetching');

  axios.get(`${URL}${input}`)
  .then(response => dispacth({
    type: FETCH_POSTS,
    payload: response.data
  }))
}
