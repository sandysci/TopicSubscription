
const {connectandSubscribeWebsocket,connectandPublishWebsocket} = require('../Utils');

/****
 * Returns the subscribe url and topic
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.subscribe = async (req, res) => {
    try {
        let topic = req.query.topic || req.params.topic;
        if (!topic) return errorResponse(res, "topic must be passed as a query string ");
        let {data, error} = await connectandSubscribeWebsocket(topic,req.body.url);
        if(error)  return errorResponse(res, error);
        return successResponse(res, data);

    }
    catch (e) {
        return errorResponse(res, e.message);
    }
};

exports.publish = async (req, res) => {
    try {
        let topic = req.query.topic || req.params.topic;
        if (!topic) return errorResponse(res, "topic must be passed as a query string ");
        let {data, error} = await connectandPublishWebsocket(topic,req.body);
        if(error)  return errorResponse(res, error);
        return successResponse(res, data);

    }
    catch (e) {
        return errorResponse(res, e.message);
    }
};



