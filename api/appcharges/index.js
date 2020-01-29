'use strict';
const express = require('express');
const controller = require('./appcharges.controller');
const router = express.Router();

router.post('/', controller.charge);
router.post('/application_charge', controller.application_charge);
router.post('/servicecharge', controller.servicecharge);
router.get('/get_charge', controller.get_charge);
router.get('/get_appcharge', controller.get_appcharge);
router.get('/get_servicecharge', controller.get_servicecharge);


module.exports = router;