const axios = require('axios');
const API = axios.create({
    baseURL: "https://fts.cardconnect.com:6443/cardconnect/rest/",
    timeout: 1000,
    auth: {
        username: 'testing',
        password: 'testing123'
      },
    headers: {'Content-Type': 'application/json'},
    data: {
        merchid: '496160873888'
    }
  });


module.exports = API