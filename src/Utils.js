"use strict";


const {sendCallBacKURL}   = require('./Helper');

exports.connectandSubscribeWebsocket = async (topic, url) => {
    try {

        await addUrlTOCache(topic,url);
        return {
            data:{
                url,
                topic
            }
        };
    } catch (e) {
        console.log("error Websocket Request",e);
        return {
            error: (e?.response?.data?.error) ||(e?.response?.data?.message) || e.message
        }
    }


};


exports.connectandPublishWebsocket = async (topic,message) => {
    try {
        let errorList = [];
        let data = await getCache(topic);
        //Push all subscribers
        if(data) {
            const result = await data.map(async (item) => {
                let {error} = await sendCallBacKURL(item, message);
                if (error) {
                    errorList.push(error);
                }

            });
            await Promise.all(result);

            if (errorList) {
                let r =  errorList.join();
                return {
                    error: r
                }
            }
        }

        return {
            data:{
                status:"success",
                data:"Message has been pushed to subscribers"
            }
        };


    } catch (e) {
        console.log("Error Pushing Request",e);
        return {
            error: (e?.response?.data?.error) ||(e?.response?.data?.message) || e.message
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
