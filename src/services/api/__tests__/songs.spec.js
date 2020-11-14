import axios from 'axios';
import { songsApi } from '../songs';
import { SONGS } from '../../../mocks/fixtures/songs';
 
jest.mock('axios');
 
describe('Axios', () => { 
	const category = 'top-albums';

	it('calls axios with correct url', async () => {
		songsApi(category);

		expect(axios.request).toHaveBeenCalledWith(
			{ url: `https://rss.itunes.apple.com/api/v1/us/apple-music/${category}/all/100/non-explicit.json` }
		);
	});

	it('fetches successfully data from an API', async () => {	 
		axios.request.mockImplementationOnce(() => Promise.resolve(SONGS));
	 
		await expect(songsApi('react')).resolves.toEqual(SONGS);
	});
});
