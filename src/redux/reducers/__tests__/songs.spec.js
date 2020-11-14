import reducer from '../songs';
import * as actions from '../../actions/songs';
import { SONGS } from '../../../mocks/fixtures/songs';
 
const initialState = {
	songs: {},
	error: null
};

describe('Reducers', () => { 
	describe('Songs', () => { 
		it('should return the initial state', () => {
			expect(reducer(undefined, {})).toEqual(initialState);
		});

		it('should handle GET_SONGS', () => {
			expect(reducer(initialState, actions.getSongs(SONGS))).toEqual({ songs: SONGS, error: null });
		});

		it('should handle ON_ERROR', () => {
			expect(reducer(undefined, actions.onError())).toEqual({...initialState, error: true});
		});
	});
});
