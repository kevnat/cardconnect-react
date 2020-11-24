const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const merchantSchema = new Schema({
    gw_merchid: { type: String, required: true },
    gw_authkey: {type: String, required: true },
    gw_site: { type: String, required: true },
    bolt_merchid: { type: String, required: true },
    bolt_hsn: { type: String, required: true },
    bolt_authkey: { type: String, required: true },  
    createdAt: {type: Date, default: Date.now, required: true }

});

const Merchant = mongoose.model("Merchant", merchantSchema);

module.exports = Merchant;
