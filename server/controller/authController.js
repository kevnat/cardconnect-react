const API = require('../config/api-config');
const db = require('../models');
const UAT = require('../config/mid-config');
// const axios = require('axios');

//test connect function
function testConnect() {
    API.get(
        ""
    )
    .then(function(response) {
        console.log(`Response Body:  + ${response.data}`);
    })
    .catch(function(error){
        console.log(error);
    });  
}

function callAuth (req) {
    //combine req with mid stored in mid-config
    req.body.merchid = API.defaults.data.merchid;
    //sending request to cardconnect API /auth
    return API.put('/auth', req.body)
    .then(authResp => {
        return authResp;
    })
    .then(authResp => {
        //adding timestamp to authResp 
        authResp.data.createdAt = Date.now();
        //writing record to Auth table
        db.Auth.collection.insertOne(authResp.data);
        return authResp;
    })
    .catch(error => {
        console.log(error);
        throw error;
    })
}

function callReport () {
    return db.Auth.find()
    .then(result => {
        return result
    })
    .catch(error => {
        console.log(error);
        throw error;
    })
}

function callVoid (req) {
    req.body = UAT.defaults.data;
    return UAT.put('/void', req.body)
    .then(voidResp => {
        return voidResp;
    })
    .catch(error => {
        console.log(error);
        throw error;
    })
}

function callRefund () {
    console.log("calling Refund");
    return API.put('/refund', {
        merchid: config.merchid,
        retref: config.retref
    })
    .then(result => {
        console.log(result.data);
        return result;
    })
    .catch(error => {
        console.log(error);
        throw error;
    })
}

function callInquire () {
    console.log("calling Inquire");
    return API.get('/inquire/290362274439') //parameterize
    .then(result => {
        console.log(result.data);
        return result;
    })
    .catch(error => {
        console.log(error);
        throw error;
    })
}

function saveConfig (req) {
const newMerchant = req.body;
 db.Merchant.collection.insertOne(newMerchant)
  .then(newMidRes => {
    console.log(result.result.n + " New merchant record inserted!");
    return newMidRes;
    // process.exit(0);
  })
  .catch(error => {
    console.error(error);
    throw error;
  });
}


const service = {
    test: testConnect,
    auth: callAuth,
    report: callReport,
    void: callVoid,
    refund: callRefund,
    inquire: callInquire,
    setup: saveConfig
}

module.exports = service;