const axios = require('axios');
const CSAPI = axios.create({
    baseURL: "https://fts-uat.cardconnect.com/cardsecure/api/v1/ccn/",
    timeout: 3200,
    headers: {'Content-Type': 'application/json'},
    data: {},
    responseType: 'json',
  });

module.exports = CSAPI