'use strict';
const express = require('express');
const controller = require('./partners.controller');
const router = express.Router();

router.post('/save_partners', controller.save_partners);
router.get('/get_partners/:id', controller.get_partners);
router.get('/get_partner', controller.get_partner);


module.exports = router;