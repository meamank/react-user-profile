exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'SERVER_URL'
  : 'http://localhost:3000'