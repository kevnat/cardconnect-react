const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/payments"
);

const authSeed = 
  {
    amount: "1.00",
    resptext: "Approval",
    commcard: " C ",
    cvvresp: "X",
    batchid: "1900941913",
    avsresp: "Z",
    respcode: "00",
    entrymode: "ECommerce",
    merchid: "496160873888",
    token: "9441149619831111",
    authcode: "PPS000",
    respproc: "FNOR",
    bintype: "",
    retref: "293743242716",
    respstat: "A",
    account: "9441149619831111"
  };

db.Auth
  .remove({})
  .then(() => db.Auth.collection.insertOne(authSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });