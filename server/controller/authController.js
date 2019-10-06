// const axios = require('axios');
const API = require('../config/api-config');
// const config = require('../config/mid-config');
const db = require('../models');

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
    // let authReq = req + config;
    req.body.merchid = API.defaults.data.merchid;
    console.log(req.body);
    //sending request to cardconnect API /auth
    return API.put('/auth', req.body)
    .then(authResp => {
        // console.log(authResp);
        return authResp;
    })
    .then(authResp => {
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

function callVoid () {
    console.log("calling Void");
    return API.put('/void', {
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

const service = {
    test: testConnect,
    auth: callAuth,
    report: callReport,
    void: callVoid,
    refund: callRefund,
    inquire: callInquire
}

module.exports = service;