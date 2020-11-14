import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../redux/actions/songs';
import { songsApi } from '../services/api/songs';

export function* callSongsApi(category = 'top-albums') {
  try {
    const songs = yield call(songsApi, category);
    yield put(actions.getSongs(songs));
  } catch(error) {
    yield put(actions.onError(error));
  }
}

export function* fetchSongs() {

  yield takeLatest(actions.GET_SONGS, callSongsApi);
}
