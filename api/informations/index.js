'use strict';
const express = require('express');
const controller = require('./informations.controller');
const router = express.Router();

router.post('/save_information', controller.save_information);
router.post('/save_info_category', controller.save_info_category);
router.get('/get_info_category', controller.get_info_category);
router.post('/save_info_education', controller.save_info_education);
router.get('/get_education', controller.get_education);
router.get('/get_information', controller.get_information);


module.exports = router;