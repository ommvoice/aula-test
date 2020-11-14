import { fork, all } from 'redux-saga/effects';
import { fetchSongs } from './songs';

export default function* root() {
  yield all([
    fork(fetchSongs),
  ]);
}
