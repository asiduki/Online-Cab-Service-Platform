import {mongoose} from "mongoose";
import 'dotenv/config';
import Debug from 'debug';
const dbgr = Debug('development:mongoose');
import config from "config";

const URL = process.env.URL;

mongoose.connect(config.get("URL")).then(()=>{
    dbgr("connected");
})
.catch((err)=>{
    dbgr(err);
})

export default mongoose.connection;