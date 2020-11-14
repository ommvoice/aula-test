export const GET_SONGS = 'GET_SONGS';
export const ON_ERROR = 'ON_ERROR';

export function getSongs(payload) {
  return {
    type: GET_SONGS,
    payload,
  };
}

export function onError() {
  return {
    type: ON_ERROR,
  };
}
