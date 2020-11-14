import { runSaga } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../../services/api/songs';
import * as actions from '../../redux/actions/songs';
import { SONGS } from '../../mocks/fixtures/songs';
import { fetchSongs, callSongsApi } from '../songs';

describe('Sagas', () => {
  describe('Songs', () => {
    const generator = fetchSongs();
    const songsApiSpy = jest.spyOn(api, 'songsApi');

    afterEach(() => {
      songsApiSpy.mockClear();
    });
  
    it('should wait for every GET_SONGS action and calls callSongsApi', () => {
      expect(generator.next().value)
          .toEqual(takeLatest(actions.GET_SONGS, callSongsApi));
    });

    it('should be done on next iteration', () => {
      expect(generator.next().done).toBeTruthy();
    });

    it('should call api and dispatches success action', async () => {   
      const dispatched = [];     
      songsApiSpy.mockImplementation(() => Promise.resolve(SONGS));

      await runSaga({
        dispatch: (action) => dispatched.push(action),
      }, callSongsApi);
  
      expect(songsApiSpy).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([actions.getSongs(SONGS)]);
    });

    it('should call api and dispatches error action', async () => {
      const dispatched = [];
      songsApiSpy.mockImplementation(() => Promise.reject());
    
      await runSaga({
        dispatch: (action) => dispatched.push(action),
      }, callSongsApi);
  
      expect(dispatched).toEqual([actions.onError()]);
    });
  });
});
  