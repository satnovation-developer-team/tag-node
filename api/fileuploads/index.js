'use strict';
const express = require('express');
const controller = require('./fileuploads.controller');
const router = express.Router();

var path = require('path')
var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
    	let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);

      cb(null, file.fieldname + '-' + Date.now() + ext)
    }
});
var upload = multer({storage: storage});
router.post('/', upload.single('filename'), controller.fileupload);

module.exports = router;