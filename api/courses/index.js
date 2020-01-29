'use strict';
const express = require('express');
const controller = require('./courses.controller');
const router = express.Router();

router.post('/', controller.save_course);
router.get('/', controller.get_course);
router.post('/save_coursetype', controller.save_coursetype);
router.post('/save_courseduration', controller.save_courseduration);
router.post('/save_courseadmission', controller.save_courseadmission);
router.get('/get_admission', controller.get_admission);

router.post('/save_coursefee', controller.save_coursefee);
router.post('/save_overview', controller.save_overview);
router.post('/save_courseskill', controller.save_courseskill);
router.post('/save_coursecriteria', controller.save_coursecriteria);
router.post('/save_courserecruiter', controller.save_courserecruiter);
router.post('/save_coursecurriculum', controller.save_coursecurriculum);
router.post('/save_exam', controller.save_exam);
router.post('/save_courseexam', controller.save_courseexam);


module.exports = router;