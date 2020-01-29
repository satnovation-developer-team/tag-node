'use strict';
const express = require('express');
const controller = require('./specializations.controller');
const router = express.Router();

router.post('/', controller.save_specialization);
router.get('/',controller.get_specialization);


module.exports = router;