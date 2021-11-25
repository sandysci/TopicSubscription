"use strict";

const WebSocket = require('ws');
exports.connectandSubscribeWebsocket = async (topic,url) => {
    try {


        var ws = new WebSocket('ws://localhost:8080');
        ws.onopen = function () {
            ws.send(JSON.stringify({
                request: 'SUBSCRIBE',
                message: '',
                channel: topic
            }));

        };
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

        var ws = new WebSocket('ws://localhost:8080');
        ws.onopen = function () {
            ws.send(JSON.stringify({
                request: 'PUBLISH',
                message: message,
                channel: topic
            }));

        };
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