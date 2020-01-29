'use strict';
const express = require('express');
const controller = require('./course.controller');
const router = express.Router();

router.post('/', controller.save_courses);
router.get('/get_course', controller.get_course);


module.exports = router;
