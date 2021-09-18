var express = require('express');
var router = express.Router();
const matrixController = require("../app/MatrixController");
const {validateFileType} = require("../middleware/validateFileType");

/* GET base route. */
router.get('/', function(req, res, next) {
  res.json( {title: `Matrix Manipulation`});
});

/* ECHO csv page. */
router.post('/echo',validateFileType, matrixController.echo);
router.post('/invert',validateFileType, matrixController.invert);
router.post('/flatten',validateFileType, matrixController.flatten);
router.post('/sum',validateFileType, matrixController.sum);
router.post('/multiply',validateFileType, matrixController.multiply);
module.exports = router;
