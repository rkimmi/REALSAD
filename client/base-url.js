export default process.env.NODE_ENV ===
'production'
  ? 'https://sheltered-anchorage-98797.herokuapp.com/'
  : 'http://localhost:3000'
