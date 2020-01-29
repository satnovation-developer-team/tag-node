'use strict';
const express = require('express');
const controller = require('./colleges.controller');
const router = express.Router();

router.post('/', controller.save_accreditation);
router.post('/save_location', controller.save_location);
router.get('/get_location', controller.get_location);
router.post('/save_placement', controller.save_placement);
router.get('/get_placement', controller.get_placement);
router.get('/get_accreditation', controller.get_accreditation);
router.get('/get_approval', controller.get_approval);
router.get('/get_ownership', controller.get_ownership);
router.get('/get_coursestatus', controller.get_coursestatus);



router.post('/save_ownership', controller.save_ownership);
router.post('/save_coursestatus', controller.save_coursestatus);
router.post('/save_approval', controller.save_approval);
router.post('/save_college', controller.save_college);
router.post('/save_singlepage', controller.save_singlepage);
router.post('/save_collegecriteria', controller.save_collegecriteria);
router.post('/save_collegeexam', controller.save_collegeexam);
router.post('/save_facilityimage', controller.save_facilityimage);
router.post('/save_collegescholarship', controller.save_collegescholarship);
router.post('/save_collegeqn', controller.save_collegeqn);
router.post('/save_collegearticle', controller.save_collegearticle);
router.post('/save_collegeevent', controller.save_collegeevent);
router.post('/save_gallerygrp', controller.save_gallerygrp);







module.exports = router;