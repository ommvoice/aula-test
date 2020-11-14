import axios from 'axios';
import { songsApi } from '../songs';
 
jest.mock('axios');
 
describe('Axios', () => { 
	it('fetches successfully data from an API', async () => {
		const category = 'top-albums';
		songsApi(category);

		expect(axios.request).toHaveBeenCalledWith(
			{ url: `https://rss.itunes.apple.com/api/v1/us/apple-music/${category}/all/100/non-explicit.json` }
		);
	});
});
