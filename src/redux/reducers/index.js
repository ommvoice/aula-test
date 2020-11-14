import { combineReducers } from 'redux';
import { default as songs } from './songs';

const rootReducer = combineReducers({
  songs,
})

export default function root(state, action) {
  return rootReducer(state, action)
}
