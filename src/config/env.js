// const devApiUrl = 'http://45.80.153.118:3300/api/';
// const prodApiUrl = 'http://45.80.153.118:3300/api/';
const prodApiUrl =
  'https://live-pointofsale-backend-production.up.railway.app/api';
const devApiUrl =
  'https://live-pointofsale-backend-production.up.railway.app/api/';

// const devApiUrl = 'http://localhost:3300/api/';

export default {
  apiUrl: process.env.NODE_ENV === 'production' ? prodApiUrl : devApiUrl,
  ...process.env,
};
