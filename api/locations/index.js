'use strict';
const express = require('express');
const controller = require('./locations.controller');
const router = express.Router();

router.post('/', controller.save_location);
router.get('/get_location', controller.get_location);

module.exports = router;
