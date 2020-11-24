const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const merchantSchema = new Schema({
    gwmerchid: { type: String, required: true },
    gwsite: { type: String, required: true },
    gwkey: { type: String, required: true },
    boltmerchid: { type: String, required: true },
    bolthsn: { type: String, required: true },
    boltkey: { type: String, required: true },  
    createdAt: {type: Date, default: Date.now, required: true }

});

const Merchant = mongoose.model("Merchant", merchantSchema);

module.exports = Merchant;
