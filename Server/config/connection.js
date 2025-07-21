const {mongoose} = require("mongoose");
require('dotenv').config();
const dbgr = require("debug")("development:mongoose");
const config = require("config");

const URL = process.env.URL;

mongoose.connect(config.get("URL")).then(()=>{
    dbgr("connected");
})
.catch((err)=>{
    dbgr(err);
})

module.exports = mongoose.connection;