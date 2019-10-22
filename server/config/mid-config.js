const axios = require('axios');
const UAT = axios.create({
    baseURL: "https://fts-uat.cardconnect.com/cardconnect/rest/",
    timeout: 3200,
    auth: {
        username: 'testing',
        password: 'testing123'
      },
    data: {
        merchid: '496160873888',
        retref: '292847200898'
    },
    headers: {'Content-Type': 'application/json'}
  });

module.exports = UAT