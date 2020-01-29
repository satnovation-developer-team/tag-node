'use strict';
const express = require('express');
const controller = require('./nationalities.controller');
const router = express.Router();

router.post('/', controller.save_nationality);
router.get('/', controller.get_nationality);

module.exports = router;