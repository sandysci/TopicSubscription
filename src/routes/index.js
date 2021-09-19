var express = require('express');
var router = express.Router();
const matrixController = require("../app/MatrixController");
const {validateFileType} = require("../middleware/validateFileType");

/* GET base route. */
router.get('/', function(req, res, next) {
  res.json( {title: `Backend League Challenge CSV Matrix Manipulation`});
});

/* ECHO csv matrix route. */
router.post('/echo',validateFileType, matrixController.echo);

/* INVERT csv matrix route. */
router.post('/invert',validateFileType, matrixController.invert);

/* FlATTEN csv matrix route. */
router.post('/flatten',validateFileType, matrixController.flatten);

/* SUM csv matrix route. */
router.post('/sum',validateFileType, matrixController.sum);

/* MULTIPLY csv matrix route. */
router.post('/multiply',validateFileType, matrixController.multiply);

module.exports = router;
