'use strict';

const NodeCache = require( "node-cache" );
const myCache = new NodeCache();
const axios = require("axios");
/***
 * the success response in json format
 * @param res
 * @param data
 * @param code
 * @returns {*}
 */
global.successResponse = (res, data, code = 200) => {
    return res.status(code).send(
        data

    );
};
/***
 * returns the success response in text format
 * @param res
 * @param data
 * @param code
 * @returns {*}
 */
global.successResponseText = (res, data, code = 200) => {
    return res.set('content-type', 'text/plain').status(code).send(data);
};

/***
 * return the error response in json format
 * @param res
 * @param data
 * @param code
 * @returns {*}
 */

global.errorResponse = (res, error = "Oops. An Error Occurred", code = 500) => {
    return res.status(code).send({
        error: error
    });
};

global.setCache = (key, val ,ttl = 4000000000000000) => {
   return  myCache.set( key, val,  ttl  )

};

global.getCache = (key) => {
   return myCache.get( key )

};
exports.sendCallBacKURL= async (url,payload,header=null) =>{
    // console.log("CallbackURL Sending-----",url,payload,header);
    let res =axios.post(url, payload,header)
        .then(res => {
            // console.log("CallBackURL Response",res);
        }).catch((debug)=>{
        // console.log("CallBackURL Response error",debug);
            return {"error":debug.message};

    });
    return  res;
}



