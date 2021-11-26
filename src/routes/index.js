var express = require('express');
var router = express.Router();
const topicSubscriptionController = require("../app/TopicSubscriptionController");
const {validateUrlType,validateDataType} = require("../middleware/validateUrl");

/* GET base route. */
router.get('/', function(req, res, next) {
  res.json( {title: `Topic Subscription`});
});

/* subscribe to a topic. */
router.post('/subscribe/:topic',validateUrlType,topicSubscriptionController.subscribe);
router.post('/publish/:topic',validateDataType,topicSubscriptionController.publish);
router.post('/:anything',topicSubscriptionController.testEndpoint);



module.exports = router;
