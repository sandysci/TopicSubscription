
const {publishTopic,createTopic} = require('../Utils');

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
        let {data, error} = await createTopic(topic,req.body.url);
        if(error)  return errorResponse(res, error);
        return successResponse(res, data);

    }
    catch (e) {
        return errorResponse(res, e.message);
    }
};

/****
 * Returns the success/failed after publishing a topic
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.publish = async (req, res) => {
    try {
        let topic = req.query.topic || req.params.topic;
        if (!topic) return errorResponse(res, "topic must be passed as a query string ");
        let {data, error} = await publishTopic(topic,req.body);
        if(error)  return errorResponse(res, error);
        return successResponse(res, data);

    }
    catch (e) {
        return errorResponse(res, e.message);
    }
};

/****
 * Returns the payload back to test url
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.testEndpoint = async (req, res) => {
    try {
        return successResponse(res, req.body);

    }
    catch (e) {
        return errorResponse(res, e.message);
    }
};


