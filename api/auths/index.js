'use strict';
const express = require('express');
const controller = require('./auths.controller');
const router = express.Router();

router.post('/', controller.auths);
router.put('/:id',controller.update_auths);


module.exports = router;