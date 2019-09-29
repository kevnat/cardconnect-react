const express = require('express')
const router = express.Router()
const service = require('../controller/authController.js')

// router.get('/test', function (req, res) {
//     res.send('test route page - routes are configured in server.js correctly!')
//   })

// router.get('/api/test', function (req, res) {
//     service.test();
//     res.json("OK");
// })

router.put('/api/auth', function (req,res) {
    //logging incoming request
    console.log("_______________________Request_______________________")
    console.log(req.body);
    return service.auth(req)
    .then(result => {
        //logging response returned from mongoose insert
        console.log("_______________________Response_______________________");
        console.log(result.data);
        res.json(result.data);
        // return result.data;
    })
    .catch(error => {
        console.log(error);
        throw error;
    });
})

// router.put('/api/void', function (req, res, next) {
//     service.void();
// })

// router.put('/api/refund', function (req, res, next) {
//     service.refund();
//     res.json('refund response')
// })

// router.put('/api/inquire/', function (req, res, next) {
//     // console.log(retref);
//     service.inquire();
// })

module.exports = router 