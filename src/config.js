export const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://react-user-profile.herokuapp.com'
  : 'http://localhost:8080'