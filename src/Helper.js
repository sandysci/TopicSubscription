'use strict';

const NodeCache = require( "node-cache" );
const myCache = new NodeCache();
const request = require('request')


// import fetch from 'node-fetch';
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
/***
 * add to cache
 * @param key
 * @param val
 * @param ttl
 * @returns {boolean}
 */
global.setCache = (key, val ,ttl = 900) => {
   return  myCache.set( key, val,  ttl  )

};
/**
 * get cache key
 * @param key
 * @returns {unknown}
 */
global.getCache = (key) => {
   return myCache.get( key )

};
/**
 * Post to Callback Url
 * @param url
 * @param payload
 * @returns {Promise<{error: *}>}
 */
exports.sendCallBacKURL= async (url,payload) =>{
    let res = {};
    try {
       res = await callRequest(url,payload);
    } catch (error) {
        console.error(error);
        return {"error":error.message};
    }

    return  res;
}

/**
 * Post api request
 * @param url
 * @param payload
 * @returns {Promise<unknown>}
 */
function doRequest(url,payload) {
    return new Promise(function (resolve, reject) {

        request.post({
            headers: {'content-type' : 'application/json'},
            url:     url,
            body:    JSON.stringify(payload)
        }, function(error, response, body){
            if (!error && response.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
            console.log(error);

        });
});
}

// Usage promise
async function callRequest(url,payload) {
   return await doRequest(url,payload);

}



