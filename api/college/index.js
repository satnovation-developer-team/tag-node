'use strict';
const express = require('express');
const controller = require('./college.controller');
const router = express.Router();

router.post('/save_colleges', controller.save_colleges);
router.get('/get_images', controller.get_images);
router.get('/get_event', controller.get_event);
router.get('/get_colleges', controller.get_colleges);
router.post('/save_collegetype', controller.save_collegetype);
router.post('/save_offers', controller.save_offers);
router.post('/save_rank', controller.save_rank);
router.get('/get_rank', controller.get_rank);
router.get('/get_coursedemand', controller.get_coursedemand);
router.get('/get_offers', controller.get_offers);
router.get('/get_collegetype', controller.get_collegetype);
router.get('/get_modeofstudy', controller.get_modeofstudy);


router.post('/save_servicecharges', controller.save_servicecharges);
router.post('/save_coursedemand', controller.save_coursedemand);
router.post('/save_collegeinfo', controller.save_collegeinfo);

module.exports = router;
