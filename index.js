"use strict";
const timestam = require("./src/Stamp");

/**
 * This get dateTime in returns the timestamp equivalent
 */
exports.getTimeStampNow = (datetime)=>{
    let d ;
    if(!datetime){
         d = new Date();   
    }else{
        d = new Date(datetime);
    }
    return timestam.convertTimestamp(d);
       
}
