import { GET_SONGS, ON_ERROR } from '../actions/songs';

const initialState = {
  songs: {},
  error: null,
};

function getSongs(state = initialState, action) {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload
      };
    case ON_ERROR:
      return {
        ...state,
        error: true 
      };
    default:
      return state;
  }
}

export default getSongs;
