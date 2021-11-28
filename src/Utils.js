"use strict";


const {sendCallBacKURL}   = require('./Helper');

/**
 * Push Topic to cache
 * @param topic
 * @param url
 * @returns {Promise<{data: {topic: *, url: *}}|{error: *}>}
 */
exports.createTopic= async (topic, url) => {
    try {

        await addUrlTOCache(topic,url);
        return {
            data:{
                url,
                topic
            }
        };
    } catch (e) {
        console.log("error  Request",e);
        return {
            error: (e?.response?.data?.error) ||(e?.response?.data?.message) || e.message
        }
    }


};

/***
 * Publish topic to subscribers
 * @param topic
 * @param message
 * @returns {Promise<{error: *}|{data: {data: string, status: string}}>}
 */
exports.publishTopic = async (topic,message) => {
    try {
        let errorList = [];
        let data = await getCache(topic);

        //Push all subscribers
        if (!data) {
            return {
                data: {
                    status: "success",
                    data: "Message has been pushed even though there are no subscribers"
                }
            };
        } else {

            const result = await data.map(async (item) => {
                let {data: Ldata, error} = await sendCallBacKURL(item, message);
                console.log("hereeee",error,Ldata);
                console.log("error",error,Ldata);
                if (error) {
                    errorList.push(error);
                }

            });
            await Promise.all(result);

            if (errorList.length) {
                let r = errorList.join();
                return {
                    error: r
                }
            }
            return {
                data: {
                    status: "success",
                    data: "Message has been pushed to subscribers"
                }
            };
        }


    } catch (e) {
        console.log("Error Pushing Request",e);
        return {
            error:  e.message
        }
    }


};
async function  addUrlTOCache(key,value){
    let list = [];
    let val= getCache(key);
    if(!val) {
        list.push(value);
        setCache(key, list);
    }else{
        val.push(value);
        setCache(key, val);
    }
}
