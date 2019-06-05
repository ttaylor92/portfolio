import { FETCH_POSTS } from '../actions/types';

const initialState = {
  results: []
}

export default function(state = initialState, action){
  console.log('reducer');

  switch(action.type){
    case FETCH_POSTS:
      return {
      ...state,
      results: action.payload
    }
    default:
      return state;
  }
}
